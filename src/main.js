import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import vueResource from 'vue-resource'
import App from './App.vue';
import store from './store/store';

Vue.use(VueRouter)
Vue.use(vueResource)

Vue.http.options.root = "https://vuejs-stock-trader-4f297.firebaseio.com/";

/**
 * Router
 */
const router = new VueRouter({
  mode: 'history',
  routes
})


/**
 * Currency Filter
 */
Vue.filter('currency', (value) => {
  return `${value.toLocaleString()} :Naira`;
});


new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
