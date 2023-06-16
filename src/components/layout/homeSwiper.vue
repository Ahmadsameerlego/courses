<template>
    <section id="land_slider" class="position-relative">
        
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :pagination="{ clickable: true }"
                effect="fade"
                :autoplay="{
                delay: 10000,
                disableOnInteraction: false,
            }"
            :loop="true"


            >
                <!-- slide 1  -->
                <swiper-slide v-for="slide in sliders" :key="slide.id">
                    <div class="container">
                        <section class="">
                            
                            <div class="row d-flex align-items-center">
                                <div class="col-md-6">
                                    <div class="slide_right">
                                        <p class="slide_p_1 o-5" v-if="slide.id==1"> {{ $t('home.slider1') }} </p>
                                        <h4 class="">
                                            {{ slide.title }}
                                        </h4>
                                        <p class="slide_p_2">
                                                {{ slide.description }}                                        
                                        </p>
                                        <router-link v-if="slide.id==1" to="/AboutUs" class="btn main_btn w-100 pt-2 pb-2">
                                            {{ $t('home.workTogether') }}
                                        </router-link>

                                        <p class="mainColor fw-bold" v-if="isLoggedIn==false&&slide.id==2"> {{ $t('home.joinNow') }} </p>
                                        <div class="d-flex align-items-center" v-if="isLoggedIn==false&&slide.id==2">
                                            <button class="bordered_btn w-50 pt-3 pb-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
                                            {{ $t('home.joinClient') }}
                                            </button>
                                            <span class="mainColor fw-bold px-3">أو</span>
                                            <button class="btn main_btn w-50 pt-3 pb-3"  data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
                                                {{ $t('home.joinAdviser') }}
                                            </button>
                                        </div>

                                        <div class="d-flex align-items-center mt-3" v-if="slide.id==3">
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
                                        <img :src="slide.image" alt="">

                                        <div class="abs_img d-flex align-items-center px-2 pt-2 pb-2">
                                            <div>
                                                <h5 class="fw-bold text-start">100%</h5>
                                                <p class="text-start"> {{ $t('home.yearly') }}  </p>
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
import axios from 'axios';

export default {
    data(){
        return{
            slider0 : {},
            slider1 : {},
            isLoggedIn : null,
            sliders : []
        }
    },
    components:{
        Swiper,
        SwiperSlide,
    },
    setup() {
      
      return {
        modules: [Pagination, A11y, Autoplay ],

      };
    },
    methods:{
        async getIntros(){
            await axios.get('intros')
            .then( (res)=>{
                this.sliders = res.data.data;
                
            } )
        }
    },
    mounted(){
        this.getIntros();
        if( localStorage.getItem('token') ){
            this.isLoggedIn = true ;
        }else{
            this.isLoggedIn = false
        }
    }

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