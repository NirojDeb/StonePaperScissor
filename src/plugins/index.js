import Vue from 'vue';
import vf from 'vue-forage';

const req = require.context('./', true, /\.(js|vue)$/i);
const filteredFiles = req.keys().filter(key => !key.includes('/index.js'));
filteredFiles.forEach((plugin) => {
  Vue.use(req(plugin).default);
});

Vue.use(vf);
