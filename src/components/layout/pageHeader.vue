<template>
  <section id="header">


    <!-- header top  -->
    <section class="header_top pt-2 pb-2">
        <div class="container">
            <div class="top_dir d-flex justify-content-between align-items-center">
                <!-- right side  -->
                <div class="email d-flex">
                    <span class="whiteColor"> contactus@advisersgate.com </span>
                    <img :src="require('@/assets/imgs/direct.png')" alt="">
                </div>

                <!-- left side  -->
                <div class="social_media">
                    <a :href="social.link" target="_blank" v-for="social in socials" :key="social.id">
                        <img :src="social.icon" alt="">
                    </a>
                    
                </div>
            </div>
        </div>
    </section>

    <!-- header bottom  -->
    <section class="header_bottom pt-2 pb-2">
        <div class="container  d-flex justify-content-between align-items-center" ref="headerContainer">
            <!-- logo  -->
            <div class="logo">
                <img :src="require('@/assets/imgs/image 74.png')" alt="">
            </div>

            <!-- navbar  -->
            <div class="navbar-collapse" id="navbarSupportedContent" ref="navBar">
                <ul class="flex-row justify-content-start navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-if="client||advisor">
                        <router-link class="nav-link" aria-current="page" to="/"> {{ $t('nav.home') }} </router-link>
                    </li>
                    <li class="nav-item" v-if="client||advisor">
                        <router-link class="nav-link" to="/AboutUs"> معلومات عنا </router-link>
                    </li>

                    <!-- dropdown  -->
                    <li class="nav-item dropdown" v-if="client">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            خدماتنا
                        </a>
                        <ul class="boxShadow border-0 dropdown-menu" style="" aria-labelledby="navbarDropdown">
                            <!-- <li>
                                <router-link class="d-flex dropdown-item mb-2" to="/"> 
                                    <img :src="require('@/assets/imgs/fly.png')" class="dropImage" alt="">
                                    <span>تصميم الجرافيك</span>
                                </router-link>
                            </li> -->
                            <li class="hoveredLink position-relative" v-for="cat in categories" :key="cat.id">
                                <router-link class=" d-flex justify-content-between align-items-center dropdown-item dropdown-toggle mb-2" :to="'/OurServices/'+cat.id" >
                                    <div class="d-flex">
                                        <img :src="cat.image" class="dropImage" alt="">
                                        <span> {{ cat.name }} </span>
                                    </div>

                                    <i class="fa-solid fa-caret-left"></i>
                                </router-link>
                                <ul class="hoveredDrop boxShadow border-0 px-0" aria-labelledby="navbarDropdown2" >
                                    <li v-if="cat.childs.length>0">
                                        <router-link class="dropdown-item text-end mb-2 mt-2" :to="'/singleService/'+cat.id" v-for="item in cat.childs" :key="item.id">{{ item.name}} </router-link>
                                    </li>
                                    <li v-else>
                                        <span class="text-center"> لا توجد خدمة فرعية </span>
                                    </li>
                                </ul>
                            </li>

                            
                        </ul>
                    </li>

                    <li class="nav-item" v-if="advisor">
                        <router-link class="nav-link" to="/subscribes"> الباقات </router-link>
                    </li>
                    <li class="nav-item" v-if="client||advisor">
                        <router-link class="nav-link" to="/contactUs"> تواصل معنا </router-link>
                    </li>
                </ul>
            </div>

            <!-- user interaction  -->
            <section class="user_iter_action d-flex justify-content-between align-items-center">
                <!-- search  -->
                <button class="btn searchBtn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <!-- notification  -->
                <button class="btn searchBtn" v-if="isLoggedIn==true" type="button" id="notifications" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-bell mainColor"></i>
                </button>


                <!-- notification dropdown  -->
                <ul v-if="isLoggedIn==true" class="dropdown-menu boxShadow border-none" aria-labelledby="notifications" style="width:30%">
                    <div class="d-flex align-items-baseline justify-content-between border-bottom pt-3 pb-3 mx-3">
                        <h6 class="fw-bold"> التنبيهات </h6>
                        <i class="fa-solid fa-gear fw-bold"></i>
                    </div>
                    <!-- single notification  -->

                    <div class="notificationsList" v-if="notifications.length>0">
                        <li class="border-bottom mx-2 pt-2 pb-2" v-for="notification in notifications" :key="notification.id">
                            <router-link class="position-relative dropdown-item align-items-start d-flex" to="/advisorProfile">
                                <div class="searchBtn px-2 pt-1 pb-1 bordered noti_icon">
                                    <i class="fa-solid fa-bell mainColor"></i>
                                </div>
                                <div class="d-flex flex-column align-items-start">
                                    <p class="fw-6"> {{ notification.title }} </p>
                                    <p class="text-right">
                                        {{ notification.body }}
                                    </p>
                                </div>
                                <!-- created at  -->
                                <div class="created_at">
                                    <p class="text-muted"> {{ notification.created_at }} </p>
                                </div>
                            </router-link>
                        </li>
                    </div>

                    <div class="text-center" v-else>
                        لا توجد اشعارات حتى الان
                    </div>
                    
                </ul>


                <!-- profile  -->
                <button v-if="isLoggedIn==true&&client" style="padding:6px" class="btn searchBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img :src="require('@/assets/imgs/Background (1).png')" class="profileImage" alt="">
                </button>
                
                <!-- profile dropdown  -->
                <ul v-if="isLoggedIn==true&&client" class="dropdown-menu boxShadow border-none" aria-labelledby="dropdownMenuButton1" style="width:20%">
                    <div class="d-flex align-items-center border-bottom pt-2 mx-2">
                        <img :src="require('@/assets/imgs/Background (1).png')" class="profileImage mx-2" alt="">
                        <div>
                            <h6 class="fw-6 text-end"> {{ user_name }} </h6>
                            <p class="text-muted mb-0"> {{ email }} </p>
                        </div>
                    </div>
                    
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/userProfile">
                            <img :src="require('@/assets/imgs/u1.png')" class="" alt="">
                            <span class="fw-6 mx-2">حسابي</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/userProfile">
                            <img :src="require('@/assets/imgs/Icon22.png')" class="" alt="">
                            <span class="fw-6 mx-2">طلباتي</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/userProfile">
                            <img :src="require('@/assets/imgs/text.png')" class="" alt="">
                            <span class="fw-6 mx-2">الفواتير</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/userProfile">
                            <img :src="require('@/assets/imgs/block.png')" class="" alt="">
                            <span class="fw-6 mx-2">تغيير كلمة المرور</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/">
                            <img :src="require('@/assets/imgs/v1.png')" class="" alt="">
                            <span class="fw-6 mx-2">اختيار اللغة</span>
                        </router-link>
                    </li>
                    <li class="mx-2 pt-2 pb-2">
                        <button @click.prevent="signOut()" class="dropdown-item align-items-center d-flex" to="/">
                            <img :src="require('@/assets/imgs/logout.png')" class="" alt="">
                            <span class="fw-6 mx-2">تسجيل الخروج</span>
                        </button>
                    </li>
                </ul>
                <!-- profile  -->
                <button v-if="isLoggedIn==true&&advisor" style="padding:6px" class="btn searchBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img :src="require('@/assets/imgs/Background (1).png')" class="profileImage" alt="">
                </button>
                
                <!-- profile dropdown  -->
                <ul v-if="isLoggedIn==true&&advisor" class="dropdown-menu boxShadow border-none" aria-labelledby="dropdownMenuButton1" style="width:20%">
                    <div class="d-flex align-items-center border-bottom pt-2 mx-2">
                        <img :src="require('@/assets/imgs/Background (1).png')" class="profileImage mx-2" alt="">
                        <div>
                            <h6 class="fw-6 text-end"> {{ user_name }} </h6>
                            <p class="text-muted mb-0"> {{ email }} </p>
                        </div>
                    </div>
                    <li class="border-bottom mx-2 pt-2 pb-2" v-if="advisor">
                        <router-link class="dropdown-item align-items-center d-flex" to="/advisorProfile">
                            <img :src="require('@/assets/imgs/grid-1.png')" class="" alt="">
                            <span class="fw-6 mx-2"> اللوحة الرئيسية </span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/advisorProfile">
                            <img :src="require('@/assets/imgs/u1.png')" class="" alt="">
                            <span class="fw-6 mx-2">حسابي</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/advisorProfile">
                            <img :src="require('@/assets/imgs/Icon22.png')" class="" alt="">
                            <span class="fw-6 mx-2">طلباتي</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/advisorProfile">
                            <img :src="require('@/assets/imgs/text.png')" class="" alt="">
                            <span class="fw-6 mx-2">الفواتير</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/advisorProfile">
                            <img :src="require('@/assets/imgs/block.png')" class="" alt="">
                            <span class="fw-6 mx-2">تغيير كلمة المرور</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/advisorProfile">
                            <img :src="require('@/assets/imgs/v1.png')" class="" alt="">
                            <span class="fw-6 mx-2">اختيار اللغة</span>
                        </router-link>
                    </li>
                    <li class="mx-2 pt-2 pb-2">
                        <button @click.prevent="signOut()" class="dropdown-item align-items-center d-flex" to="/">
                            <img :src="require('@/assets/imgs/logout.png')" class="" alt="">
                            <span class="fw-6 mx-2">تسجيل الخروج</span>
                        </button>
                    </li>
                </ul>

                <!-- lang  -->
                <button class="btn langBtn" @click="switchLang" v-if="isLoggedIn==false" >
                    <span v-if="$i18n.locale=='en'" >AR</span>
                    <span v-else-if="$i18n.locale=='ar'" >EN</span>
                </button>

                <router-link to='/askAdvise' class="bordered_btn" v-if="client">
                    طلب استشارة
                </router-link>

                <button class="btn main_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" v-if="isLoggedIn==false"> تسجيل الدخول </button>

                <span @click="toggleBar" class="toggleBar" ref="bar">
                    <i class="fa-solid fa-bars mainColor"></i>
                </span>

            </section>
            
        </div>
    </section>

    <!-- slider  -->
    <swiper v-if="isIndexPage" />
  </section>

    <signInModal />

