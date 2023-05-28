<template>
      <!-- Modal sign up -->
    <div
      class="modal fade"
      id="intersts"
      tabindex="-1"
      aria-labelledby="signUpLabel"
      aria-hidden="true"
      
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <section id="interstsModal" class="mx-3">
                
                <div class="interstHeader pt-3 pb-3">
                    <h5 class="fw-bold">حدد اهتمامك</h5>
                </div>

                <p class="o-5 fw-5 mt-2">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل </p>

                <form>
                    <div class="interstFields">
                        <!-- single check  -->

                        <div class="single_filed position-relative" v-for="cat in categories" :key="cat.id">
                            <input type="checkbox" name="category_ids[]" :value="cat.id" v-model="categoriesSelected" id="" class="checkIntrest">
                            <label for="" class="singleCheck">
                                <i class="fa-regular fa-circle circleCheck"></i>
                                <i class="fa-solid fa-circle-check trueCheck"></i>
                                <span> {{ cat.name }} </span>
                            </label>
                        </div>
                        
                    </div>

                    <div class="d-flex justify-content-center mt-2 mb-3">
                        <button  class="btn bordered_btn mx-2 w-50" @click.prevent="anotherTime">
                            في وقت لاحق 
                        </button>

                        <button class="btn main_btn w-50" @click.prevent="AddInters" :disabled="disabled"> أضف </button>

                    </div>
                </form>
            </section>
          </div>
        </div>
      </div>
    </div>

    <!-- otp modal  -->
    <sendOtpModalVue />
</template>

<script>
import sendOtpModalVue from './sendOtpModal.vue';
import axios from 'axios';

export default {
    data(){
        return{
            categories : [],
            categoriesSelected : [],
            disabled : true 
        }
    },

    watch:{
        categoriesSelected(){
            console.log(this.categoriesSelected)

            if( this.categoriesSelected.length == 0 ){
                this.disabled = true ; 
            }else{
                this.disabled = false ; 
            }
        }
    },
    methods:{
        async AddInters(){
            
            this.disabled = true ;
            const fd = new FormData();
            for( let i = 0 ; i < this.categoriesSelected.length ; i++ ){
                fd.append('category_ids[]', this.categoriesSelected[i] );
            }
            await axios.post('add-to-interests', fd , {
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
                        document.querySelector('#intersts').style.display = 'none';
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

        },
        anotherTime(){
            document.querySelector('#intersts').style.display = 'none';
        },


        // get categories 
        async getCategories(){
            await axios.get('categories')
            .then( (res)=>{
                this.categories = res.data.data
            } )
        },



    },
    components:{
        sendOtpModalVue
    },
    mounted(){
        this.getCategories()
    }
}
</script>

<style lang="scss" scoped>
    .modal-dialog {
        max-width: 40% !important;
        margin: auto !important;
    }
</style>

<style lang="scss">
    .singleCheck{
        .circleCheck,span{
            color:#333132;
        }   
        .circleCheck, .trueCheck{
            margin: 0 7px;
        }
    }

    input.checkIntrest {
        position: absolute;
        width:100%;
        height:100%;
        top: 0;
        right:0;
        opacity: 0;
    }
    .singleCheck{
        padding: 7px;
        display: flex;
        align-items: center;
        transition: .3s;
    }
    .singleCheck .trueCheck{
        display: none;
    }
    .checkIntrest:checked + .singleCheck{
        background: #C40F3D;
    }
    .checkIntrest:checked + .singleCheck span{
        color:#fff
    }
    .checkIntrest:checked + .singleCheck .circleCheck{
        display: none;
    }
    .checkIntrest:checked + .singleCheck .trueCheck{
        display: block;
        color: #fff;
    }
    .single_filed{
        border: 1px solid #D0D5DD;
        border-radius: 3px;
        width: fit-content;
    }
    .single_filed {
        margin: 0 7px 7px 7px;
    }
    .interstFields{
        display: flex;
        flex-wrap: wrap;
    }
    .bordered_btn{
        border: 1px solid #333132 !important;
    }
</style>