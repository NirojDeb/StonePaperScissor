import Vue from 'vue';
import vf from 'vue-forage';
import VueDayjs from 'vue-dayjs-plugin';

const req = require.context('./', true, /\.(js|vue|jpeg)$/i);
const filteredFiles = req.keys().filter(key => !key.includes('/index.js'));
filteredFiles.forEach((plugin) => {
  Vue.use(req(plugin).default);
});

Vue.use(vf);
Vue.use(VueDayjs);