</template>

<script>
import swiper from './homeSwiper.vue'
import signInModal from '../auth/signInModal.vue'
import axios from 'axios';
export default {
    data(){
        return{
            home : true,
            isLoggedIn : false,
            categories : [],
            client : false,
            advisor : false,
            user_name : '',
            email : '',
            socials : [],
            notifications : []
        }
    },
    components:{
        swiper,
        signInModal
    },
    methods:{
        
        switchLang(){
            let lang = 'ar';
            if(this.$i18n.locale == 'ar'){
                lang = 'en';
                this.arabic = false;
            }

            if(localStorage.getItem('locale')){
                localStorage.removeItem('locale');
            }

            localStorage.setItem('locale' ,lang);
            this.arabic = true;

            location.reload()
        },
        // get notifications 
        async getNotifications(){
            await axios.get('notifications', {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                    if( res.data.key == 'success' ){
                        if( this.isLoggedIn == true  ){
                            this.notifications = res.data.data.notifications.data;
                        }
                    }else{
                        this.notifications = []
                    }
                    
            } )
        },
        // get socials
        async getSocials(){
            await axios.get('socials')
            .then( (res)=>{
                this.socials = res.data.data ;
            } )
        } ,
        // logout 
        async signOut(){
            await axios.delete('sign-out', {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                     this.$swal({
                        icon: 'success',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,
                    });

                    setTimeout(() => {
                        localStorage.removeItem('token');
                        location.reload();
                        this.$router.push('/')
                    }, 2000);

                }else{
                     this.$swal({
                        icon: 'error',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,
                    });
                }
            } )
        },

        // toggle bar 
        toggleBar(){
            this.$refs.navBar.classList.toggle('active');
        },

        // get all intersts 
        async getCategories(){
            await axios.get('categories')
            .then( (res)=>{
                this.categories = res.data.data
            } )
        },
    },
    computed:{
        isIndexPage() {
            return this.$route.path === '/';
        }

    },

    mounted(){

        this.getSocials();
        this.getNotifications()

        if( localStorage.getItem('token') ){
            this.isLoggedIn = true ;
        }else{
            this.isLoggedIn = false
        }


        if( localStorage.getItem('userType') == 'client' ){
            this.client = true ;
            this.advisor = false ;
        }else if( localStorage.getItem('userType') == 'adviser' ){
            this.client = false ;
            this.advisor = true ;
        }

        this.user_name = JSON.parse(localStorage.getItem('user')).name
        this.email = JSON.parse(localStorage.getItem('user')).email

        this.getCategories()
    }
}
</script>

