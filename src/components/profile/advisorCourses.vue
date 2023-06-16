<template>
    <section class="courses">
        <div class="d-flex justify-content-between">
            <h5 class="fw-bold mainColor course_title"> الدورات التدريبية </h5>
            <router-link class="main_btn addCourse" to="/addCourse"> أضف دورة </router-link>
        </div>

        <section class="mt-3">
            <div class="row mt-2" v-if="courses.length>0">
                <!-- single course  -->
                <div class="col-md-6 mb-2" v-for="course in courses" :key="course.id">
                    <div class="single_course boxShadow">
                        <!-- image  -->
                        <div>
                            <img :src="course.image" class="course_image w-100 h-100" alt="">
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
    .addCourse{
        text-align: center;
        border-radius: 4px;
        text-decoration: none;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .course_title{
        position: relative;
        &::before{            
            content: "";
            position: absolute;
            background-color: rgb(51, 49, 50);
            width: 63px;
            height: 2px;
            bottom: -10px;
            right: 0;
        }
    }
</style>