<template>
  <section id="profile_form">
        <h6 class="common_head  fw-bold"> اللوحة الرئيسية </h6>

        <!-- statistics  -->
        <section class="statistics mt-3">
            <div class="row">

                <div class="col-md-6 mb-2">

                    <div class="single_statistics d-flex align-items-center">
                        <div class="statis1">
                            <img :src="require('@/assets/imgs/people.png')" alt="">
                        </div>
                        <div>
                            <h5 class="fw-bold"> عدد المستخدمين </h5>
                            <h5 class="fw-bold"> {{ num_clients }} </h5>
                        </div>
                    </div>
                    
                </div>

                <div class="col-md-6 mb-2">

                    <div class="single_statistics d-flex align-items-center">
                        <div class="statis2">
                            <img :src="require('@/assets/imgs/courthouse.png')" alt="">
                        </div>
                        <div>
                            <h5 class="fw-bold"> عدد الاستشارات المنتهية </h5>
                            <h5 class="fw-bold"> {{ num_finished_consultations }} </h5>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- reservations  -->
        <section class="reservations mt-3">
            <div class="row">
                <div class="col-md-6 mb-2">
                    <!-- single reservation => current -->
                    <div class="single_reservation">
                        <!-- title  -->
                        <div class="res_title pt-1">
                            <h6 class="fw-bold"> الحجوزات الحالية </h6>
                        </div>

                        <!-- reservation items  -->
                        <section class="reservation_items mt-2" v-if="finished_orders.length>0">

                            <!-- single reserve item  -->
                            <div v-for="order in finished_orders" :key="order.id" class="single_reserve_item mb-2 d-flex justify-content-between align-items-center">
                                <!-- right side  -->
                                <div class="d-flex align-items-center">
                                    <!-- image  -->
                                    <div class="">
                                        <img :src="order.user.image" width="30" height="30" class="mx-2" alt="">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <h6 class="fw-6"> {{ order.user.name }} </h6>
                                        <span class="o-5"> الحجز يوم {{ order.date }}  </span>
                                        <span class="o-5">  {{ order.time }}  </span>
                                    </div>
                                </div>

                                <!-- left side  -->
                                <div>
                                    <span class="waiting"> قيد الانتظار </span>
                                    
                                </div>
                            </div>
                            
                        </section>
                        <section v-else class="mt-3">
                            <p class="notFound text-center" > لا توجد حجوزات الى الان </p>
                        </section>
                    </div>
                </div>
                <div class="col-md-6 mb-2">
                    <!-- single reservation => current -->
                    <div class="single_reservation">
                        <!-- title  -->
                        <div class="res_title pt-1">
                            <h6 class="fw-bold"> الحجوزات القادمة </h6>
                        </div>

                        <!-- reservation items  -->
                        <section class="reservation_items mt-2" v-if="next_orders.length>0">
                            <!-- single reserve item  -->
                            <div v-for="order in next_orders" :key="order.id" class="single_reserve_item mb-2 d-flex justify-content-between align-items-center">
                                <!-- right side  -->
                                <div class="d-flex align-items-center">
                                    <!-- image  -->
                                    <div class="">
                                        <img :src="order.user.image" width="30" height="30" class="mx-2" alt="">
                                    </div>
                                    <div class="d-flex flex-column">
                                        <h6 class="fw-6"> {{ order.user.name }} </h6>
                                        <span class="o-5"> الحجز يوم {{ order.date }}  </span>
                                        <span class="o-5">  {{ order.time }}  </span>
                                    </div>
                                </div>
                            </div>
                            
                        </section>
                        <section v-else class="mt-3">
                            <p class="notFound text-center" > لا توجد حجوزات الى الان </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>

        <!-- courses  -->
        <section class="courses mt-3">
            <h6 class="common_head  fw-bold"> الكورسات </h6>
            <div class="row mt-2" v-if="courses.length>0">
                <!-- single course  -->
                <div class="col-md-6 mb-2" v-for="course in courses" :key="course.id">
                    <div class="single_course boxShadow">
                        <!-- image  -->
                        <div>
                            <img :src="course.image" class="course_image" alt="">
                        </div>
                        <div class="course_details mx-3">
                            <h6 class="fw-bold mt-2">
                                {{course.title }}
                            </h6>
                            <div class="d-flex">
                                <p class="fw-6"> {{ course.user.name }} </p>
                                <div class="course_time">
                                    <span class="fw-6 mainColor"> {{ course.period }}  </span>
                                </div>
                                <p class="fw-6 text-muted"> {{ course.num_students }} طالب </p>
                            </div>

                            <!-- reserve course  -->
                            <div class="mx-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="fw-bold mainColor mb-2">{{ course.offer_price }} جنية</h6>
                                    <p class="fw-6 mainColor">{{ course.price }} جنية</p>
                                </div>

                                <div>
                                    <router-link :to="'/singleCourse/'+course.id" class="pt-2 pb-2 btn main_btn">
                                        مشاهدة
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 notFound text-center" v-else>
                لا توجد كورسات الى الان
            </div>
        </section>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            courses : [],
            num_clients : 0,
            num_finished_consultations : 0,
            finished_orders: [],
            next_orders : []
        }
    },
    methods:{
        async getAdviserHome(){
            await axios.get('consultant-home', {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.courses = res.data.data.courses;
                    this.num_clients = res.data.data.num_clients;
                    this.num_finished_consultations = res.data.data.num_finished_consultations;
                    this.next_orders = res.data.data.next_orders;
                    this.finished_orders = res.data.data.finished_orders

                }
            } )

        }
    },
    mounted(){
        this.getAdviserHome()
    }
}
</script>

<style lang="scss"> 
    .single_reservation{
        border: 1px dotted #ccc;
        border-radius: 7px;
        padding: 20px 10px;
        max-height: 300px;
        overflow-y: auto;
        .res_title{
            height: 40px;
            border-bottom: 1px dotted #ccc;
        }
        .res_image{
            width: 20px;
            height: 20px;
            margin-left: 7px;
        }
    }
    .single_statistics{
        border: 1px dotted #ccc;
        border-radius: 7px;
        padding: 20px 10px;
        .statis1{
            width: 45px;
            height: 45px;
            border-radius: 3px;
            background-color: rgba(191, 77, 102, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 12px;
            img{
                width: 25px;
                height: 25px;
            }
        }
        .statis2{
            width: 45px;
            height: 45px;
            border-radius: 3px;
            background-color:rgba(40, 90, 124, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 12px;
            img{
                width: 25px;
                height: 25px;
            }
        }
    }
</style>