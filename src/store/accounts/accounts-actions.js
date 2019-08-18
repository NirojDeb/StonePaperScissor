export default ({ $http, $vf }) => ({
  login(context, payload) {
    return $http
      .post('/api/v1/login', payload, {
        requestName: 'login',
      })
      .then(async (res) => {
        const response = res.data;
        response.user = response.profile;
        delete response.profile;

        $http.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`;

        try {
          await $vf.setItem('accessToken', response.accessToken);
          await $vf.setItem('user', response.user);
        } catch (e) {
          console.warn('Error setting localforage values'); // eslint-disable-line
        }

        if (response.sessionRedirectUrl && process.env.NODE_ENV === 'production' && window.location.origin.includes('gsocialgo')) window.location.replace(response.sessionRedirectUrl);
        else if (window.cordova) {
          setTimeout(() => {
            const options = 'location=no,navigationbuttoncolor=#ffffff,closebuttoncaption=Close,closebuttoncolor=#ffffff,enableViewportScale=yes,hidden=yes';
            const inAppBrowserRef = window.cordova.InAppBrowser.open(response.sessionRedirectUrl, '_blank', options);
            inAppBrowserRef.addEventListener('loadstop', () => {
              inAppBrowserRef.close();
            });
          }, 500);
        }

        if (window.cordova && window.plugins.touchid && window.plugins.secureStorage) {
          if (payload.type !== 'biometric') {
            window.plugins.secureStorage.keys((keys) => {
              if (!keys.includes('passwordCreds')) {
                window.plugins.touchid.isAvailable(() => {
                  window.plugins.touchid.verifyFingerprint(
                    'Verify biometric authentication', // this will be shown in the native scanner popup
                    () => {
                      window.plugins.secureStorage.set(() => {
                        console.log('Successfully set passwordCreds in keychain'); // eslint-disable-line
                      }, (error) => {
                        console.warn(`Error ${error}`); // eslint-disable-line
                      },
                      'passwordCreds',
                      `${payload.username}:::${payload.password}`);
                    },
                    () => {
                      alert('Cannot verify your biometric information. Please try again later'); // eslint-disable-line
                    },
                  );
                },
                () => {
                  console.warn('Biometric ID not available'); // eslint-disable-line
                });
              } else {
                window.plugins.secureStorage.get(
                  async (value) => {
                    const [username] = value.split(':::');
                    if (username !== payload.username) {
                      const onConfirm = (buttonIndex) => {
                        if (parseInt(buttonIndex, 10) === 1) {
                          window.plugins.touchid.verifyFingerprint(
                            'Verify biometric authentication', // this will be shown in the native scanner popup
                            () => {
                              window.plugins.secureStorage.set(() => {
                                console.log('Successfully set passwordCreds in keychain'); // eslint-disable-line
                                alert('Successfully updated biometric data'); // eslint-disable-line
                              }, (error) => {
                                console.warn(`Error ${error}`); // eslint-disable-line
                              },
                              'passwordCreds',
                              `${payload.username}:::${payload.password}`);
                            },
                            () => {
                              alert('Cannot verify your biometric information. Please try again later'); // eslint-disable-line
                            },
                          );
                        } else {
                          window.plugins.secureStorage.clear(() => {
                            console.log('passwordCreds Cleared'); // eslint-disable-line
                          },
                          () => {
                            console.warn('Error clearing passwordCreds'); // eslint-disable-line
                          });
                        }
                      };

                      navigator.notification.confirm(
                        'User saved for biometric(FaceID/Fingerprint) authentication is different than the current logged in user, do you want to update the biometric authentication to use the new user credentials?',
                        onConfirm, // callback to invoke with index of button pressed
                        'Update Biometric(FaceID/Fingerprint) User Data?', // title
                        ['Confirm', 'Cancel'], // buttonLabels
                      );
                    }
                  },
                  () => {
                    // alert('Critical error in getting the keychain value. Please login again.'); // eslint-disable-line
                  },
                  'passwordCreds',
                );
              }
            },
            () => {
              // error callback
            });
          }
        }

        context.commit('setLoggedInState', response);
        context.commit('setNextRouteState', {
          next: context.rootState.route.query.redirect ? context.rootState.route.query.redirect : '/dashboard',
        });

        return response;
      })
      .catch((err) => {
        context.dispatch('addToastNotifications', {
          text: 'Invalid username or password',
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  biometricLogin(context) {
    const cleanup = () => {
      context.dispatch('logout');
      navigator.splashscreen.hide();
    };

    if (window.plugins.touchid && window.plugins.secureStorage) {
      window.plugins.secureStorage.keys((keys) => {
        if (keys.includes('passwordCreds')) {
          window.plugins.touchid.isAvailable(() => {
            window.plugins.touchid.didFingerprintDatabaseChange((changed) => {
              if (!changed) {
                window.plugins.touchid.verifyFingerprintWithCustomPasswordFallback(
                  'Biometric authentication required', // this will be shown in the native scanner popup
                  () => {
                    window.plugins.secureStorage.get(
                      async (value) => {
                        // navigator.splashscreen.show();
                        const [username, password] = value.split(':::');
                        try {
                          await context.dispatch('login', {
                            username,
                            password,
                            type: 'biometric',
                          });
                          setTimeout(() => {
                            context.commit('setNextRouteState', {
                              next: '/dashboard/articles',
                            });
                            navigator.splashscreen.hide();
                          }, 150);
                        } catch (e) {
                          alert('Authentication error. Password might have changed. Please login again.'); // eslint-disable-line
                          cleanup();
                        }
                      },
                      () => {
                        alert('Critical error in getting the keychain value. Please login again.'); // eslint-disable-line
                        cleanup();
                      },
                      'passwordCreds',
                    );
                  },
                  () => {
                    console.warn('Biometric ID failure'); // eslint-disable-line
                    cleanup();
                  },
                );
              }
            });
          },
          () => {
            console.warn('Biometric ID not available'); // eslint-disable-line
            setTimeout(() => {
              navigator.splashscreen.hide();
            }, 1000);
          });
        } else {
          console.warn('Password creds does not exist in keychain.'); // eslint-disable-line
          setTimeout(() => {
            navigator.splashscreen.hide();
          }, 1000);
        }
      },
      () => {
        console.warn('Error accessing keychain storage.'); // eslint-disable-line
      });
    }
  },

  async getSessionFromLocalDb(context) {
    const [accessToken, user] = await Promise.all([$vf.getItem('accessToken'), $vf.getItem('user')]);
    const obj = {
      accessToken,
      user,
    };
    context.commit('updateSessionFromLocalDbInStore', obj);
    return obj;
  },

  logout(context, redirectUrl) {
    delete $http.defaults.headers.common.Authorization;
    $vf.clear();
    context.commit('setNextRouteState', {
      next: `/login${redirectUrl ? `?redirect=${redirectUrl}` : ''}`,
    });
    context.commit('setLoggedOutState');
  },

  getProfile(context) {
    return $http.get('/api/v1/account/profile', {
      requestName: 'getProfile',
    })
      .then((res) => {
        const response = res.data;
        context.commit('setProfileState', response);
        return response;
      }).catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err
            .message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  async fetchUserPreferences(context) {
    console.log('reac');
    const categoryPref = await $vf.getItem('categoryPref');
    return $http.get('/api/v1/account/preferences', {
      requestName: 'fetchUserPreferences',
    })
      .then((res) => {
        const response = res.data;
        context.commit('setProfilePreferencesInState', response);
        // context.commit('setCategoryPreferencesInState', response.Categories);
        context.commit('setCategoryPreferencesInState', categoryPref);
        return response;
      }).catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err
            .message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  updateProfile(context, payload) {
    return $http.put('/api/v1/account/profile', payload, {
      requestName: 'updateProfile',
    })
      .then((res) => {
        const response = res.data;
        context.commit('updateProfileState', payload);
        context.dispatch('addToastNotifications', {
          text: 'Successfully updated profile details',
          timer: 4000,
        });
        return response;
      }).catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err
            .message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  getWorkHistory(context) {
    return $http.get(
      '/api/v1/account/work-history', {
        requestName: 'getWorkHistory',
      },
    )
      .then((res) => {
        const response = res.data;
        context.commit('setWorkHistoryInState', response);
        return response;
      }).catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err
            .message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  getITAssets(context) {
    return $http.get(
      '/api/v1/account/it-assets', {
        requestName: 'getITAssets',
      },
    )
      .then((res) => {
        const response = res.data;
        context.commit('setITAssetsInState', response);
        return response;
      }).catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err
            .message,
          timer: 4000,
          type: 'error',
        });
        throw (err.response && err.response.data && err.response.data.message) || err;
      });
  },

  getRewards(context) {
    return $http.get('/api/v1/account/rewards', {
      requestName: 'getRewards',
    })
      .then((res) => {
        const response = res.data;
        context.commit('setRewardsInState', response);
        return response;
      }).catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err
            .message,
          timer: 4000,
          type: 'error',
        });
      });
  },

  getApprovalRequests(context) {
    return $http.get('/api/v1/approval-requests', {
      requestName: 'getApprovalRequests',
    })
      .then((res) => {
        const response = res.data;
        context.commit('setApprovalRequestsInState', response);
        return response;
      });
  },

  updateApprovalRequests(context, data) {
    const payload = {
      ...data,
      Signature_InstanceID: data.Signature_Instance_ID__c,
    };
    return $http.put('/api/v1/approval-requests', payload, {
      requestName: 'updateApprovalRequests',
    })
      .then((res) => {
        const response = res.data;
        context.commit('updateApprovalRequestsInState', data);
        context.dispatch('addToastNotifications', {
          text: `Request successfully ${data.Approval_Status}`,
          timer: 4000,
        });
        return response;
      }).catch((err) => {
        context.dispatch('addToastNotifications', {
          text: (err.response && err.response.data && err.response.data.message) || err
            .message,
          timer: 4000,
          type: 'error',
        });
      });
  },
});
