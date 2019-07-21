import { isAndroid } from 'mobile-device-detect';

const handleUrlClick = (event) => {
  if (window.cordova) {
    event.preventDefault();
    let options = 'location=no,navigationbuttoncolor=#ffffff,closebuttoncaption=Close,closebuttoncolor=#ffffff,enableViewportScale=yes';
    if (isAndroid) {
      options = 'hideurlbar=yes';
    }
    window.cordova.InAppBrowser.open(event.target.href, '_blank', options);
  }
};

export default {
  bind(el) {
    el.addEventListener('click', handleUrlClick);
  },
  unbind(el) {
    el.removeEventListener('click');
  },
};
