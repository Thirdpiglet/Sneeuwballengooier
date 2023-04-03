// import Vue from 'vue'
// import App from './App.vue'
// import vuetify from './plugins/vuetify';

// Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

import drag from "v-drag";
// const drag = require("v-drag");
Vue.use(drag);

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

import VScrollLock from 'v-scroll-lock' 
Vue.use(VScrollLock, {
  bodyScrollOptions: {
    reserveScrollBarGap: true,
  },
})

// import vuetify from './plugins/vuetify';
// import tinymce from 'tinymce';

Vue.use(VueRouter);
// Vue.use(tinymce);

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')