<template>
  <section id="header">


    <!-- header top  -->
    <section class="header_top pt-2 pb-2">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <!-- right side  -->
                <div class="email d-flex">
                    <span class="whiteColor"> contact@aidree.com </span>
                    <img :src="require('@/assets/imgs/direct.png')" alt="">
                </div>

                <!-- left side  -->
                <div class="social_media">
                    <a href="#">
                        <img :src="require('@/assets/imgs/youtube-svgrepo-com.png')" alt="">
                    </a>
                    <a href="#">
                        <img :src="require('@/assets/imgs/Vector (1).png')" alt="">
                    </a>
                    <a href="#">
                        <img :src="require('@/assets/imgs/Group (1).png')" alt="">
                    </a>
                    <a href="#">
                        <img :src="require('@/assets/imgs/Group (2).png')" alt="">
                    </a>
                    <a href="#">
                        <img :src="require('@/assets/imgs/Vector (2).png')" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- header bottom  -->
    <section class="header_bottom pt-2 pb-2">
        <div class="container d-flex justify-content-between align-items-center">
            <!-- logo  -->
            <div class="logo">
                <img :src="require('@/assets/imgs/image 74.png')" alt="">
            </div>

            <!-- navbar  -->
            <div class="navbar-collapse" id="navbarSupportedContent">
                <ul class="flex-row justify-content-start navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/"> {{ $t('nav.home') }} </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"> معلومات عنا </router-link>
                    </li>

                    <!-- dropdown  -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            خدماتنا
                        </a>
                        <ul class="boxShadow border-0 dropdown-menu" style="padding-left:20px;padding-right:20px" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link class="d-flex dropdown-item mb-2" to="/"> 
                                    <img :src="require('@/assets/imgs/fly.png')" class="dropImage" alt="">
                                    <span>تصميم الجرافيك</span>
                                </router-link>
                            </li>
                            <li class="hoveredLink position-relative">
                                <a class=" d-flex justify-content-between align-items-center dropdown-item dropdown-toggle mb-2" href="#" >
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/dq.png')" class="dropImage" alt="">
                                        <span> تكنولوجيا  (IT)  </span>
                                    </div>

                                    <i class="fa-solid fa-caret-left"></i>
                                </a>
                                <ul class="hoveredDrop boxShadow border-0 px-0" aria-labelledby="navbarDropdown2">
                                    <li>
                                        <router-link class="dropdown-item text-end mb-2 mt-2" to="/"> قواعد البيانات </router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item text-end mb-2" to="/" >صيانة الكمبيوتر</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item text-end mb-2" to="/" >الشبكات</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <router-link class="d-flex dropdown-item mb-2" to="/"> 
                                    <img :src="require('@/assets/imgs/data-211.png')" class="dropImage" alt="">
                                    <span>قواعد البيانات</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/"> الباقات </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"> تواصل معنا </router-link>
                    </li>
                </ul>
            </div>

            <!-- user interaction  -->
            <section class="user_iter_action d-flex justify-content-between align-items-center">
                <!-- search  -->
                <button class="btn searchBtn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <!-- search  -->
                <!-- <button class="btn searchBtn">
                    <i class="fa-solid fa-bell mainColor"></i>
                </button> -->
                <!-- profile  -->
                <!-- <button style="padding:6px" class="btn searchBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img :src="require('@/assets/imgs/Background (1).png')" class="profileImage" alt="">
                </button> -->
                
                <!-- profile dropdown  -->
                <ul class="dropdown-menu boxShadow border-none" aria-labelledby="dropdownMenuButton1" style="width:20%">
                    <div class="d-flex align-items-center border-bottom pt-2 mx-2">
                        <img :src="require('@/assets/imgs/Background (1).png')" class="profileImage mx-2" alt="">
                        <div>
                            <h6 class="fw-6 text-end"> أحمد سمير </h6>
                            <p class="text-muted mb-0"> ahmad@gmail.com </p>
                        </div>
                    </div>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/userProfile">
                            <img :src="require('@/assets/imgs/u1.png')" class="" alt="">
                            <span class="fw-6 mx-2">حسابي</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/">
                            <img :src="require('@/assets/imgs/Icon22.png')" class="" alt="">
                            <span class="fw-6 mx-2">طلباتي</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/">
                            <img :src="require('@/assets/imgs/text.png')" class="" alt="">
                            <span class="fw-6 mx-2">الفواتير</span>
                        </router-link>
                    </li>
                    <li class="border-bottom mx-2 pt-2 pb-2">
                        <router-link class="dropdown-item align-items-center d-flex" to="/">
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
                        <router-link class="dropdown-item align-items-center d-flex" to="/">
                            <img :src="require('@/assets/imgs/logout.png')" class="" alt="">
                            <span class="fw-6 mx-2">تسجيل الخروج</span>
                        </router-link>
                    </li>
                </ul>

                <!-- lang  -->
                <button class="btn langBtn" @click="switchLang">
                    <span v-if="$i18n.locale=='en'" >AR</span>
                    <span v-else-if="$i18n.locale=='ar'" >EN</span>
                </button>

                <router-link to='/askAdvise' class="bordered_btn">
                    طلب استشارة
                </router-link>

                <button class="btn main_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"> تسجيل الدخول </button>

                

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
export default {
    data(){
        return{
            home : true
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
    },
    computed:{
        isIndexPage() {
            return this.$route.path === '/';
        }

    }
}
</script>

<style lang="scss">
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
    right: 112%;
    top: -48px;
    opacity: 0;
    transition: 0.3s all;
    list-style: none;
    width: 190px;
    height: 138px;
    border-radius: 9px;
    background: #fff;
    }
    .hoveredLink:hover .hoveredDrop{
        opacity: 1;
    }
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
</style>