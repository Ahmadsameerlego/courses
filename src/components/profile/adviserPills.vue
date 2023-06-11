<template>
    <section id="pills">
        <h6 class="common_head  fw-bold"> نظرة عامة على الخطة </h6>
        <div class="row mt-3">
            <div class="col-md-6 mb-2">
                <!-- single plan  -->
                <div class="single_plan">
                    <h6 class="fw-bold" v-if="plan!==null"> {{ plan.name }} </h6>
                    <p class="w-75" v-if="plan!==null">
                        {{ plan.description }}
                    </p>

                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="mb-0">10 من ٣٠ مستخدمً</p>
                            <!-- progress bar  -->
                            <div class="progress_bar">
                                <div class="active_bar"></div>
                            </div>
                        </div>
                        <div>
                            <button class="main_btn btn" data-bs-toggle="modal" data-bs-target="#changePlan" type="button" v-if="plan!==null"> تغيير الخطة </button>
                            <button class="main_btn btn" data-bs-toggle="modal" data-bs-target="#changePlan" type="button" v-else> اختيار الخطة </button>
                            <!-- change plan modal  -->
                            <div
                                class="modal fade"
                                id="changePlan"
                                tabindex="-1"
                                aria-labelledby="changePlanLabel"
                                aria-hidden="true"
                                >
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="modal-head border-bottom pt-3 pb-3 px-4">
                                                <h5 class="fw-bold"> تغيير الخطة </h5>
                                            </div>
                                            <section class="pt-3 pb-3 px-3">
                                                <form @submit.prevent="subscribePlan">
                                                    <!-- <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                            name=""
                                                        >
                                                        <option selected hidden disabled value="">
                                                            خطة الفريق
                                                        </option>
                                                        <option value="0"> عميل </option>
                                                        <option value="1"> استشاري </option>
                                                        </select>
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div> -->


                                                    <div class="d-flex justify-content-between">
                                                        <div class="single_filed position-relative" v-for="single_plan in plans" :key="single_plan.id">
                                                            <input type="radio" name="plan" :value="single_plan.id" v-model="planId" id="" class="checkIntrest">
                                                            <label for="" class="singleCheck">
                                                                <i class="fa-regular fa-circle circleCheck"></i>
                                                                <i class="fa-solid fa-circle-check trueCheck"></i>
                                                                <span> {{ single_plan.name }} ({{ single_plan.description }})</span>
                                                            </label>
                                                        </div>
                                                        <!-- <div class="single_filed position-relative">
                                                            <input type="radio" name="yearly" id="" class="checkIntrest">
                                                            <label for="" class="singleCheck">
                                                                <i class="fa-regular fa-circle circleCheck"></i>
                                                                <i class="fa-solid fa-circle-check trueCheck"></i>
                                                                <span>ربعي (تدفع 4 مرات في السنة)</span>
                                                            </label>
                                                        </div> -->
                                                    </div>

                                                    <div class="d-flex justify-content-between">
                                                        <button  class="custom_bordered" data-bs-dismiss="modal" aria-label="Close" type="button">
                                                            الغاء 
                                                        </button>

                                                        <button class="btn main_btn w-50 mx-2" :disabled="disabled" > تحديث </button>

                                                    </div>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- abs price  -->
                        <div class="abs_price" v-if="plan!==null">
                            <div v-if="plan.id==1">
                                {{ plan.name }} / <span class="price_num"> {{ plan.price }} </span>
                            </div>
                            <div v-else-if="plan.id==2">
                                {{ plan.name }} / <span class="price_num"> {{ plan.price }} </span>
                            </div>
                            <div>
                                <h5 class="fw-bold"> جنية </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-2">
                <!-- single plan  -->
                <div class="single_plan">
                    <h6 class="fw-bold">ميعاد التجديد القادم</h6>
                    <div class="d-flex">
                        <img :src="require('@/assets/imgs/image 76.png')" alt="">
                        <span class="mx-2"> ... 127  </span>
                    </div>
                    

                    <div class="d-flex justify-content-between">
                        
                        <div>
                            <button class="bordered_btn btn" data-bs-toggle="modal" data-bs-target="#payment" type="button"> ادراة المدفوعات </button>
                            <!-- payment modal  -->
                            <div
                                class="modal fade"
                                id="payment"
                                tabindex="-1"
                                aria-labelledby="changePlanLabel"
                                aria-hidden="true"
                                >
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="modal-head border-bottom pt-3 pb-3 px-4">
                                                <h5 class="fw-bold"> طريقة الدفع </h5>
                                            </div>
                                            <section class="pt-3 pb-3 px-3">
                                                <form>
                                                    

                                                    <div class="d-flex justify-content-between">
                                                        <button  class="custom_bordered" data-bs-dismiss="modal" aria-label="Close" type="button">
                                                            الغاء 
                                                        </button>

                                                        <button class="btn main_btn w-50 mx-2" > تحديث </button>

                                                    </div>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- abs price  -->
                        <div class="abs_price">
                            <div>
                               {{ to_date }}
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-2">
                <!-- single plan  -->
                <div class="single_plan">

                    <div class="d-flex justify-content-between">
                        <h6 class="fw-bold"> عدد الكورسات </h6>
                        <h5 class="fw-bold mainColor"> {{ num_courses }} </h5>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-between w-50">
                            <p>الكورسات المباعة</p>
                            <h6 class="fw-bold"> {{ num_sold_courses }} </h6>
                        </div>
                        <div class="d-flex justify-content-between w-50 mx-2">
                            <p>الكورسات القادمة</p>
                            <h6 class="fw-bold"> {{ num_next_courses }} </h6>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <h6 class="fw-bold"> عدد الاستشارات </h6>
                        <h5 class="fw-bold mainColor"> {{ num_consultations }} </h5>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-between w-50">
                            <p>الاستشارات الحالية</p>
                            <h6 class="fw-bold"> {{ num_sold_consultations }}  </h6>
                        </div>
                        <div class="d-flex justify-content-between w-50 mx-2">
                            <p>الاستشارات القادمة</p>
                            <h6 class="fw-bold">  {{ num_next_consultations }} </h6>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="col-md-6 mb-2">
                <!-- single plan  -->
                <div class="single_plan">

                    <div class="d-flex justify-content-evenly mb-2">
                        <div>
                            <h6 class="fw-bold"> الكورسات  </h6>
                            <div class="d-flex">
                                <h6 class="fw-bold mainColor"> {{ price_courses }} / </h6>
                                <span>جنية</span>
                            </div>
                        </div>
                        <div>
                            <h6 class="fw-bold"> الاستشارات  </h6>
                            <div class="d-flex">
                                <h6 class="fw-bold mainColor"> {{ price_consultations }} / </h6>
                                <span>جنية</span>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-between w-50">
                            <p>الكورسات المباعة</p>
                            <h6 class="fw-bold"> {{ price_sold_courses }} </h6>
                        </div>
                        <div class="d-flex justify-content-between w-50 mx-2">
                            <p>الكورسات القادمة</p>
                            <h6 class="fw-bold"> {{ price_next_courses }} </h6>
                        </div>
                    </div>

                    

                    <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-between w-50">
                            <p>الاستشارات الحالية</p>
                            <h6 class="fw-bold">  {{price_sold_consultations}} </h6>
                        </div>
                        <div class="d-flex justify-content-between w-50 mx-2">
                            <p>الاستشارات القادمة</p>
                            <h6 class="fw-bold"> {{ price_next_consultations }} </h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


        <h6 class="common_head  fw-bold mt-2 mb-3" v-if="plan!==null"> الفواتير ({{ invoices.length }})</h6>
        <table class="pills_table" v-if="plan!==null">
            <tbody v-if="invoices.length>0">
                <tr v-for="invoice in invoices" :key="invoice.id">
                    <td>
                        <img :src="require('@/assets/imgs/pdf.png')" alt="">
                        <span>15 ديسمبر 2022</span>
                    </td>
                    <td>
                        100 جنية
                    </td>
                    <td>
                        <button class="btn showPill"> عرض الفاتورة </button>
                    </td>
                </tr>

            </tbody>
            <div class="notFound text-center mt-2 mb-2" v-else> 
                لا توجد فواتير
            </div>
        </table>


        <h6 class="common_head  fw-bold mt-3 mb-3" v-if="plan!==null" > الغاء الاشتراك </h6>
        <div class="d-flex justify-content-between" v-if="plan!==null">
            <p class="fw-6 w-50">
                بعد الإلغاء ، ستتمكن من استخدام المنصة حتى نهاية فترة الفاتورة الحالية. <span class="mainColor">( {{ to_date }} )</span>
            </p>
            <button class="bordered_btn bordered_btn2" data-bs-toggle="modal" data-bs-target="#unsubscribe" type="button"> الغاء الاشتراك </button>
            <!-- unsubscribe modal  -->
            <div
                class="modal fade"
                id="unsubscribe"
                tabindex="-1"
                aria-labelledby="changePlanLabel"
                aria-hidden="true"
                >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="modal-head  pt-3 pb-3 px-4">
                                <h5 class="fw-bold text-center"> هل تريد الغاء الاشتراك </h5>
                            </div>
                            <section class=" pb-3 px-3">
                                <form @submit.prevent="cancelPlan">

                                    <p class="fw-6 mx-auto w-75 text-center">
                                        بعد الإلغاء ، ستتمكن من استخدام المنصة حتى
