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
              <img :src="require('@/assets/imgs/Vector (3).png')" alt="" />
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

                  <form class="loginForm" @submit.prevent="sendCode" style="border-bottom:none;">
                    

                    <div class="form-group position-relative">
                      <input
                        :type="passwordType"
                        name=""
                        v-model="password"
                        class="form-control mb-3"
                        placeholder="كلمة السر"
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

                    <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center">
                        <i class="fa-regular fa-circle-check"></i>
                        <span>كلمة السر متطابقة</span>
                    </p>
                    <p v-else class="passwordWrong d-flex align-items-center">
                        <i class="fa-regular fa-circle-xmark"></i>
                        <span>كلمة السر غير متطابقة</span>
                    </p>

                   

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
</template>

<script>
export default {
    data(){
        return{
            passwordType: "password",
            eyeToggle: false,
            passwordType2: "password",
            eyeToggle2: false,
            password : '',
            confirmPassword : '',
            disabled : true
        }
    },
    watch:{
        password(){
            if( this.passwordMatch == true ){
                this.disabled = false;
            }else{
                this.disabled = true;
            }
        },
        confirmPassword(){
            if( this.passwordMatch == true ){
                this.disabled = false;
            }else{
                this.disabled = true;
            }
        }
    },
    computed:{
        passwordMatch() {
            return this.password === this.confirmPassword;  
        }
    },
    methods:{
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
    }
}
</script>

<style lang="scss">
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
</style>