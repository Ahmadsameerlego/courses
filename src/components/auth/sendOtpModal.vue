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
                  <h5 class="fw-6">التحقق من الرمز</h5>
                  <p class="fs-15 o-5">
                        أدخل الرمز الذي أرسلناه إلى بريدك الإلكتروني Mohxxx@gmail.com                  
                        </p>

                  <form class="loginForm" @submit.prevent="sendCode" style="border-bottom:none;">
                    

                    <div style="display: flex; flex-direction: row;justify-content:space-evenly">
                        <v-otp-input
                            ref="otpInput"
                            v-model:value="bindModal"
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

                   

                    <button class="main_btn w-100 btn pt-2 pb-2 mt-3">
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
</template>

<script>
import newPasswordVue from './newPassword.vue'

export default {
    methods:{
        sendCode(){

            document.querySelector('#forgetPassword').style.display = 'none';
            document.querySelector('#newPassword').style.display = 'block';
            document.querySelector('#newPassword').classList.add('show');
        }
    },
    components:{
        newPasswordVue
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
</style>