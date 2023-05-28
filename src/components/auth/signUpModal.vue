<template>
    <!-- Modal sign up -->
    <div
      class="modal fade"
      id="signUp"
      tabindex="-1"
      aria-labelledby="signUpLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <section id="signUpModal">
              <!-- close modal  -->
              <div class="close_modal">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div class="abs_bar_top">
                <img
                  :src="require('@/assets/imgs/Vector (3).png')"
                  alt=""
                />
              </div>
              <div class="abs_bar_bottom">
                <img
                  :src="require('@/assets/imgs/Vector@2x.png')"
                  alt=""
                />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <section class="form_side">
                    <!-- logo  -->
                    <div class="authLogo">
                      <img
                        :src="require('@/assets/imgs/Logo-B 1.png')"
                        alt=""
                      />
                    </div>
                    <h4 class="fw-bold">مرحبآ بك, تسجيل حساب جديد؟</h4>

                    <form class="loginForm" ref="registerForm" @submit.prevent="signUp">
                      <div class="form-group position-relative">
                        <select
                          class="form-select mb-3"
                          aria-label="Default select example"
                          name="type"
                          v-model="type"
                        >
                          <option selected hidden disabled value="">
                            نوع الدخول
                          </option>
                          <option value="0"> عميل </option>
                          <option value="1"> استشاري </option>
                        </select>
                        <i class="fa-solid fa-chevron-down"></i>
                      </div>

                      <input
                        type="text"
                        name="name"
                        v-model="name"
                        class="form-control mb-3"
                        placeholder="الأسم كامل"
                      
                      />
                      <input
                        type="email"
                        name="email"
                        v-model="email"
                        class="form-control mb-3"
                        placeholder="البريد الإلكتروني"
                        
                      />

                      <section class="position-relative">
                        <input
                        type="tel"
                        name="phone"
                        v-model="phone"
                        class="form-control mb-3"
                        placeholder="رقم الجوال"
                      />
                      <div class="form-group countries">
                        <select
                          class="form-select mb-3"
                          aria-label="Default select example"
                          name="country_code"
                          v-model="country_code"
                        >
                          <option selected hidden disabled>
                            كود الدولة
                          </option>
                          <option v-for="country in countries" :key="country.id" :value="country.key"> {{ country.key }}{{ country.name }} </option>
                        </select>
                        <i class="fa-solid fa-chevron-down"></i>
                      </div>
                      </section>
                      <div class="form-group position-relative">
                        <input
                          :type="passwordType"
                          name="password"
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

                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <!-- remember me  -->
                        <div class="form-check">
                          <label
                            class="form-check-label fw-6"
                            for="flexCheckDefault"
                          >
                            من خلال إنشاء الحساب فإنك توافق على <router-link to="/" class="mainColor">الشروط والأحكام</router-link> الخاصة بنا
                          </label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="termsCondition"
                            id="flexCheckDefault"
                          />
                        </div>

                        
                      </div>

                      <button class="main_btn w-100 btn pt-2 pb-2 mt-3" :disabled="disabled">
                        تسجيل حساب
                      </button>
                    </form>

                    <div
                      class="haveNoAcc d-flex justify-content-center mt-3"
                    >
                      <p class="fs-15 fw-6">
                        تمتلك حساب بالفعل ؟
                        <button
                          class="formGetPass"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          type="button"
                        >
                          تسجيل الدخول
                        </button>
                      </p>
                    </div>
                  </section>
                </div>

                <div class="col-md-6">
                  <div class="loginSideImage">
                    <img
                      :src="require('@/assets/imgs/Left Section (1).png')"
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

    <interstsModalVue />
        <!-- otp modal  -->
    <sendOtpModalVue />


</template>

<script>
import interstsModalVue from './interstsModal.vue';
import sendOtpModalVue from './sendOtpModal.vue'

import axios from 'axios';
export default {
  data() {
    return {
      passwordType: "password",
      eyeToggle: false,
      termsCondition : false,
      disabled : true,
      name : '',
      phone : '',
      email : '',
      password : '',
      type : '',
      country_code : '',
      countries : []
    };
  },

  watch:{
    termsCondition(){
      if( this.termsCondition == true ){
        this.disabled = false ;
      }else{
        this.disabled = true ;
      }
    }
  },
  methods: {
    // sign up 
    async signUp(){
      this.disabled = true;
      const fd = new FormData(this.$refs.registerForm);
      await axios.post('sign-up', fd)
      .then( (res)=>{
        if( res.data.key == 'success' ){

          this.$swal({
              icon: 'success',
              title: res.data.msg,
              timer: 2000,
              showConfirmButton: false,
          });


          localStorage.setItem('email', this.email);
          localStorage.setItem('token', res.data.data.user.token)

          setTimeout(() => {
                document.querySelector('#signUp').style.display = 'none';
                document.querySelector('#otp').style.display = 'block'
                document.querySelector('#otp').classList.add('show');
                
                if( this.type == '0' ){
                  localStorage.setItem('userType', 'client')
                }else if(this.type == '1'){
                  localStorage.setItem('userType', 'adviser')
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

    // get countries 
    async getCountries(){
      await axios.get('countries')
      .then( (res)=>{
        this.countries = res.data.data
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

  },
  components:{
    interstsModalVue,
    sendOtpModalVue
  },
  mounted(){
    this.getCountries();
  }
};
</script>

<style lang="scss">
#loginModal,
#signUpModal {
  position: relative;
  .close_modal {
    position: absolute;
    top: 20px;
    right: 20px;
    left: 20px;
    button {
      border: none;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      font-size: 17px;
    }
  }
}
.form_side {
  margin: 65px 25px;
}
.modal-dialog {
  max-width: 75% !important;
  margin: auto !important;
}
.form-select {
  background-image: none !important;
  padding-right: 13px !important;
  color: #6c757d;
  padding-left: 13px !important;
}
.form-group {
  svg {
    position: absolute;
    left: 13px;
    top: 39%;
    font-size: 15px;
    color: #6c757d;
    cursor: pointer;
  }
}
.form-check .form-check-input {
  float: right !important;
  margin-left: 0.5em !important;
  width: 17px !important;
  height: 17px !important;
}
.form-check-input:checked {
  background-color: #cb2d56 !important;
  border-color: #c40f3d !important;
  width: 17px !important;
  height: 17px !important;
  outline: #c40f3d !important;
}

.formGetPass {
  border: none;
  background: none;
  color: #c40f3d;
  font-size: 13px;
  border-bottom: 1px solid #c40f3d;
  font-weight: 600;
}
.loginForm {
  padding-block: 20px;
  border-bottom: 1px solid #d2d2d2;
}

.modal-body {
  padding: 0 !important;
}
.abs_bar_top,
.abs_bar_bottom {
  position: absolute;
  width: 100px;
}
.abs_bar_top img,
.abs_bar_bottom img {
  width: 100%;
  height: 100%;
}
.abs_bar_top {
  top: 30px;
  left: 30px;
}
.abs_bar_bottom {
  bottom: 30px;
  right: 30px;
}
.main_btn:disabled{
  opacity: .4 !important;
  cursor: not-allowed !important;
}
</style>

<style lang="scss" scoped>
.loginSideImage {
  img {
    width: 100%;
    object-fit: cover;
    height: 733px;
  }
}

.countries{
  position: absolute;
  left:0;
  top: 0;
  width:120px;
  height:100%;
}
</style>