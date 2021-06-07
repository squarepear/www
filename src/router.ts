import { createRouter, createWebHistory } from 'vue-router'

import About from './views/About.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/projects', name: 'Projects', component: Projects }
  ]
})

export default router