<template>
  <div
    class="modal fade"
    id="otp"
    tabindex="-1"
    aria-labelledby="otpLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <section id="loginModal" >
            <!-- close modal  -->
            <div class="close_modal">
              <button type="button" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div class="abs_bar_top">
              
            </div>
            <div class="abs_bar_bottom">
              <img :src="require('@/assets/imgs/Vector@2x.png')" alt="" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <section class="form_side">
                  <!-- logo  -->
                  <div class="authLogo">
                    <img :src="require('@/assets/imgs/image 74.png')" alt="" />
                  </div>
                  <h5 class="fw-6">التحقق من الرمز</h5>
                  <p class="fs-15 o-5">
                        أدخل الرمز الذي أرسلناه إلى بريدك الإلكتروني {{ email }}                 
                        </p>

                  <form class="loginForm" ref="sendCode" @submit.prevent="sendCode" style="border-bottom:none;">
                    

                    <div style="display: flex; flex-direction: row;justify-content:space-evenly">
                        <v-otp-input
                            ref="otpInput"
                            v-model:value="code"
                            name="code"
                            input-classes="otp-input"
                            separator=""
                            :num-inputs="4"
                            :should-auto-focus="true"
                            input-type="letter-numeric"
                            :conditionalClass="['one', 'two', 'three', 'four']"
                            :placeholder="['_', '_', '_', '_']"
                            @on-change="handleOnChange"
                            @on-complete="handleOnComplete"
                        />
                    </div>

                   

                    <button class="main_btn w-100 btn pt-2 pb-2 mt-3" :disabled="disabled">
                      إرسال الرمز
                    </button>
                  </form>

                  
                </section>
              </div>

              <div class="col-md-6">
                <div class="loginSideImage">
                  <img
                    :src="require('@/assets/imgs/Left Section (3).png')"
                    class=""
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

  <!-- new password  -->
  <newPasswordVue />

  <interstsModalVue />
</template>

<script>
import newPasswordVue from './newPassword.vue';
import interstsModalVue from './interstsModal.vue';
import axios from 'axios';

export default {
    data(){
      return{
        email : '',
        disabled : true,
        code : ''
      }
    },
    watch:{
      code(){
        if( this.code == '' ){
          this.disabled = true;
        }else{
          this.disabled = false ;
        }
      }
    },
    methods:{

        async sendCode(){
          this.disabled = true;
          const fd = new FormData();
          fd.append('email', localStorage.getItem('email'));
          fd.append('code', this.code);
          await axios.post('activate?_method=patch', fd)
          .then( (res)=>{
            if( res.data.key == 'success' ){

              this.$swal({
                  icon: 'success',
                  title: res.data.msg,
                  timer: 2000,
                  showConfirmButton: false,
              });

              localStorage.setItem('token', res.data.data.user.token)
              setTimeout(() => {
            

                    if( localStorage.getItem('userType') == 'client' ){
                      document.querySelector('#intersts').style.display = 'block';
                      document.querySelector('#intersts').classList.add('show');
                      document.querySelector('#otp').style.display = 'none';
                    }else if(localStorage.getItem('userType') == 'adviser'){
                      document.querySelector('#otp').style.display = 'none';
                      location.reload()
                    }
              }, 2000);
            }else{
              this.$swal({
                  icon: 'error',
                  title: res.data.msg,
                  timer: 2000,
                  showConfirmButton: false,

              });
            }

            this.disabled = false;
          } )
        },
    },
    updated(){
      if( localStorage.getItem('email') ){
        this.email = localStorage.getItem('email');
      }
    },
    components:{
        newPasswordVue,
        interstsModalVue
    }
}
</script>

<style>
    .otp-input{
        width: 40px;
        height: 30px;
        border-radius: 3px;
        border: 1px solid #D0D5DD;
        display: flex;
        justify-content: center;
        text-align: center;
        margin:0 10px;
    }
    .otp-input.is-complete{
        border: 1px solid #c40f3d !important;
        color: #c40f3d !important;
        font-weight: bold !important;

    }
    @media(max-width:768px){
      .otp-input{
        width: 70px !important;
      }
    }
</style>