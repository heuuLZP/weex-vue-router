import VueRouter from 'vue-router'

import HomeView from './page/HomeView.vue'
import AboutView from './page/AboutView.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/home',  component: HomeView  },
    { path: '/about', component: AboutView }
  ]
})
