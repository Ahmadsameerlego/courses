<template>
  <div
    class="modal fade"
    id="newPassword"
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
                    <img :src="require('@/assets/imgs/Logo-B 1.png')" alt="" />
                  </div>
                  <h5 class="fw-6"> كلمة مرور جديدة </h5>
                  <p class="fs-15 o-5">
                        قم بإنشاء كلمة مرور جديدة لتسجيل الدخول                  
                        </p>

                  <form class="loginForm" @submit.prevent="updatePassword" ref="updatePass" style="border-bottom:none;">
                    
                    <!-- active code  -->
                    <div class="mb-3" style="display: flex; flex-direction: row;justify-content:space-evenly">
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

                    <div class="form-group position-relative">
                      <input
                        :type="passwordType"
                        name="password"
                        v-model="password"
                        class="form-control mb-3"
                        placeholder="كلمة السر"
                        minlength="6"
                        required

                      />
                      <div v-if="!eyeToggle">
                        <span @click="switchVisibility()">
                          <i class="fa-regular fa-eye"></i>
                        </span>
                      </div>
                      <div v-else>
                        <span @click="switchVisibility()">
                          <i class="fa-regular fa-eye-slash"></i>
                        </span>
                      </div>
                    </div>

                    <div class="form-group position-relative">
                      <input
                        :type="passwordType2"
                        name=""
                        v-model="confirmPassword"
                        class="form-control mb-3"
                        placeholder="تأكيد كلمة السر"
                        minlength="6"
                        required
                      />
                      <div v-if="!eyeToggle2">
                        <span @click="switchVisibility2()">
                          <i class="fa-regular fa-eye"></i>
                        </span>
                      </div>
                      <div v-else>
                        <span @click="switchVisibility2()">
                          <i class="fa-regular fa-eye-slash"></i>
                        </span>
                      </div>
                    </div>

                    <div v-if="showValid">
                      <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center">
                        <i class="fa-regular fa-circle-check"></i>
                        <span>كلمة السر متطابقة</span>
                      </p>
                      <p v-else class="passwordWrong d-flex align-items-center">
                          <i class="fa-regular fa-circle-xmark"></i>
                          <span>كلمة السر غير متطابقة</span>
                      </p>
                    </div>

                   

                    <button class="main_btn w-100 btn pt-2 pb-2 mt-3" :disabled="disabled">
                      تأكيد
                    </button>
                  </form>

                  
                </section>
              </div>

              <div class="col-md-6">
                <div class="loginSideImage">
                  <img
                    :src="require('@/assets/imgs/Left Section (4).png')"
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

  <signInModalVue />
</template>

<script>
import axios from 'axios' ;
import signInModalVue from './signInModal.vue'
export default {
    data(){
        return{
            passwordType: "password",
            eyeToggle: false,
            passwordType2: "password",
            eyeToggle2: false,
            password : '',
            confirmPassword : '',
            disabled : true,
            showValid : false
        }
    },
    components:{
      signInModalVue
    },
    watch:{
        password(){
            if( this.passwordMatch == true ){
                this.disabled = false;
            }else{
                this.disabled = true;
            }
            this.showValid = true ;
        },
        confirmPassword(){
            if( this.passwordMatch == true ){
                this.disabled = false;
            }else{
                this.disabled = true;
            }
            this.showValid = true ;
        }
    },
    computed:{
        passwordMatch() {
            return this.password === this.confirmPassword;  
        }
    },
    methods:{
      // update password 
      async updatePassword(){
        this.disabled = true ;
        const fd = new FormData(this.$refs.updatePass)
        fd.append('email', localStorage.getItem('forgetEmail'));
        fd.append('code', this.code);

        await axios.post('reset-password', fd )
        .then( (res)=>{
          if( res.data.key == 'success' ){
            this.$swal({
              icon: 'success',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,
            });
            setTimeout(() => {
              document.querySelector('#newPassword').style.display = 'none';
              document.querySelector('#exampleModal').style.display = 'block';
              document.querySelector('#exampleModal').classList.add('show');
            }, 2000);
          }else{
            this.$swal({
              icon: 'error',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,
            });
          }
          this.disabled = true ;
        } )
      },
      switchVisibility() {
          this.eyeToggle = !this.eyeToggle;

          if (this.passwordType == "password") {
              this.passwordType = "text";
          } else {
              this.passwordType = "password";
          }
      },
      switchVisibility2() {
          this.eyeToggle2 = !this.eyeToggle2;

          if (this.passwordType2 == "password") {
              this.passwordType2 = "text";
          } else {
              this.passwordType2 = "password";
          }
      },
    },
    mounted(){
              // document.querySelector('#newPassword').style.display = 'block';
              // document.querySelector('#newPassword').classList.add('show');

    }
}
</script>

<style lang="scss" >
    .passwordConfirmed{
        width:100%;
        border-radius: 3px;
        padding: 3px;
        background-color: #EAF9EE;
        svg{
            margin:0 5px;
            color:#38C75F;
        }
        span{
            color:#38C75F
        }
    }
    .passwordWrong{
        width:100%;
        border-radius: 3px;
        padding: 3px;
        background-color: #b40f0f41;
        svg{
            margin:0 5px;
            color:#da131d;
        }
        span{
            color:#da131d
        }
    }
    .main_btn:disabled{
        cursor: not-allowed;
    }


    .otp-input {
    width: 92px !important;
    height: 50px !important;
    }
</style>