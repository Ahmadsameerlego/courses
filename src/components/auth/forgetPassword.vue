<template>
  <div
    class="modal fade"
    id="forgetPassword"
    tabindex="-1"
    aria-labelledby="forgetPasswordLabel"
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
                  <h5 class="fw-6">هل نسيت كلمة المرور؟</h5>
                  <p class="fs-15 o-5">
                        لا تقلق, ما عليك سوى أن تكتب البريد الالكتروني وسنرسل إليك رمز التحقق                  
                        </p>

                  <form class="loginForm" @submit.prevent="sendCode" ref="resend" style="border-bottom:none;">
                    

                    <input
                      type="email"
                      name="email"
                      v-model="email"
                      class="form-control mb-3"
                      placeholder="البريد الإلكتروني"
                    />

                   

                    <button class="main_btn w-100 btn pt-2 pb-2 mt-3" :disabled="disabled">
                      إرسال رمز التحقق
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
</template>

<script>
import newPasswordVue from './newPassword.vue'
import axios from 'axios';
export default {
  data(){
    return{
      disabled : true ,
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
      async sendCode(){
        this.disabled = true ;
        await axios.get(`resend-code?email=${this.email}`)
        .then( (res)=>{
          if( res.data.key == 'success' ){
            this.$swal({
              icon: 'success',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,
            });
              
            setTimeout(() => {
              document.querySelector('#forgetPassword').style.display = 'none';
              document.querySelector('#newPassword').style.display = 'block';
              document.querySelector('#newPassword').classList.add('show');
            }, 2000);

            localStorage.setItem('forgetEmail', this.email);

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
    components:{
        newPasswordVue
    }
}
</script>

<style>

</style>