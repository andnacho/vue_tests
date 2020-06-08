import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vNode) {
    //el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
});

Vue.mixin({
  created () {
    console.log('Global mixin');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
