import Vue from 'vue';

import store from './store';
import Test from './test.vue';

new Vue({
  el: '#app',
  components: {
    Test
  },
  store,
  template: '<test />'
})