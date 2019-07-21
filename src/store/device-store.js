import { version } from '../../package.json';

const initializeState = () => ({
  type: null,
  screenWidth: window.innerWidth || 620,
  screenDpi: window.devicePixelRatio || 1,
  version,
  biometricAvailable: false,
});

export default () => ({
  state: initializeState(),
  mutations: {
    updateBiometricStatusInState(state, payload) {
      state.biometricAvailable = payload || false;
    },
  },
  actions: {
    updateBiometricStatus(context) {
      let biometricAvailable = false;
      if (window.cordova) {
        window.plugins.touchid.isAvailable(() => {
          biometricAvailable = true;
          context.commit('updateBiometricStatusInState', biometricAvailable);
        },
        () => {
          console.warn('Biometric ID not available'); // eslint-disable-line
        });
      }
    },
  },
  getters: {
    device: state => state,
    screenImgWidth: state => parseInt((state.screenWidth * state.screenDpi), 10),
    version: state => state.version,
  },
});
