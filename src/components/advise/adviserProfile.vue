<template>
    <section class="adviseProfile mt-4">
        <div class="container">
            <div class="top_part">
                <div class="row">
                    <div class="col-md-9 mb-2">
                        <!-- adviser main info  -->
                        <div class="mainInfo d-flex">
                            <div class="infoImage">
                                <img :src="require('@/assets/imgs/pexels-andrea-piacquadio-3978564 3 (2).png')" alt="">
                            </div>
                            <div class="details">
                                <h5 class="fw-bold"> أحمد سمير </h5>
                                <p class="text-muted fs-15"> تصميم جرافيك </p>
                                <div class="rate">
                                    <i class="fa-solid fa-star gold text-muted"></i>
                                    <i class="fa-solid fa-star gold text-muted"></i>
                                    <i class="fa-solid fa-star gold text-muted"></i>
                                    <i class="fa-solid fa-star gold text-muted"></i>
                                    <i class="fa-solid fa-star gold text-muted"></i>
                                    <span> 5.0 </span>
                                </div>
                            </div>

                            <div class="abs_teach">
                                <img :src="require('@/assets/imgs/medal-star.png')" alt="">
                            </div>
                        </div>

                        <!-- experts  -->
                        <div class="experts mt-3">
                            <h6 class="mb-3 fw-bold befored_title mainColor">
                                الخبرات
                            </h6>
                            <p class="o-5">
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل 
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="statisticsList">
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/Vector.png')" alt="">
                                    <span class="whiteColor">المشاهدات</span>
                                </div>
                                <span class="whiteColor fw-bold">1000</span>
                            </div>
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/briefcase.png')" alt="">
                                    <span class="whiteColor">الاستشارات</span>
                                </div>
                                <span class="whiteColor fw-bold">1000</span>
                            </div>
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/personalcard.png')" alt="">
                                    <span class="whiteColor">متلقي الاستشارات</span>
                                </div>
                                <span class="whiteColor fw-bold">1000</span>
                            </div>
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/teacher_white.png')" alt="">
                                    <span class="whiteColor">الدورات التدريبية</span>
                                </div>
                                <span class="whiteColor fw-bold">1000</span>
                            </div>

                            
                        </div>


                        <div>
                                <router-link to="/" class="btn main_btn w-100 pt-2 pb-2 mt-3">
                                    حجز استشارة
                                </router-link>
                            </div>

                    </div>
                </div>
            </div>

            <!-- أوقات العمل  -->
            <div class="top_part mt-4 mb-3">
                <h6 class="mb-3 fw-bold befored_title mainColor">
                     أوقات العمل
                </h6>

                <p class="fw-6">الاثنين 9:00 ص إلى 9:00 م</p>
                <p class="fw-6">الاثنين 9:00 ص إلى 9:00 م</p>
                <p class="fw-6">الاثنين 9:00 ص إلى 9:00 م</p>
            </div>
            <!-- الدورات التدريبية  -->
            <div class="top_part mt-4 mb-3">
                <h6 class="mb-3 fw-bold befored_title mainColor">
                     الدورات التدريبية
                </h6>

                <div class="row">
                    <div class="col-md-4 mb-2">
                        <!-- single course  -->
                        <div class="single_course boxShadow">
                            <!-- course image  -->
                            <div class="course_image">
                                <img :src="require('@/assets/imgs/Rectangle 2186.png')" alt="">
                            </div>
                            <!-- course details  -->
                            <div class="course_details mx-3">
                                <h6 class="fw-bold mt-2">تعلم كيفية  استخدام الرسم التوضيحي الرقمي</h6>

                                <div class="d-flex">
                                    <p class="fw-6">أحمد سمير</p>
                                    <div class="course_time">
                                        <span class="fw-6 mainColor"> 40 دقيقة </span>
                                    </div>
                                    <p class="fw-6 text-muted"> 120 طالب </p>
                                </div>
                            </div>

                            <!-- reserve course  -->
                            <div class="mx-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="fw-6 mainColor mb-2">200 جنية</h6>
                                    <p class="fw-6 mainColor">600 جنية</p>
                                </div>

                                <div>
                                    <router-link to="/singleCourse/1" class="pt-2 pb-2 btn main_btn">
                                        احجز الان
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- التقييمات  -->
            <div class="top_part mt-4 mb-3">
                <h6 class="mb-3 fw-bold befored_title mainColor">
                     التقييمات
                </h6>

                           <!-- start slider  -->
                <swiper
                    :modules="modules"
                    :slides-per-view="3"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    effect="fade"
                    :centeredSlides="true"
                    :autoplay="{
                        delay: 3500,
                        disableOnInteraction: false,
                    }"
                    
                    :loop="true"
                    class="testSlide mt-5"
                >
                    <!-- slide 1  -->
                    <swiper-slide>
                        <!-- single slide  -->
                        <div class="single_slide boxShadow">
                            <div class="d-flex align-items-center">
                                <img :src="require('@/assets/imgs/Background (1).png')" alt="" class="test_slide_image">

                                <div>
                                    <h6 class="fw-bold"> شركة صناعة الأجهزة المنزلية </h6>

                                    <div class="d-flex">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-2">
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص هو مثال  
                            </p>
                        </div>
                    </swiper-slide>

                    <!-- slide 2  -->
                    <swiper-slide>
                        <!-- single slide  -->
                        <div class="single_slide boxShadow">
                            <div class="d-flex align-items-center">
                                <img :src="require('@/assets/imgs/Background (1).png')" alt="" class="test_slide_image">

                                <div>
                                    <h6 class="fw-bold"> شركة صناعة الأجهزة المنزلية </h6>

                                    <div class="d-flex">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-2">
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص هو مثال  
                            </p>
                        </div>
                    </swiper-slide>

                    <!-- slide  -->
                    <swiper-slide>
                    <!-- single slide  -->
                    <div class="single_slide boxShadow">
                        <div class="d-flex align-items-center">
                            <img :src="require('@/assets/imgs/Background (1).png')" alt="" class="test_slide_image">

                            <div>
                                <h6 class="fw-bold"> شركة صناعة الأجهزة المنزلية </h6>

                                <div class="d-flex">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <p class="mt-2">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص هو مثال  
                        </p>
                    </div>
                    </swiper-slide>
                    <!-- slide  -->
                    <swiper-slide>
                        <!-- single slide  -->
                        <div class="single_slide boxShadow">
                            <div class="d-flex align-items-center">
                                <img :src="require('@/assets/imgs/Background (1).png')" alt="" class="test_slide_image">

                                <div>
                                    <h6 class="fw-bold"> شركة صناعة الأجهزة المنزلية </h6>

                                    <div class="d-flex">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-2">
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص هو مثال  
                            </p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
  // Import Swiper Vue.js components
  import {  A11y, Autoplay  } from 'swiper';
   
  import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default {
 data(){
        return{
            rating : 5
        }
    },
    components:{
        Swiper,
        SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [ A11y, Autoplay ],

      };
    },
}
</script>