نهاية فترة الفاتورة الحالية. ( {{ to_date }} )
                                    </p>
                                    

                                    <div class="d-flex justify-content-between">
                                        <button  class="custom_bordered" data-bs-dismiss="modal" aria-label="Close" type="button">
                                            الغاء 
                                        </button>

                                        <button class="btn main_btn w-50 mx-2" :disabled="disabled2" > الغاء الاشتراك </button>

                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            plans : [],
            planId : null,
            disabled  : false,
            plan : {},
            to_date : '',
            num_courses : '',
            num_sold_courses : '',
            num_next_courses : '',
            price_courses : '',
            price_sold_courses : '',
            price_next_courses : '',
            num_consultations  : '',
            num_sold_consultations : '',
            num_next_consultations : '',
            price_consultations : '',
            price_sold_consultations : '',
            price_next_consultations : '',
            invoices : [],
            disabled2 : false
        }
    },
    methods:{
        // get plans 
        async getPlans(){
            await axios.get('plans')
            .then( (res)=>{
                this.plans = res.data.data
            } )
        },
        // subscribe plan 
        async subscribePlan(){
            this.disabled = true ;
            await axios.get(`subscribe-plan/${this.planId}`, {
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
                        timer: 4000,
                        showConfirmButton: false,
                    });
                }
                this.disabled = false ;
            } )
        },
        // get plan details 
        async getPlansDetails(){
             await axios.get(`plan-details`, {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.plan = res.data.data.plan ;
                    this.to_date = res.data.data.to_date ;
                    this.num_courses = res.data.data.num_courses ;
                    this.num_sold_courses = res.data.data.num_sold_courses ;
                    this.num_next_courses = res.data.data.num_next_courses ;
                    this.price_courses = res.data.data.price_courses ;
                    this.price_sold_courses = res.data.data.price_sold_courses ;
                    this.price_next_courses = res.data.data.price_next_courses ;
                    this.num_consultations = res.data.data.num_consultations ;
                    this.num_sold_consultations = res.data.data.num_sold_consultations ;
                    this.num_next_consultations = res.data.data.num_next_consultations ;
                    this.price_consultations = res.data.data.price_consultations ;
                    this.price_sold_consultations = res.data.data.price_sold_consultations ;
                    this.price_next_consultations = res.data.data.price_next_consultations ;
                    this.invoices = res.data.data.invoices ;
                }
            } )
        },
        // cancel plan 
        async cancelPlan(){
            this.disabled2 = true ;
            await axios.get(`cancel-plan`, {
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
                        timer: 4000,
                        showConfirmButton: false,
                    });
                }
                this.disabled2 = false ;
            } )
        },
    },
    mounted(){
        this.getPlans();
        this.getPlansDetails()
    }
}
</script>

