<template>
    <section class="adviseProfile mt-4">
        <div class="container">
            <div class="top_part">
                <div class="row">
                    <div class="col-md-9 mb-2">
                        <!-- adviser main info  -->
                        <div class="mainInfo d-flex">
                            <div class="infoImage">
                                <img :src="consultant.image" alt="">
                            </div>
                            <div class="details">
                                <h5 class="fw-bold"> {{ consultant.name }} </h5>
                                <p class="text-muted fs-15"> {{ category.name }} </p>
                                <div class="rate">
                                    <i class="fa-solid fa-star text-muted" :class="{gold:consultant.rate==1||consultant.rate==2||consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                    <i class="fa-solid fa-star text-muted" :class="{gold:consultant.rate==2||consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                    <i class="fa-solid fa-star text-muted" :class="{gold:consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                    <i class="fa-solid fa-star text-muted" :class="{gold:consultant.rate==4||consultant.rate==5}"></i>
                                    <i class="fa-solid fa-star text-muted" :class="{gold:consultant.rate==5}"></i>
                                    <span> {{ consultant.rate }} </span>
                                </div>
                            </div>

                            <div class="abs_teach">
                                <img :src="require('@/assets/imgs/medal-star.png')" alt="">
                            </div>
                        </div>

                        <!-- experts  -->
                        <div class="experts mt-3">
                            <h6 class="mb-3 fw-bold befored_title mainColor">
                                {{ $t('common.experts') }}
                            </h6>
                            <p class="o-5" v-if="consultant.bio!==null">
                                {{ consultant.bio }}
                            </p>
                            <p v-else> {{ $t('common.noExpert') }} </p>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="statisticsList">
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/Vector.png')" alt="">
                                    <span class="whiteColor"> {{ $t('common.views') }} </span>
                                </div>
                                <span class="whiteColor fw-bold"> {{ consultant.num_views }} </span>
                            </div>
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/briefcase.png')" alt="">
                                    <span class="whiteColor"> {{ $t('common.consults') }} </span>
                                </div>
                                <span class="whiteColor fw-bold">{{ consultant.num_consultations }}</span>
                            </div>
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/personalcard.png')" alt="">
                                    <span class="whiteColor"> {{ $t('common.consUsers') }} </span>
                                </div>
                                <span class="whiteColor fw-bold">{{ consultant.num_consultations_persons }}</span>
                            </div>
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/teacher_white.png')" alt="">
                                    <span class="whiteColor"> {{ $t('common.num_courses') }} </span>
                                </div>
                                <span class="whiteColor fw-bold">{{ consultant.num_courses }}</span>
                            </div>

                            
                        </div>


                        <div>
                                <button type="button" data-bs-toggle="modal" :data-bs-target="'#reserveAdviser'+$route.params.id" class="btn main_btn w-100 pt-2 pb-2 mt-3">
                                    {{ $t('common.reserve') }}
                                </button>

                                    <div class="modal fade" :id="'reserveAdviser'+$route.params.id" tabindex="-1" aria-labelledby="reserveAdviserLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" >
                                            <div class="modal-content">
                                                <div class="modal-body">

                                                    <div class="adviserHead">
                                                        <h5 class="fw-bold">حجز استشارة</h5>
                                                    </div>

                                                    <div class="mainInfo d-flex align-items-center px-3 mt-2 mb-2">
                                                        <div class="infoImage" v-if="category!==null">
                                                            <img :src="category.image" alt="">
                                                        </div>
                                                        <div class="details">
                                                            <h6 class="fw-bold" v-if="consultant!==null"> {{ consultant.name }} </h6>
                                                            <p class="text-muted fs-15" v-if="category!==null"> {{ category.name }} </p>
                                                            <div class="rate" v-if="consultant!==null">
                                                                <!-- <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==1||consultant.rate==2||consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==2||consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==4}||consultant.rate==5"></i>
                                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==5}"></i>
                                                                <span> {{ category.rate }} </span> -->
                                                            </div>

                                                            <div class="d-flex mt-3">
                                                                <img :src="require('@/assets/imgs/Vector232.png')" class="singImage" alt="">
                                                                <p class="fw-bold">

                                                                    <span v-for="price in prices" :key="price.id"><span class="mainColor"> {{ price.price }} جنية</span> / {{ price.minutes }} دقيقة </span> &nbsp;&nbsp;

                                                                </p>
                                                            </div>
                                                        </div>
                                                        

                                                        
                                                    </div>


                                                    <section class=" px-3 mt-2 mb-2">
                                                        <p class="fw-6">الرجاء تحديد المعاد المناسب</p>
                                                        <form @submit.prevent="storeReservation" ref="storeReservation">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    
                                                                    <!-- calender  -->
                                                                    <VueDatePicker locale="ar" v-model="date"  inline auto-apply  />
                                                                </div>

                                                                <div class="col-md-6">
                                                                        <input type="text" class="form-control mb-2" name="title" placeholder="عنوان الاستشارة">
                                                                        <div class="form-group position-relative mb-2">

                                                                        <!-- <input type="file" class="form-control mb-2" placeholder="" name="file" id=""> -->
                                                                        <div class="form-group position-relative">
                                                                            <input type="text" class="form-control"  name="" ref="actualInput" placeholder="ارفاق ملف">
                                                                            <i class="fa-solid fa-camera-rotate came_icon"></i>

                                                                            <input type="file" class="hiddenFile" required name="file"  @change="uploadFile" id="">
                                                                        </div>
                                                                            
                                                                        </div>
                                                                        <div class="form-group position-relative">
                                                                            <textarea name="notes" id="" cols="30" rows="10" class="form-control" placeholder="رسالة..."></textarea>
                                                                        </div>
                                                                </div>
                                                            </div>

                                                            <p class="fw-6 mb-2 mt-3">اختر مدة الجلسة</p>

                                                            <div class="d-flex">
                                                                
                                                                <div class="single_filed position-relative" v-for="price in prices" :key="price.id">
                                                                    <input type="radio" name="user_price_id" :value="price.id" id="" class="checkIntrest">
                                                                    <label for="" class="singleCheck">
                                                                        <i class="fa-regular fa-circle circleCheck"></i>
                                                                        <i class="fa-solid fa-circle-check trueCheck"></i>


                                                                        <span> {{ price.minutes }} دقيقة <span class="fw-bold">( جنية {{ price.price }} )</span></span>
                                                                    </label>
                                                                </div>

                                                            </div>


                                                            <div class="d-flex mt-3">
                                                                <div class="row w-100">
                                                                    <div class="col-md-3" v-for="time in times" :key="time.id">
                                                                        <div class="singleRadio mx-2" >
                                                                            <input type="radio" class="radioInput" :value="'from'+time.from_time+'to'+time.to_time" name="time">
                                                                            <label class="labelRadio">
                                                                                <span> {{ time.day }} </span>
                                                                                <span> من {{ time.from_time }} الى {{ time.to_time }} </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>

                                                            <div class="d-flex justify-content-between mt-4 mb-3 px-3 sub_btns">
                                                                <button class="btn bordered_btn w-50 mx-3" type="button" data-bs-dismiss="modal" aria-label="Close"> الغاء </button>
                                                                <button class="btn main_btn w-50" :disabled="disabled"> تأكيد </button>
                                                            </div>
                                                        </form>
                                                    </section>


                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>

                    </div>
                </div>
            </div>

            <!-- أوقات العمل  -->
            <div class="top_part mt-4 mb-3">
                <h6 class="mb-3 fw-bold befored_title mainColor">
                     {{ $t('common.workTime') }}
                </h6>
                <section v-if="times.length>0">
                    <p class="fw-6" v-for="time in times" :key="time.id"> {{ time.day }} &nbsp;  &nbsp;  {{ $t('common.from') }}&nbsp; &nbsp;  {{ time.from_time }} &nbsp; &nbsp;  {{ $t('common.to') }} &nbsp; &nbsp;  {{ time.to_time }} </p>
                </section>

                <section v-else class="notFound mt-2 mb-2 text-center">
                    {{ $t('common.noTimes') }}
                </section>
                
            </div>
            <!-- الدورات التدريبية  -->
            <div class="top_part mt-4 mb-3">
                <h6 class="mb-3 fw-bold befored_title mainColor">
                     {{ $t('common.num_courses') }}
                </h6>

                <div class="row" v-if="courses.length>0">
                    <div class="col-md-4 mb-2" v-for="course in courses" :key="course.id">
                        <!-- single course  -->
                        <div class="single_course boxShadow">
                            <!-- course image  -->
                            <div class="course_image">
                                <img :src="course.image" alt="">
                            </div>
                            <!-- course details  -->
                            <div class="course_details mx-3">
                                <h6 class="fw-bold mt-2"> {{ course.title }} </h6>

                                <div class="d-flex">
                                    <p class="fw-6"> {{ course.user.name }} </p>
                                    <div class="course_time">
                                        <span class="fw-6 mainColor"> {{ course.period }} </span>
                                    </div>
                                    <p class="fw-6 text-muted"> {{ course.num_students }} {{ $t('common.student') }} </p>
                                </div>
                            </div>

                            <!-- reserve course  -->
                            <div class="mx-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="fw-6bold mainColor mb-2"> {{ course.offer_price }} </h6>
                                    <p class="fw-6 mainColor priceOffer"> {{ course.price }} </p>
                                </div>

                                <div>
                                    <router-link :to="'/singleCourse/'+course.id" class="pt-2 pb-2 btn main_btn">
                                        {{ $t('common.reserveNow') }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="notFound text-center mt-2 mb-2" v-else>
                    {{ $t('common.noCourses') }}
                </div>
            </div>
            <!-- التقييمات  -->
            <div class="top_part mt-4 mb-3">
                <h6 class="mb-3 fw-bold befored_title mainColor">
                     {{ $t('common.rate2') }}
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
                    v-if="reviews.length>0"
                >
                    <!-- slide 1  -->
                    <swiper-slide v-for="slide in reviews" :key="slide.id">
                        <!-- single slide  -->
                        <div class="single_slide boxShadow">
                            <div class="d-flex align-items-center">
                                <img :src="slide.user.image" alt="" class="test_slide_image">

                                <div>
                                    <h6 class="fw-bold"> {{ slide.user.name }} </h6>

                                    <div class="d-flex">
                                        <i class="fa-solid fa-star text-muted" :class="{gold:slide.rate==1||slide.rate==2||slide.rate==3||slide.rate==4||slide.rate==5}"></i>
                                        <i class="fa-solid fa-star text-muted" :class="{gold:slide.rate==2||slide.rate==3||slide.rate==4||slide.rate==5}"></i>
                                        <i class="fa-solid fa-star text-muted" :class="{gold:slide.rate==3||slide.rate==4||slide.rate==5}"></i>
                                        <i class="fa-solid fa-star text-muted" :class="{gold:slide.rate==4||slide.rate==5}"></i>
                                        <i class="fa-solid fa-star text-muted" :class="{gold:slide.rate==5}"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-2">
                                {{ slide.comment }}
                            </p>
                        </div>
                    </swiper-slide>

                    
                </swiper>
                <div class="notFound mt-2 mb-2 text-center" v-else>
                    {{ $t('common.noRates') }}
                </div>
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
import axios from 'axios';

export default {
 data(){
        return{
            rating : 5,
            consultant : {},
            category : {},
            courses : [],
            times : [],
            user : {},
            advisor_name : '',
            reviews : [],
            order_id : '',
            url : '',
            prices : []

        }
    },
    computed: {
    selectedDate() {
        if (this.date) {
            const dateObj = new Date(this.date);
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
        return null;
        },
        selectedTime() {
        if (this.date) {
            const dateObj = new Date(this.date);
            return dateObj.toLocaleTimeString('ar');
        }
        return null;
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
    methods:{
         uploadFile(e){

            this.$refs.actualInput.value = e.target.files[0].name
        },
        async getSingleAdviser(){
            await axios.get(`consultant-profile/${this.$route.params.id}`)
            .then( (res)=>{
                this.consultant = res.data.data;
                this.advisor_name = res.data.data.name;
                if( res.data.data.category !== null ){
                    this.category = res.data.data.category;
                }
                this.courses = res.data.data.courses;
                this.reviews = res.data.data.reviews;
                this.times = res.data.data.times;
                this.prices = res.data.data.prices;
                this.$emit('loadAdviser', this.advisor_name)
            } )
        },
        // store reservation 
        async storeReservation(){
            this.disabled = true ;
            const fd = new FormData(this.$refs.storeReservation);
            fd.append('consultant_id', this.$route.params.id);
            fd.append('date', this.selectedDate);
            // fd.append('time', this.selectedTime);
            await axios.post('store-reservation', fd , {
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

                    this.order_id = res.data.data.id;
                    console.log(this.order_id)
                    this.subscribePlan(this.order_id)

                    
                    setTimeout(() => {
                        document.querySelector(`#reserveAdviser${this.$route.params.id}`).style.display = 'none';
                        document.querySelector(`.modal-backdrop`).style.display = 'none';
                        // location.reload()
                    }, 2000);
                }else{
                    this.$swal({
                        icon: 'error',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,
                    });
                }
                this.disabled = false ;
            } )
        },

        // subscribe plan 
        async subscribePlan(order_id){
            console.log(order_id)
            await axios.get(`pay-order/${order_id}`, {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
               this.url = res.data.data.url ;
                window.open(this.url, '_blank');
                console.log(this.url)

            } )
        },
    },
    mounted(){
        this.getSingleAdviser()
    },
}
</script>

<style lang="scss" scoped>
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
        @media( max-width:768px ){
            .bordered_btn {
                width: 124px !important;
                font-size: 13px;
            }
        }
</style>

<style lang="scss">
    .priceOffer{
        position: relative;
        &::before{
            content: '';
            position: absolute;
            width:100%;
            height:1px;
            background: #333;
            top: 50%;
            right:0
        }
    }
    svg.gold{
        color: #FFAA3E !important;
    }
</style>


<style scoped lang="scss">
.rate{
    svg.rated{
        color: #ffff00 !important;
    }
}
</style>

<style lang="scss" scoped>
    .singleRadio{
        border: 1px solid #D0D5DD;
        border-radius: 4px;
        position: relative;
        padding: 8px 18px;
    }
    .radioInput{
        position: absolute;
        width: 100%;
        height:100%;
        top: 0;
        right: 0;
        opacity: 0;
        z-index: 999;
    }
    .labelRadio{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        
        &::before{
            content: "";
            position: absolute;
            width: 126%;
            height: 150%;
            top: -13px;
            margin: 3px;
            border-radius: 3px;            
        }
    }
    .radioInput:checked + label{
        color: #C40F3D;
    }
    .radioInput:checked + label::before{
        border:1px solid #C40F3D;
    }
    .mainInfo .infoImage {
        width: 90px !important;
        height: 90px !important;
        img{
            border-radius: 50% !important;
        }
    }
    
    .singImage{
        width: 16px;
        height: 16px;
        margin: 0 5px;
    }
    .adviserHead{
        border-bottom: 1px solid #ccc;
        padding: 20px;
    }
    textarea{
        height: 210px;
    }

    
    .singleCheck .trueCheck{
        display: none;
    }
    .checkIntrest:checked + .singleCheck{
        background: transparent;
    }
    .checkIntrest:checked + .singleCheck span{
        color:#C40F3D !important
    }
    .checkIntrest:checked + .singleCheck .circleCheck{
        display: none;
    }
    .checkIntrest:checked + .singleCheck .trueCheck{
        display: block;
        color: #C40F3D !important
    }
    .single_filed{
        border: none !important;
        border-radius: 3px;
        width: fit-content;
    }
    .single_filed {
        margin: 0 7px 7px 7px;
    }   
    .sub_btns{
        padding-top: 20px;
        border-top: 1px solid #ccc;
    }
</style>

<style>
    .dp__outer_menu_wrap{
        width:100% !important;
    }
    .dp__cell_inner {
        background: #ccc !important;
        border-radius: 50% !important;
    }
    .dp__cell_inner.dp__pointer.dp__active_date{
        background: #c40f3d !important;
        border: 1px solid #c40f3d !important;
         border-radius: 50%;
    }
</style>