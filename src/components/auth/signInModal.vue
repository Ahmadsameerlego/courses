<template>
  <!-- Modal login -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <section id="loginModal">
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
                  <h5 class="fw-6">تسجيل الدخول إلى حسابك</h5>
                  <p class="fs-15 o-5">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                  </p>

                  <form class="loginForm">
                    <div class="form-group position-relative">
                      <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option selected hidden disabled>نوع الدخول</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                      </select>
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>

                    <input
                      type="email"
                      name=""
                      class="form-control mb-3"
                      placeholder="البريد الإلكتروني"
                    />

                    <div class="form-group position-relative">
                      <input
                        :type="passwordType"
                        name=""
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
                          تذكرني
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>

                      <!-- forget password  -->
                      <div class="forgetPassword">
                        <button 
                        class="formGetPass" 
                        data-bs-toggle="modal"
                        data-bs-target="#forgetPassword"
                        type="button">نسيت كلمة المرور</button>
                      </div>
                    </div>

                    <button class="main_btn w-100 btn pt-2 pb-2 mt-3">
                      تسجيل الدخول
                    </button>
                  </form>

                  <div class="haveNoAcc d-flex justify-content-center mt-3">
                    <p class="fs-15 fw-6">
                      لا تمتلك حساب ؟
                      <button
                        class="formGetPass"
                        data-bs-toggle="modal"
                        data-bs-target="#signUp"
                        type="button"
                      >
                        قم بإنشاء حساب
                      </button>
                    </p>
                  </div>
                </section>
              </div>

              <div class="col-md-6">
                <div class="loginSideImage">
                  <img
                    :src="require('@/assets/imgs/Left Section.png')"
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

  <!-- Modal signup -->
    <signUpModalVue />
    <!-- fotget password modal  -->
    <forgetPasswordVue />
</template>

<script>
import forgetPasswordVue from './forgetPassword.vue';
import signUpModalVue from './signUpModal.vue';
export default {
  data() {
    return {
      passwordType: "password",
      eyeToggle: false,
    };
  },
  methods: {
    switchVisibility() {
      this.eyeToggle = !this.eyeToggle;

      if (this.passwordType == "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
  },
  components: {
    signUpModalVue,
    forgetPasswordVue
  },
};
</script>

<style lang="scss">
#loginModal {
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
.loginSideImage {
  img {
    width: 100%;
    object-fit: cover;
    height: 660px;
  }
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
</style>