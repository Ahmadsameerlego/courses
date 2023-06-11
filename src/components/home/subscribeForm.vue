<template>
    <section id="subscribe" class="pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-2">
                    <h4 class="fw-bold">تلقي إخطارات عندما أنشر مقالات جديدة</h4>
                    <p class="sub_text o-5">ابق على اطلاع بأحدث الأخبار والإعلانات والمقالات.</p>
                </div>

                <div class="col-md-6">
                    <form @submit.prevent="subscribe()" ref="subscribe">
                        <div class="d-flex justify-content-end  ">
                            <input type="email" name="email" v-model="email" class="form-control w-50" placeholder="البريد الاكتروني">
                            <button class="btn main_btn mx-3" :disabled="disabled"> اشتراك </button>
                        </div>
                    </form>
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
            disabled : true,
            email : ''
        }
    },
    watch:{
        email(){
            if( this.email !== '' ){
                this.disabled = false
            }else{
                this.disabled = true
            }
        }
    },
    methods:{
        async subscribe(){
            this.disabled = true ;
            const fd = new FormData(this.$refs.subscribe)
            await axios.post('add-to-newsletters', fd , {
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
                    this.email = ''
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
    }
}
</script>

<style lang="scss">
    #subscribe{
        background-color: #FAF8F6;
    }
    .sub_text{
        font-size: 15px;
        font-weight: 600;
    }
</style>