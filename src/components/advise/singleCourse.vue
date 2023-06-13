<template>
    <section class="adviseProfile mt-4">
        <div class="container">
            <div class="top_part">
                <div class="row">
                    <div class="col-md-9 mb-2">
                        <!-- adviser main info  -->
                        <div class="mainInfo d-flex">
                            <div class="infoImage">
                                <img :src="user.image" alt="">
                            </div>
                            <div class="details">
                                <h5 class="fw-bold"> {{ user.name }} </h5>
                                <p class="text-muted fs-15"> {{ course.title }} </p>
                                <div class="rate">
                                    <i class="fa-solid fa-star text-muted" :class="{gold:user.rate==1||user.rate==2||user.rate==3||user.rate==4||user.rate==5}"></i>
                                    <i class="fa-solid fa-star text-muted" :class="{gold:user.rate==2||user.rate==3||user.rate==4||user.rate==5}"></i>
                                    <i class="fa-solid fa-star text-muted" :class="{gold:user.rate==3||user.rate==4||user.rate==5}"></i>
                                    <i class="fa-solid fa-star text-muted" :class="{gold:user.rate==4}||user.rate==5"></i>
                                    <i class="fa-solid fa-star text-muted" :class="{gold:user.rate==5}"></i>
                                    <span> {{ user.rate }}</span>
                                </div>
                            </div>

                            <div class="abs_teach">
                                <img :src="require('@/assets/imgs/medal-star.png')" alt="">
                            </div>
                        </div>

                        <!-- experts  -->
                        <div class="experts mt-3">
                            <h6 class="mb-3 fw-bold befored_title mainColor">
                                ستتعلم في هذه الدورة التدريبية
                            </h6>
                            <p class="o-5">
                                {{ course.description }}
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="statisticsList">
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/timer.png')" alt="">
                                    <span class="whiteColor">المدة</span>
                                </div>
                                <span class="whiteColor fw-bold"> {{ course.period }} </span>
                            </div>
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/language-square.png')" alt="">
                                    <span class="whiteColor">لغة الدورة </span>
                                </div>
                                <span class="whiteColor fw-bold"> {{ course.lang }} </span>
                            </div>
                            <!-- single statistics  -->
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <img :src="require('@/assets/imgs/moneys.png')" alt="">
                                    <span class="whiteColor">تكلفة الدورة</span>
                                </div>
                                <span class="whiteColor fw-bold"> {{ course.price }} جنية  </span>
                            </div>
                            

                            
                        </div>


                        <div>
                                <router-link to="/" v-if="client" class="btn main_btn w-100 pt-2 pb-2 mt-3">
                                    اشترك الان
                                </router-link>
                            </div>

                    </div>
                </div>
            </div>

            <!-- محتوى الدورة التدريبية  -->
            <div class="top_part mt-4 mb-3">
                <div class="d-flex justify-content-between mb-3">
                    <h6 class="mb-3 fw-bold befored_title mainColor">
                        محتوى الدورة التدريبية
                    </h6>
                    <button v-if="advisor" class="main_btn btn" data-bs-toggle="modal" data-bs-target="#addLecture" type="button" > اضافة محاضرة </button>
                </div>

                <div v-if="lessons.length>0">
                    <!-- single course  -->
                    <div class="d-flex justify-content-between mb-2" v-for="lesson in lessons" :key="lesson.id">
                        <p class="fw-6">
                            المحاضرة {{ lesson.id }} : {{ lesson.title }}
                        </p>
                        <p class="fw-6">
                            {{ lesson.date }}  - {{ lesson.time }}
                        </p>
                        <p class="fw-6">
                            {{ lesson.period }}
                        </p>

                        <a target="_blank" :href="lesson.url" class="text-muted fw-6 joinCourseLink">
                            <span>انضم للمحاضرة</span>
                            <i class="fa-regular fa-eye"></i>
                        </a>
                    </div>
                </div>
                <div class="notFound mt-2 mb-2 text-center" v-else>
                    لا توجد محاضرات الى الان
                </div>

            </div>
            
        </div>
    </section>

    <!-- add lecture modal  -->
    <div
        class="modal fade"
        id="addLecture"
        tabindex="-1"
        aria-labelledby="changePlanLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-head border-bottom pt-3 pb-3 px-4">
                        <h5 class="fw-bold"> اضافة محاضرة </h5>
                    </div> 
                    <form class="mx-4" @submit.prevent="storeCourse" ref="storeCourseForm">
                        <div class="row mt-4">
                            <div class="col-md-12 mb-3">
                                <input type="text" class="form-control" required placeholder="اسم المحاضرة" name="title[ar]" id="">
                            </div>

                            



                            <div class="col-md-6 mb-3">
                                <div class="form-group position-relative">

                                    <input type="date" class="form-control" required  name="date" >
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group position-relative">

                                    <input type="time" class="form-control" required  name="time" >
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group position-relative">

                                    <input type="text" class="form-control" required  name="period" placeholder="مدة المحاضرة" >
                                </div>
                            </div>

                            <!-- <div class="col-md-6 mb-3">
                                <div class="form-group position-relative">
                                <div  class="d-flex justify-content-between align-items-center">
                                        <input type="time" class="form-control" name="from_time">
                                        <span class="fw-6 mx-2">الى</span>
                                        <input type="time" class="form-control" name="to_time">
                                    </div>
                                </div>
                            </div>  -->

                            <div class="col-md-12">
                                <textarea name="url" class="form-control" required style="height:80px"  placeholder="اضافة رابط زووم"  id="" cols="30" rows="10"></textarea>
                            </div> 

                            <div class="d-flex justify-content-center mt-4 mb-3">
                                <button class="main_btn btn w-50 pt-2 pb-2" :disabled="disabled"> حفظ المحاضرة </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
 data(){
        return{
            course : {},
            user : {},
            lessons : [],
            title : '',
            client : null,
            advisor : null,
            disabled : false
        }
    },
    components:{
    },
    methods:{
        async getSingleCourse(){
            await axios.get(`course-details/${this.$route.params.id}`)
            .then( (res)=>{
                this.course = res.data.data;
                this.title = res.data.data.title;
                this.user = res.data.data.user;
                this.lessons = res.data.data.lessons;
                this.$emit('loadCourse', this.title)
            } )
        },
        uploadFile(e){              
            this.$refs.actualInput.value = e.target.files[0].name
        },

        // store course 
        async storeCourse(){
            this.disabled = true ;
            const fd  = new FormData(this.$refs.storeCourseForm)
            await axios.post(`store-course-lesson/${this.$route.params.id}`, fd ,{
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
                    setTimeout(() => {
                        location.reload()
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
        }
    },
    mounted(){
        this.getSingleCourse()
        if( localStorage.getItem('userType') == 'client' ){
            this.client = true ;
            this.advisor = false ;
        }else if( localStorage.getItem('userType') == 'adviser' ){
            this.client = false ;
            this.advisor = true ;
        }
    }

}
</script>

<style lang="scss" scoped>
    .adviseProfile{
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

    .joinCourseLink{
        text-decoration: none !important;
        svg{
            margin: 0 10px;
        }
    }
</style>

<style >
    svg.gold{
        color: #FFAA3E !important;
    }
</style>