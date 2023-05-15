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
                        <router-link class="nav-link" aria-current="page" to="/"> الصفحة الرئيسية </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"> معلومات عنا </router-link>
                    </li>

                    <!-- dropdown  -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            خدماتنا
                        </a>
                        <ul class="boxShadow border-0 dropdown-menu" aria-labelledby="navbarDropdown">
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

                <!-- lang  -->
                <button class="btn langBtn">
                    EN
                </button>

                <router-link to='/' class="bordered_btn">
                    طلب استشارة
                </router-link>

                <button class="btn main_btn"> تسجيل الدخول </button>
            </section>
            
        </div>
    </section>

    <!-- slider  -->
    <swiper />
  </section>
</template>

<script>
import swiper from './homeSwiper.vue'
export default {
    components:{
        swiper
    }
}
</script>

<style lang="scss">
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
            .social_media{
                img{
                    width: 20px;
                    height: 20px;
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
        right: 106%;
        top: -48px;
        opacity: 0;
        transition: 0.3s all;
        list-style: none;
        width: 190px;
        height: 138px;
        border-radius: 9px;
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

    .navbar-collapse {
        flex-basis: inherit !important;
        flex-grow: unset !important;
        align-items: center;
    }

</style>