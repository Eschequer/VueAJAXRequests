import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import {routes} from './routes.js'


Vue.use(VueRouter);
export const eventBus = new Vue();

// const router = new VueRouter({
//   mode: 'history',
//   routes
// });

const vm = new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app');

function generateStockPrice(min, max) {
  return min + Math.floor( Math.random() * (max - min + 1));
}




