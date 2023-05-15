<template>
    <section id="land_slider" class="position-relative">
        <div class="container">
            <swiper
                :slides-per-view="1"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :pagination="{ clickable: true }"

            >
                <swiper-slide>

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

                                    <div class="abs_img d-flex align-items-center">
                                        <div>
                                            <h5 class="fw-bold">100%</h5>
                                            <p>معدل نجاح هذا العام</p>
                                        </div>
                                        <div class="left_img">
                                            <img :src="require('@/assets/imgs/Group (3).png')" alt="">
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </section>

                </swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                ...
            </swiper>
        </div>

        <div class="absolute_img">
            <img :src="require('@/assets/imgs/Vector (3).png')" alt="">
        </div>
    </section>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide, Pagination } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
    import 'swiper/css/pagination';


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
        Pagination  
      };
    },

}  
</script>

<style lang="scss">
    
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
</style>