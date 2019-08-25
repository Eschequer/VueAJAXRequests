
import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue();

const vm = new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app');



