<template>
  <main class="app-root-wrapper">
    <device-view :class="deviceClass" />
    <div v-if="updateExists" class="fixed z-20 pin-t pin-x full-width my-5">
      <p class="py-3 w-4/5 text-center bg-grey-darkest rounded text-white text-sm flex justify-center align-center mx-auto">
        New version of StonePaperScissor is available
        <button id="refresh-button" class="uppercase ml-1 font-bold text-blue-light" @click="refreshApp">
          <i class="fa fa-refresh" />Update
        </button>
      </p>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';
import {
  isIOS,
  isAndroid,
  isSafari,
  isMobileOnly,
} from 'mobile-device-detect';
// import { defaultCoreCipherList } from 'constants';
// import { isMobileOnly } from 'mobile-device-detect';
const getAppVersion = () => {
  const url = `/package.json?c=${Date.now()}`;
  const headers = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  };

  return fetch(url, { headers }).then(response => response.json());
};

export default {
  name: 'App',
  components: {
    DeviceView: () =>{
    if (isMobileOnly) {
      return import('./Mobile.vue');
    }
    return import('./Desktop.vue');
    }
  },
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
      platform: null,
    };
  },
  computed: {
    deviceClass() {
      let classStr = ' ';
      classStr += isMobileOnly ? ' mobile-wrapper ' : ' desktop-wrapper';
      classStr += isSafari ? ' safari ' : '';
      classStr += isIOS ? ' ios' : '';
      classStr += isAndroid ? ' android' : '';
      classStr += this.$route.name !== 'Dashboard.Article.Detail' ? ' ios-safe-padding-top' : '';
      return classStr;
    },
  },
  mounted() {
    const handleScreenFocus = () => {
      if (isIOS && document.visibilityState === 'visible') {
        const currentVersion = global.localStorage.getItem('appVersion');
        getAppVersion()
          .then((data) => {
            if (data.version !== currentVersion) {
              global.localStorage.setItem('appVersion', data.version);
              this.showRefreshUI({});
            }
          });
      }
    };

    document.addEventListener('visibilitychange', handleScreenFocus);
    // ---
    // Custom code to let user update the app
    // when a new service worker is available
    // ---
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true });

    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.refreshing) return;
        this.refreshing = true;
        // Here the actual reload of the page occurs
        window.location.reload(true);
      });
    }
    // ---
    // Custom code to let user update the app
    // when a new service worker is available
    // ---
    // document.addEventListener('swUpdated', this.showRefreshUI, { once: true });

    // if (navigator.serviceWorker) {
    //   navigator.serviceWorker.addEventListener('controllerchange', () => {
    //     if (this.refreshing) return;
    //     this.refreshing = true;
    //     // Here the actual reload of the page occurs
    //     window.location.reload();
    //   });
    // }

    // this.$cordova.on('deviceready', () => {
    //   this.platform = cordova.platformId;
    //   this.updateBiometricStatus();
    //   this.cordovaInit();
    //   this.setUpFirebase();
    //   this.checkRootedDevice();
    //   // this.checkSSLPinning();
    //   this.requestLocationAccuracy();
    // });
  },
  methods: {
    ...mapActions(['biometricLogin', 'updateBiometricStatus']),
    hideMessage() {
      this.showMessage = false;
    },
    showRefreshUI(e) {
      this.registration = e.detail;
      this.updateExists = true;
    },
    refreshApp() {
      window.location.reload(true);
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) return;
      // send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage('skipWaiting');
    },
    cordovaInit() {
      if (window.universalLinks) {
        window.universalLinks.subscribe('universalLinkEvent', (eventData) => {
          // eslint-disable-next-line
          alert(`Did launch application from the link: ${JSON.stringify(eventData)}`);
        });
      }

      // if (cordova.plugins.SecureStorage) {
      //   window.plugins.secureStorage = new cordova.plugins.SecureStorage(
      //     (() => {
      //       console.log('gsocialGoKeychainStorage successfully initialized'); // eslint-disable-line
      //     }),
      //     ((error) => {
      //       console.log(`Error in initalizing gsocialGoKeychainStorage ${error}`); // eslint-disable-line
      //     }),
      //     'gsocialGoKeychainStorage',
      //   );
      // }

      this.biometricLogin();
    },
    setUpFirebase() {
      if (window.FirebasePlugin) {
        window.FirebasePlugin.subscribe('articles');
        window.FirebasePlugin.grantPermission();
        window.FirebasePlugin.hasPermission((data) => {}); // eslint-disable-line
        window.FirebasePlugin.getToken((token) => {
          console.log('tkoejn', token);
        }, (error) => {
          console.log('tkoejn err', error);
        }); // eslint-disable-line
        window.FirebasePlugin.onTokenRefresh((token) => {
          console.log('tkoejn', token);
        }, (error) => {
          console.log('tkoejn err', error);
        }); // eslint-disable-line
        window.FirebasePlugin.onNotificationOpen((notification) => {}, (error) => {}); // eslint-disable-line
      }
    },
    checkRootedDevice() {
      if ((window.aditya !== null && window.aditya !== undefined) && (window.aditya.rootdetection !== null && window.aditya.rootdetection !== undefined)
    && (window.aditya.rootdetection.RootDetection !== null && window.aditya.rootdetection.RootDetection !== undefined)) {
        window.aditya.rootdetection.RootDetection.isDeviceRooted((val) => {
          if ((val !== null && val !== undefined) && (val.isRootDevice !== null && val.isRootDevice !== undefined) && val.isRootDevice === true) {   /* eslint-disable-line */
            alert('This device is rooted, GSocialGo can not be run on this device'); // eslint-disable-line
          }
        }, (err) => {}); // eslint-disable-line
      }
    },
    checkSSLPinning() {
      // https://master.d1zgw8195thy3y.amplifyapp.com/
      const server = 'https://gsocialgo.genpact.com';
      const fingerprint = '9A 38 7E 25 5F C6 8C 0C 0F 24 EF 99 FA 6F E2 E9 22 EA F5 13 D5 E5 85 FE F2 A1 68 FD 92 24 00 5D';

      function successCallback(message) {   /* eslint-disable-line */
      // Message is always: CONNECTION_SECURE.
      // Now do something with the trusted server.
      }

      function errorCallback(message) {
        function alertDismissed() {
          cordova.plugins.exit();
        }

        if (navigator.notification) {
          navigator.notification.alert(
            message,
            alertDismissed, // callback
            'Security Error', // title
            'Close', // buttonName
          );
        } else cordova.plugins.exit();

        if (message === 'CONNECTION_NOT_SECURE') {
        // There is likely a man in the middle attack going on, be careful!
        } else if (message.indexOf('CONNECTION_FAILED') > -1) {
        // There was no connection (yet). Internet may be down. Try again (a few times) after a little timeout.
        }
      }

      if (window.plugins && window.plugins.sslCertificateChecker) {
        window.plugins.sslCertificateChecker.check(
          successCallback,
          errorCallback,
          server,
          fingerprint,
        );
      }
    },
    requestToEnableGPS() {

    },

    onError(error) {
      console.error(`The following error occurred: ${error}`);
    },

    handleLocationAuthorizationStatus(status) {
      switch (status) {
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
          if (this.platform === 'ios') {
            this.onError('Location services is already switched ON');
          } else {
            this.makeRequest();
          }
          break;
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
          this.requestLocationAuthorization();
          break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED:
          if (this.platform === 'android') {
            this.onError('User denied permission to use location');
          } else {
            this.makeRequest();
          }
          break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
          // Android only
          this.onError('User denied permission to use location');
          break;
        case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
          // iOS only
          this.onError('Location services is already switched ON');
          break;
        default:
          console.log('default called');
          break;
      }
    },

    requestLocationAuthorization() {
      cordova.plugins.diagnostic.requestLocationAuthorization(this.handleLocationAuthorizationStatus, this.onError);
    },

    requestLocationAccuracy() {
      cordova.plugins.diagnostic.getLocationAuthorizationStatus(this.handleLocationAuthorizationStatus, this.onError);
    },

    makeRequest() {
      cordova.plugins.locationAccuracy.canRequest(function (canRequest) {
        if (canRequest) {
          cordova.plugins.locationAccuracy.request(() => {
            alert('Location accuracy request successful');
          }, function (error) {
            this.onError(`Error requesting location accuracy: ${JSON.stringify(error)}`);
            if (error) {
              // Android only
              this.onError(`error code=${error.code}; error message=${error.message}`);
              if (this.platform === 'android' && error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED) {
                if (window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")) {
                  cordova.plugins.diagnostic.switchToLocationSettings();
                }
              }
            }
          }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
        } else {
          // On iOS, this will occur if Location Services is currently on OR a request is currently in progress.
          // On Android, this will occur if the app doesn't have authorization to use location.
          this.onError('Cannot request location accuracy');
        }
      });
    },
  },
};
</script>

<style src="@/styles/tailwind.css" />
<style src="@fortawesome/fontawesome-free/css/all.css" />