<style lang="scss" scoped>
    .custom_bordered{
        border: 1px solid #ccc;
        background-color: transparent;
        border-radius: 4px;
        width: 50%;
    }
    .single_filed{
        border: none;
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
    .singleCheck{
        font-size: 16px;
    }
    .singleCheck svg{
        font-size: 16px;
    }
    .modal-dialog{
        max-width:40% !important;
    }
    .pills_table{
        width: 100%;
        border: 1px solid #ccc;
        tr{
            border-bottom: 1px solid #ccc;
            .showPill{
                position: relative;
                &::before{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height:1px;
                    background: #ccc;
                    left:0;
                    bottom: 5px
                }
            }
        }
    }
    .bordered_btn{
        display: flex;
        justify-content: end;
        width: 100%;
        height: 100%;
        align-content: end;
        transform: translate(-150%, 53px);
    }
    .bordered_btn2{
        transform: translate(0px, 0px);
        width: 16%;
        display: flex;
        justify-content: center;
    }
    .single_plan{
        position: relative;
        border: 1px solid #ccc;
        border-radius: 7px;
        padding: 12px;
        min-height: 175px;
        .abs_price{
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .price_num{
                font-size: 20px;
                font-weight: bold;
                color: #c40f3d;;
            }
        }
        .progress_bar{
            width: 180px;
            height: 5px;
            border-radius: 5px;
            background: #ccc;
            .active_bar{
                width: 70%;
                background: #c40f3d;
                height: 5px;
                border-radius: 5px;
            }
        }
    }
</style>