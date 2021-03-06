import Vue from 'nativescript-vue'
import App from './components/App.vue'

import VueDevtools from 'nativescript-vue-devtools'
import store from './store'

import Navigator from 'nativescript-vue-navigator'
import { routes } from './routes'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

Vue.use(Navigator, { routes })

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
