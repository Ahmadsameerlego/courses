import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n';
import i18n from './i18n'
// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();


import VOtpInput from "vue3-otp-input";


import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// import axios
import axios from 'axios';
axios.defaults.baseURL = 'https://admin.advisersgate.com/api/';
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');   
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.lang = sessionStorage.getItem('locale');


// import sweat alert 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// import pagination
import Paginate from "vuejs-paginate-next";


// // Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })


createApp(App).use(store).use(i18n).use(VueI18n).use(VueSweetalert2).use(FontAwesomeIcon).use(Paginate).use(router).component('VueDatePicker', VueDatePicker).component('v-otp-input', VOtpInput).mount('#app')
