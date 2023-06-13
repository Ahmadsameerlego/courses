<template>
    <section class="addCourse mt-4 mb-4">
        <div class="container">
            
            <h6 class="fw-bold mainColor course_title text-end"> اضافة دورة </h6>

            <form @submit.prevent="storeCourse" ref="storeCourseForm">
                <div class="row mt-4">
                    <div class="col-md-12 mb-3">
                        <input type="text" class="form-control" required placeholder="اسم الدورة" name="title[ar]" v-model="title" id="">
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <select
                                class="form-select mb-3"
                                aria-label="Default select example"
                                name="category_id"
                                required
                            >
                                <option selected hidden disabled value=""> التخصص </option>
                                <option :value="cat.id" v-for="cat in categories" :key="cat.id"> {{ cat.name }}  </option>
                                
                            </select>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <select
                                class="form-select mb-3"
                                aria-label="Default select example"
                                required
                                name="lang"
                            >
                                <option selected hidden disabled value=""> لغة الدورة </option>

                                <option value="العربية">العربية</option>
                                <option value="English">الانجليزية</option>
                                
                            </select>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>  



                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <input type="text" class="form-control"  name="" ref="actualInput" placeholder="اضافة خلفية للدورة">
                            <i class="fa-solid fa-camera-rotate came_icon"></i>

                            <input type="file" class="hiddenFile" required name="image"  @change="uploadFile" id="">
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <input type="number" class="form-control" required name="price" v-model="price"  placeholder="تكلفة الدورة(السعر قبل الخصم)">
                        </div>
                    </div> 
                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <input type="number" class="form-control" required name="offer_price" v-model="offer_price" placeholder="تكلفة الدورة(السعر بعد الخصم)">
                        </div>
                    </div> 
                    <div class="col-md-6 mb-3">
                        <div class="form-group position-relative">
                            <input type="text" class="form-control" required name="period" v-model="period"  placeholder="مدة الدورة">
                        </div>
                    </div> 

                    <div class="col-md-12">
                        <textarea name="description[ar]" required v-model="description" class="form-control" style="height:80px"  placeholder="محتوى الدورة"  id="" cols="30" rows="10"></textarea>
                    </div> 

                    <div class="d-flex justify-content-center mt-4">
                        <button class="main_btn btn w-50 pt-2 pb-2" :disabled="disabled"> حفظ الدورة </button>
                    </div>
                </div>
            </form>

        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            categories : [],
            cat_name : 'التخصص',
            disabled : false,
            description : '',
            period: '',
            offer_price : null,
            price : null, 
            title : '',


        }
    },
    methods:{
        // get all intersts 
        async getCategories(){
            await axios.get('categories')
            .then( (res)=>{
                this.categories = res.data.data
            } )
        },
        uploadFile(e){

            this.$refs.actualInput.value = e.target.files[0].name
        },
        // store course 
        async storeCourse(){
            this.disabled = true ;
            const fd  = new FormData(this.$refs.storeCourseForm)
            await axios.post('store-course', fd ,{
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
                        this.$router.push('/advisorProfile')
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
        this.getCategories()
    }
}
</script>

<style>
    .came_icon{
        font-size: 20px !important;
        color: #ccc !important;
    }
    .hiddenFile{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        opacity: 0;
    }
</style>