import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import {routes} from "./router.js";

const router = new VueRouter({
  routes,
  mode: 'history'
});

export const eventBus = new Vue({
  methods: {
    changeServer(server) {
      this.$emit('serverWasChanged', server);
    }
  }
});

Vue.filter('countText', function(value) {
  if (value.length == 0) {
    return
  }
  return value + '(' + value.length + ')';
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
