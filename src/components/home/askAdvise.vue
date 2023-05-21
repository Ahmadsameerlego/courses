<template>
  <section id="ask">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <section class="ask_details position-relative">
            <!-- free  absolute -->
            <div class="free_circle whiteColor"> مجانية </div>
            <!-- title  -->
            <div class="d-flex justify-content-end pt-5">
              <h5 class="fw-bold title_head whiteColor">نقوم بتحويل المعلومات إلى رؤى قابلة للتنفيذ</h5>
            </div>
            <!-- image  -->
            <div class="free_image">
              <img :src="require('@/assets/imgs/pexels-andrea-piacquadio-3978564 3 (2).png')" alt="">
            </div>

            <!-- work together  -->
            <div class="work_together d-flex align-items-center">
              <div class="px-3">
                <p class="fw-6 mb-0 whiteColor text-start"> لنعمل معا </p>
                <p class="fw-6 o-5 whiteColor"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،  </p>
              </div>

              <div class="work_image">
                <img :src="require('@/assets/imgs/Vector (4).png')" alt="">
              </div>
            </div>

          </section>
        </div>

        <!-- form section  -->
        <div class="col-md-6">
          <div class="ask_form">
            <h5 class="ask_form_head fw-bold mb-3">
              يتمتع فريقنا الاستشاري بخبرة طويلة في تشخيص المشكلات ووضع الخطط والبرامج التنفيذية والاشراف عليها
            </h5>
            <p class="o-5 mb-3 ask_form_desc">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل 
            </p>

            <form>
              <input type="text" class="form-control mb-3" placeholder="الاسم">
              <input type="tel" class="form-control mb-3" placeholder="رقم الهاتف">  
              <input type="email" class="form-control mb-4" placeholder="البريد الاكتروني">  
              <button class="main_btn ask_btn w-100 pt-3 pb-3 btn"> طلب استشارة </button>
            </form>
          </div>
        </div>
    </div>
    </div>

    <!-- absolute bar  -->
    <div class="abs_bar">
      <img :src="require('@/assets/imgs/Vector (3).png')" alt="">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  #ask{
    position:relative;
    padding-top: 100px;
    margin-bottom: 50px;
    .ask_details{
      background: #333132;
      width: 80%;
      margin: auto;
      .free_circle{
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #BF4D66;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -8%;
        z-index: 0;
        right: -7%;
        font-size: 16px;
        font-weight: 600;        
      }
      .title_head{  
        width: 231px;
        line-height: 2;
        text-align: end;
        font-size: 26px;
        margin-left: 40px;
      }
      .work_together{
        width: 100%;
        background: rgb(196 15 61 / 85%);
        position: absolute;
        bottom: 19px;
        /* opacity: .7; */
        padding-top: 9px;
      }
      .free_image{
        overflow: hidden;
        img{          
            width: 350px;
            height: 350px;
            border-radius: 50%;
            transform: translate(28%, 6%);
        }
      }
      .work_image{
        width:35px;
        height:35px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .abs_bar{
      position: absolute;
      top: 7%;
      left: 4%;
    }
  }

  .form-control, .form-select{
    height:50px;
  }
  .ask_btn{
    font-size: 16px !important;
    font-weight:600 !important;
  }
  .ask_form_desc{
    font-size: 14px;
    font-weight: 600;
  }
  .ask_form_head{
    line-height: 2;
  }
</style>