<template>
    <section id="adviseForm" class="mt-4">
        <div class="container">

            <div class="imagesForm d-flex justify-content-center">
                <img :src="require('@/assets/imgs/Rectangle 2175.png')" alt="">
                <img :src="require('@/assets/imgs/Rectangle 2176.png')" alt="">
                <img :src="require('@/assets/imgs/Rectangle 2177.png')" alt="">
            </div>

            <section class="adForm mt-3">
                <p class="common_head  fw-6"> طلب استشارة </p>
                <h6 class="fw-bold">تحتاج خدمتنا؟ احجز استشارتك المجانية الآن وسوف نرد عليك في اسرع وقت</h6>

                <form class="mt-2" ref="consultationForm" @submit.prevent="sendComplaint">
                    <input type="text" class="form-control mb-2" placeholder="اسمك" name="user_name" v-model="user_name" id="">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="number" class="form-control mb-2" placeholder="رقم الهاتف" name="phone" v-model="phone" id="">
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control mb-2" required placeholder="البريد الألكتروني" name="email" v-model="email" id="">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control mb-2" placeholder="اسم الشركة" name="company_name" v-model="company_name" id="">
                        </div>
                        <div class="col-md-6">
                            <div class="form-group position-relative">
                                <select
                                    class="form-select mb-3"
                                    aria-label="Default select example"
                                    name="category_id"
                                    
                                >
                                    <option selected hidden  disabled value="">نوع الخدمة</option>
                                    <option v-for="cat in categories" :key="cat.id" :value="cat.id"> {{ cat.name }} </option>
                                </select>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <!-- <div class="form-group position-relative">
                               <input type="file" class="form-control mb-2" placeholder="ارفاق ملف" name="file"  id="">
                                <i class="fa-solid fa-camera-retro">
                                    <input type="file">
                                </i>
                            </div> -->

                            <div class="form-group position-relative">
                                <input type="text" class="form-control mb-3"  name="" ref="actualInput" placeholder="ارفاق ملف">
                                <i class="fa-solid fa-camera-rotate came_icon"></i>

                                <input type="file" class="hiddenFile" required name="file"  @change="uploadFile" id="">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group position-relative">
                               <textarea name="message" v-model="message" id="" cols="30" rows="10" class="form-control" placeholder="رسالة..."></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end mt-3 mb-4">
                        <button class="btn main_btn w-25" :disabled="disabled"> احجز الان </button>
                    </div>
                </form>
            </section>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            categories : [],
            disabled : true,
            user_name : '',
            phone : '',
            email : '',
            company_name : '',
            message : ''
        }
    },
    watch:{
        message(){
            if( this.email !== '' && this.user_name !== '' && this.message !== ''  && this.phone !== ''&& this.company_name !== ''){
                this.disabled = false
            }else{
                this.disabled = true
            }
        },
        phone(){
            if( this.email !== '' && this.user_name !== '' && this.message !== ''  && this.phone !== ''&& this.company_name !== ''){
                this.disabled = false
            }else{
                this.disabled = true
            }
        },
        email(){
            if( this.email !== '' && this.user_name !== '' && this.message !== ''  && this.phone !== ''&& this.company_name !== ''){
                this.disabled = false
            }else{
                this.disabled = true
            }
        },
        user_name(){
            if( this.email !== '' && this.user_name !== '' && this.message !== ''  && this.phone !== ''&& this.company_name !== ''){
                this.disabled = false
            }else{
                this.disabled = true
            }
        },
        company_name(){
            if( this.email !== '' && this.user_name !== '' && this.message !== ''  && this.phone !== ''&& this.company_name !== ''){
                this.disabled = false
            }else{
                this.disabled = true
            }
        }
    },
    methods:{
        uploadFile(e){              
            this.$refs.actualInput.value = e.target.files[0].name
        },
        // get categories
        async getCats(){
            await axios.get('categories')
            .then((res)=>{
                this.categories = res.data.data ;
            })
        },
        // send complaint 
        async sendComplaint(){
            this.disabled = true ;
            const fd = new FormData(this.$refs.consultationForm)
            await axios.post('new-consultation', fd , {
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
                    this.user_name = '';
                    this.phone = '';
                    this.email = '';
                    this.message = '';
                    this.company_name = '';
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
        this.getCats()
    }
}
</script>

<style lang="scss">
    #adviseForm{
        .imagesForm{
            img{
                height: 250px
            }
        }
        .common_head{
            padding-right: 16px;
            padding-left: 16px;
        }
        .common_head::before {
            background-color: #c40f3d  !important;
            right: 0px !important;
        }
        textarea{
            height: 100px !important;
        }
    }
    
</style>