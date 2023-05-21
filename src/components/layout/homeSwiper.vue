<template>
    <section id="land_slider" class="position-relative">
        
            <swiper
                :modules="modules"
                :slides-per-view="1"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :pagination="{ clickable: true }"
                effect="fade"
                :autoplay="{
                delay: 3500,
                disableOnInteraction: false,
            }"
            :loop="true"


            >
                <!-- slide 1  -->
                <swiper-slide>
                    <div class="container">
                        <section class="">
                            
                            <div class="row d-flex align-items-center">
                                <div class="col-md-6">
                                    <div class="slide_right">
                                        <p class="slide_p_1 o-5">تلعب الإدارة الحكيمة، من خلال الربط بين الموارد البشرية والاستراتيجيات التنظيمية</p>
                                        <h4 class="">
                                            الاستشارات الإدارية في مجال الاستثمار والأعمال التجارية
                                        </h4>
                                        <p class="slide_p_2">
                                            وهنا يتركز هدفنا الأساس على بناء نظام عمليات على أسس مالية سليمة من شأنه تسهيل مسار الحركة المالية بحيث تكون قابلة لإدراجها في تقارير محاسبية ورفعها إلى الإدارة العليا
                                        </p>
                                        <button class="btn main_btn w-100 pt-2 pb-2">
                                            لنعمل معا
                                        </button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="slider_image position-relative">
                                        <img :src="require('@/assets/imgs/image1.png')" alt="">

                                        <div class="abs_img d-flex align-items-center px-2 pt-2 pb-2">
                                            <div>
                                                <h5 class="fw-bold text-start">100%</h5>
                                                <p class="text-start">معدل نجاح هذا العام</p>
                                            </div>
                                            <div class="left_img">
                                                <img :src="require('@/assets/imgs/Group (3).png')" alt="">
                                            </div>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </section>
                    </div>

                </swiper-slide>

                <!-- slide 2  -->
                <swiper-slide>
                    <section class="slide2 position-relative">
                        
                        <div class="row d-flex align-items-center" style="width:80%;margin:auto ">
                            <div class="col-md-6">
                                <div class="slide_right">
                                    <h4 class="">
                                        دلوقتي مع تطبيق الخاص ب اداردي
                                    </h4>
                                    <p class="slide_p_2">
                                        كل اللي ممكن تحتاجه من خدمات اداردي بقى حرفياً بين ايديك!
                                            ابدأ التعلم من أول وأكبر مكتبة للمتعلمين العرب ، مع
                                            أكثر من 750 دورة. الحصول على قدر هائل من المعرفة و
                                            المهارات التي يقدمها لك القادة والخبراء في العالم العربي ، تتراوح
                                            من الدورات المهنية إلى الدورات الترفيهية عبر مستويات مختلفة (عام ، متخصص ، خبير).
                                    </p>
                                    
                                    <div class="d-flex align-items-center mt-3">
                                        <a href="#">
                                            <img class="download_app" :src="require('@/assets/imgs/google-play-badge 1.png')" alt="">
                                        </a>
                                        <a href="#">
                                            <img class="download_app" :src="require('@/assets/imgs/Group (4).png')" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="slider_image position-relative">
                                    <img :src="require('@/assets/imgs/image 72.png')" alt="">

                                    
                                </div>                            
                            </div>
                        </div>


                    </section>
                </swiper-slide>

                <!-- slide  -->
                <swiper-slide>
                    <div class="container">

                        <section class="">
                            
                            <div class="row d-flex align-items-center">
                                <div class="col-md-6">
                                    <div class="slide_right">
                                        <p class="slide_p_1 o-5">انضم لاداري و قم بمساهمتك الآن</p>
                                        <h4 class="">
                                            الآن يمكنك التواصل مع الآلاف من المستشارين من جميع أنحاء العالم بشكل خاص
                                        </h4>
                                        <p class="slide_p_2 mt-4">
                                            <ul>
                                                <li>العمل من أي مكان , توفير الوقت والجهد والتكلفة</li>
                                                <li>
التواصل مع <span class="fw-bold">المستشارين</span> هيكون من أسهل ما يمكن وبيتم بطرق كتير، زي الشات ومكالمات الفيديو.</li>
                                            </ul>
                                        </p>

                                        <p class="mainColor fw-bold"> انضم الينا الان </p>
                                        <div class="d-flex align-items-center">
                                            <button class="bordered_btn w-50 pt-3 pb-3">
                                            انضم كعميل
                                            </button>
                                            <span class="mainColor fw-bold px-3">أو</span>
                                            <button class="btn main_btn w-50 pt-3 pb-3">
                                                انضم كمستشار
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="slider_image position-relative">
                                        <img :src="require('@/assets/imgs/pexels-andrea-piacquadio-3978564 3 (2).png')" alt="">

                                        <div class="abs_img d-flex align-items-center px-2 pt-2 pb-2">
                                            <div>
                                                <h5 class="fw-bold text-start">100%</h5>
                                                <p class="text-start">معدل نجاح هذا العام</p>
                                            </div>
                                            <div class="left_img">
                                                <img :src="require('@/assets/imgs/Group (3).png')" alt="">
                                            </div>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </section>
                    </div>
                </swiper-slide>
            </swiper>

        <div class="absolute_img">
            <img :src="require('@/assets/imgs/Vector (3).png')" alt="">
        </div>
    </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Pagination, A11y, Autoplay  } from 'swiper';
   
  import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';


export default {
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
        modules: [Pagination, A11y, Autoplay ],

      };
    },

}  
</script>
<style scoped>
.swiper{
            padding-top: 0px !important;
            padding-bottom: 80px;
        }
</style>
<style lang="scss">
    .slide2{
        background-image: url('@/assets/imgs/pexels-andrea-piacquadio-3978564 3 (1).png');
    }
    #land_slider{
        background-color: #FAF8F6;
        padding-top: 70px;
        padding-bottom: 20px;
        .slider_image{
            padding-top: 50px;
            img{
                width: 540px;
                height: 447px;
            }
        }
    }
    .slide_right{
        .slide_p_2{
            font-size: 16px;
        }
        h4{
            font-size: 26px;
            font-weight: 700;
        }
        .slide_p_1{
            font-size: 16px;
        }
    }
    .absolute_img{
        position: absolute;
        top: 5%;
        left: 5%;
    }
    .abs_img{
        position: absolute;
        top: 31px;
        z-index: 11111;
        background: #fff;
        padding: 0 12px;
        left: 6px;
        .left_img{
            width: 26px;
            height:26px;
            img{
                width: 100% !important;
                height:100% !important;
            }
        }
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
            background-color: transparent;
        }

        .swiper-pagination-bullet{
            background: #333132;
            opacity: .6;
            width: 12px;
            height: 12px;
        }
        .swiper-pagination-bullet-active{
            background: #c40f3d;
            opacity: 1 !important;
            width: 27px;
            height: 10px;
            border-radius: 59px;
        }
        
</style>