<style lang="scss">
.notificationsList{
    max-height: 300px;
    overflow-y: auto;
}
.dropdown-item{
    white-space:initial !important;
    p{
        text-align:right !important;
    }
}
.noti_icon{
    position: relative;
    margin-left: 12px;
    border-radius: 4px;
    &::before{
        content: "";
        position: absolute;
        top: -3px;
        right: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #C40F3D;
    }
}
.border-bottom{
    border-bottom: 1px solid #ccc;
}
.border-none{
    border: none !important;
}
    #header{
        .header_top{
            background-color: #333132;
            .email{
                span{
                    font-size: 15px;
                }
                img{
                    width:20px;
                    height:20px;
                    margin: 0 10px;
                }
            }
            
        }

        .navbar-collapse{
            a{
                font-size: 16px;
                font-weight: 400;
                margin: 0 20px;
                &.router-link-exact-active{
                    color:#C40F3D;
                    font-weight: 500;
                }
            }
            .dropImage{
                width: 20px;
                height: 20px;
                object-fit: contain;
                margin : 0 6px ;
            }
        }
    }
    .dropdown-toggle::after{
        display: none !important;
    }
    .hoveredDrop{
            position: absolute;
            right: 100%;
            top: -48px;
            display: none;
            transition: 0.3s all;
            list-style: none;
            width: 190px;
            max-height: 140px;
            min-height: 30px;
            overflow-y: auto;
            border-radius: 9px;
            background: #fff;
    }
    .hoveredLink:hover  .hoveredDrop{
        display: block;
    }
    // .hoveredDrop:hover{
    //     opacity: 1;
    // }
    .user_iter_action {
        width: 380px;
        .searchBtn{
            background-color: #F5F5F5;   
        }
        .langBtn{
            border: 1px solid #333132;
        }
        .bordered_btn{
            border: 1px solid #333132;
            border-radius: 5px;
            width: 125px;
            text-align: center;
            padding: 8px 0px;
            font-weight: 500;
            text-decoration: none;
            color: #333132 !important;
        }
    }

    .main_btn{
        width: 125px;
        padding: 5px 0;
        background: #C40F3D !important;
        color: #fff !important;
        font-size: 14px !important;
        font-weight: 500 !important;
    }
    .bordered_btn{
            border: 1px solid #333132;
            border-radius: 5px;
            width: 125px;
            text-align: center;
            padding: 8px 0px;
            font-weight: 500;
            text-decoration: none;
            color: #333132 !important;
        }

    .navbar-collapse {
        flex-basis: inherit !important;
        flex-grow: unset !important;
        align-items: center;
    }

.social_media{
                img{
                    width: 20px;
                    height: 20px;
                    margin: 0 10px;
                }
            }
.profileImage{ 
    width: 35px;
    height:35px;
}
.toggleBar{
    display: none;
    font-size: 25px;
    cursor: pointer;
}
@media(max-width:768px){
    #navbarSupportedContent{ 
        position: fixed;
        right: 0;
        margin: 0;
        padding: 0;
        background: #fff;
        z-index: 9;
        height: 100%;
        top: 0;
        width: 209px;
        transform: translateX(100%);
        transition: .3s all;
        ul{
            flex-direction: column !important;
            padding: 0;
        }
        &.active{
            transform: translateX(0);
        }
    }
    .toggleBar{
        display: block;
    }
    .bordered_btn{
        width:80px !important;
    }
    .header_bottom {
        .container{
            flex-direction: column !important;
        }
    }
    .top_dir{
        flex-direction: column !important;
    }
    .user_iter_action {
        justify-content: space-evenly !important;
    }
}

.dropdown-menu a{
    margin: 0 !important;
}

@media(max-width:768px){
    .user_iter_action {
        justify-content: space-evenly !important;
    }
}
</style>