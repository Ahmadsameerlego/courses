import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import askAdvise from '../views/AskAdvise.vue'
import OurServices from '../views/OurServices.vue'
import singleService from '../views/singleService.vue'
import singleAdviser from '../views/singleAdviser.vue'
import singleCourse from '../views/reserveCoruse.vue'
import userProfile from '../views/userProfile.vue'
import AboutUs from '../views/AboutUs.vue';
import subscribes from '../views/subscribesTypes.vue';
import contactUs from '../views/ContactUS.vue';
import advisorProfile from '../views/advisorProfile.vue'
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
    path: '/OurServices/:id',
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
  },
  {
    path : '/userProfile',
    name : 'userProfile',
    component : userProfile
  },
  {
    path: '/AboutUs',
    name : 'AboutUs',
    component : AboutUs
  },
  {
    path : '/subscribes',
    name : 'subscribes',
    component : subscribes
  },
  {
    path : '/contactUs',
    name : 'contactUs',
    component : contactUs
  },
  {
    path: '/advisorProfile',
    name : 'advisorProfile',
    component : advisorProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
