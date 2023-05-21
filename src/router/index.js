import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import askAdvise from '../views/AskAdvise.vue'
import OurServices from '../views/OurServices.vue'
import singleService from '../views/singleService.vue'
import singleAdviser from '../views/singleAdviser.vue'
import singleCourse from '../views/reserveCoruse.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/askAdvise',
    name : 'askAdvise',
    component : askAdvise
  },
  {
    path: '/OurServices',
    name : 'OurServices',
    component : OurServices
  },
  {
    path : '/singleService/:id',
    name : 'singleService',
    component : singleService
  },
  {
    path : '/singleAdviser/:id',
    name : 'singleAdviser',
    component : singleAdviser
  },
  {
    path : '/singleCourse/:id',
    name : 'singleCourse',
    component : singleCourse
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
