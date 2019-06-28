// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
// vue
import Vue from 'vue'
// add import
import VueOnsen from 'vue-onsenui'
import firebase from 'firebase/app'
import PageEmits from './mixin/PageEmits.js'
// base plugin
import store from './store'
import App from './App'

Vue.config.productionTip = false
console.log(process.env)
console.log('ghkjbfdgs')
// setup firebase
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
}
firebase.initializeApp(config)

Vue.use(VueOnsen)
Vue.mixin(PageEmits)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
