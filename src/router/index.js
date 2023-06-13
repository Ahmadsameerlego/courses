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
import addCourse from '../views/adviserAddCourse.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title : 'الرئيسية'
    }
  },
  {
    path : '/askAdvise',
    name : 'askAdvise',
    component : askAdvise,
    meta:{
      title : 'طلب استشارة'
    }
  },
  {
    path: '/OurServices/:id',
    name : 'OurServices',
    component : OurServices,
    meta:{
      title : 'خدماتنا'
    }
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
    component : userProfile,
    meta:{
      title : 'حسابي'
    }
  },
  {
    path: '/AboutUs',
    name : 'AboutUs',
    component : AboutUs,
    meta:{
      title : 'معلومات عنا'
    }
  },
  {
    path : '/subscribes',
    name : 'subscribes',
    component : subscribes,
    meta:{
      title : 'الباقات'
    }
  },
  {
    path : '/contactUs',
    name : 'contactUs',
    component : contactUs,
    meta:{
      title : 'تواصل معنا'
    }
  },
  {
    path: '/advisorProfile',
    name : 'advisorProfile',
    component : advisorProfile,
    meta:{
      title : 'صفحة الاستشاري'
    }
  },
  {
    path : '/addCourse',
    name : 'addCourse',
    component : addCourse,
    meta:{
      title : 'اضافة دورة'
    }
  }
]





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const DEFAULT_TITLE = 'Adviser Website';
router.afterEach((to) => {
        document.title = to.meta.title || DEFAULT_TITLE;
});
export default router
