<template>
    <div class="modal fade" id="reserveAdviser" tabindex="-1" aria-labelledby="reserveAdviserLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="adviserHead">
                        <h5 class="fw-bold">حجز استشارة</h5>
                    </div>

                    <div class="mainInfo d-flex align-items-center px-3 mt-2 mb-2">
                        <div class="infoImage">
                            <img :src="require('@/assets/imgs/pexels-andrea-piacquadio-3978564 3 (2).png')" alt="">
                        </div>
                        <div class="details">
                            <h6 class="fw-bold"> أحمد سمير </h6>
                            <p class="text-muted fs-15"> تصميم جرافيك </p>
                            <div class="rate">
                                <i class="fa-solid fa-star gold text-muted"></i>
                                <i class="fa-solid fa-star gold text-muted"></i>
                                <i class="fa-solid fa-star gold text-muted"></i>
                                <i class="fa-solid fa-star gold text-muted"></i>
                                <i class="fa-solid fa-star gold text-muted"></i>
                                <span> 5.0 </span>
                            </div>

                            <div class="d-flex mt-3">
                                <img :src="require('@/assets/imgs/Vector232.png')" class="singImage" alt="">
                                <p class="fw-bold">
                                    <span class="mainColor">جنيه 300</span> / 30 دقيقة  <span class="mainColor">جنيه 400</span> / 60 دقيقة
                                </p>
                            </div>
                        </div>
                        

                        
                    </div>


                    <section class=" px-3 mt-2 mb-2">
                        <p class="fw-6">الرجاء تحديد المعاد المناسب</p>
                        <div class="row">
                            <div class="col-md-6">
                                <!-- calender  -->
                                <VueDatePicker locale="ar" v-model="date" inline auto-apply />
                            </div>

                            <div class="col-md-6">
                                <form >
                                    <input type="text" class="form-control mb-2" placeholder="عنوان الاستشارة">
                                    <div class="form-group position-relative mb-2">
                                    <input type="text" class="form-control mb-2" placeholder="ارفاق ملف" name="" id="">
                                        <i class="fa-solid fa-camera-retro">
                                            <input type="file">
                                        </i>
                                    </div>
                                     <div class="form-group position-relative">
                                        <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="رسالة..."></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <p class="fw-6 mb-2 mt-3">اختر مدة الجلسة</p>

                        <div class="d-flex">
                            <div class="single_filed position-relative">
                                <input type="radio" name="" id="" class="checkIntrest">
                                <label for="" class="singleCheck">
                                    <i class="fa-regular fa-circle circleCheck"></i>
                                    <i class="fa-solid fa-circle-check trueCheck"></i>
                                    <span>60 دقيقة <span class="fw-bold">(جنيه 400)</span></span>
                                </label>
                            </div>
                            <div class="single_filed position-relative">
                                <input type="radio" name="" id="" class="checkIntrest">
                                <label for="" class="singleCheck">
                                    <i class="fa-regular fa-circle circleCheck"></i>
                                    <i class="fa-solid fa-circle-check trueCheck"></i>
                                    <span>60 دقيقة <span class="fw-bold">(جنيه 400)</span></span>
                                </label>
                            </div>

                        </div>


                        <div class="d-flex mt-3">
                            <div class="singleRadio">
                                <input type="radio" class="radioInput">
                                <label class="labelRadio">
                                    <span>السبت</span>
                                    <span>11 صباحا الى 12 مساء</span>
                                </label>
                            </div>
                        </div>
                    </section>


                    <div class="d-flex justify-content-between mt-4 mb-3 px-3 sub_btns">
                        <button class="btn bordered_btn w-50 mx-3"> الغاء </button>
                        <button class="btn main_btn w-50"> تأكيد </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref(new Date());
</script>

<script>
export default {

}
</script>

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
            width: 132%;
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