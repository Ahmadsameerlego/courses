<template>
    <div class="modal fade" :id="'reserveAdviser'+consultant_id" tabindex="-1" aria-labelledby="reserveAdviserLabel" aria-hidden="true">
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
                                <div class="col-md-6 mb-3">
                                    
                                    <!-- calender  -->
                                    <VueDatePicker locale="ar" v-model="date"  inline auto-apply   />
                                </div>

                                <div class="col-md-6 mb-3">
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

                            <div class="timesReserve d-flex">
                                
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
                                    <div class="col-md-3 mb-3" v-for="time in times" :key="time.id">
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




</template>


<script>
import axios from 'axios';
export default {
    data(){
        return {
            category : {},
            prices : [],
            disabled : false,
            date : null,
            times : [],
            order_id : '',
            url : ''
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
        },
        paymentUrl(){
            return this.url
        }
    },
    watch:{
        date(){
            console.log(this.date)
        }
    },
    methods:{
        uploadFile(e){

            this.$refs.actualInput.value = e.target.files[0].name
        },
    //    get consultant 
    async getConsultant(){
        await axios.get(`consultant-profile/${this.consultant_id}`)
            .then( (res)=>{
                this.times = res.data.data.times;
            } )
    },
        // store reservation 
        async storeReservation(){
            this.disabled = true ;
            const fd = new FormData(this.$refs.storeReservation);
            fd.append('consultant_id', this.consultant_id);
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

                    
                    setTimeout(() => {
                        document.querySelector(`#reserveAdviser${this.consultant_id}`).style.display = 'none';
                        document.querySelector(`.modal-backdrop`).style.display = 'none';
                        // location.reload()
                                            this.subscribePlan(this.order_id)

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
            //     console.log(this.url)

            //                                 this.$refs.frame.src = res.data.data.url ;


            // setTimeout(() => {
            //     document.querySelector('#paymentModal').style.display = 'block';
            //     document.querySelector('#paymentModal').classList.add('show')

            //      document.querySelector(`.modal-backdrop`).style.display = 'block';



            // }, 2000);


            } )
        },
    },
    mounted(){
        this.category = this.consultant.category;
        this.prices = this.consultant.prices;
        console.log(this.prices)
        this.getConsultant()

    },
    props:{
        consultant_id : Number,
        consultant : Object,
    }
}
</script>

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