<style lang="scss" >
    .adviseProfile{
        
        .befored_title{
            position: relative;
            &::before{
                content: "";
                position: absolute;
                width: 39px;
                height: 2px;
                background: #333;
                bottom: -5px;
            }
        }
        .top_part{
            position: relative;
            margin-bottom: 20px;
            &::before{
                position: absolute;
                content: '';
                width: 100%;
                height: 1px;
                background-color: #ccc;
                bottom: -10px;
            }
        }
        .statisticsList{
            background: #333;
            border-radius: 7px;
            padding: 19px 10px;
            img{
                width: 15px;
                height:15px;
                margin: 0 5px;
            }
        }
    }

    .single_course{
        border-radius: 8px;
        img{
            width:100%;
            height:150px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
        }
        .course_time{
            margin: 0 20px;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                width: 5px;
                height:5px;
                border-radius: 50%;
                background: #E6E6E6;
                right: -10px;
                top: 6px;
            }
            &::after{
                content: '';
                position: absolute;
                width: 5px;
                height:5px;
                border-radius: 50%;
                background: #E6E6E6;
                left:-10px;
                top: 6px;
            }
        }
    }


    .mainInfo{
            position: relative;
            .infoImage{
                width:110px;
                height:110px;
                border-radius: 8px;
                img{
                    width:100%;
                    height:100%;
                    border-radius: 8px;
                }
            }
            .details{
                margin: 0 12px;
            }
        }
</style>

<style >
    svg.gold{
        color: #FFAA3E !important;
    }
</style>