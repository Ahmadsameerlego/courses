<template>
    <section id="test">
        <div class="circled_section">
            <h6 class="fw-bold mb-2"> 100 عميل ومازال العدد في ازديار </h6>
            <h5 class="mainColor fw-bold">  النتائج التي تتحدث عن نفسها </h5>
        </div>

            <!-- start slider  -->
            <swiper
                :modules="modules"
                :slides-per-view="4"
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

<style lang="scss"> 
    #test{
        padding-top: 100px;
        padding-bottom: 60px;
        background-color: #FAF8F6;
        .circled_section{
            position: relative;
            margin: 0 135px;
            &::before{
                position: absolute;
                content: "";
                background: #bf4d66;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                z-index: 0;
                opacity: .6;
                top: -25px;
                right: -31px;
            }
        }
        
    }

    .swiper-slide-active{
            .single_slide{
                padding-top: 40px !important;
                padding-bottom: 40px !important;
                transform: translateY(-67px);
                .test_slide_image{
                    width:50px !important;
                    height:50px !important;
                }
            }
    }
    .swiper {
        padding-top: 80px;
    }
</style>


<style lang="scss">
.single_slide{
            background-color: #fff;
            padding: 10px;
            border: 1px solid #cccccc91;
            margin: 0 25px;
            .test_slide_image{
                width:40px;
                height:40px;
                margin:0 10px
            }
            svg{
                color:#DBDEE6;
                margin:0 4px
            }
        }
</style>