<template>
  <section class="contactForm">
    <div class="contact_head_image mb-4">
      <img :src="require('@/assets/imgs/contact.png')" alt="">
    </div>

    <div class="container">
            <p class="common_head  fw-6 text-center">  لنتحدث </p>
            <h5 class="fw-bold text-center"> ابق على تواصل معنا </h5>
            <p class="fw-6 o-5 text-center w-50 mx-auto mt-3">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل 
            </p>

            <div class="row">

                <div class="col-md-4 mb-2">
                  <!-- single one  -->
                  <div class="single_contact_box">
                    <div class="icon_circle">
                      <img :src="require('@/assets/imgs/call-incoming.png')" alt="">
                    </div>

                    <p class="o-5 fw-6">هل لديك اي سؤال؟</p>

                    <p class="fw-bold contact_link">
                      <a href="tel:+201288008898" > +201288008898 </a>
                    </p>
                  </div>
                </div>

                <div class="col-md-4 mb-2">
                  <!-- single one  -->
                  <div class="single_contact_box">
                    <div class="icon_circle">
                      <img :src="require('@/assets/imgs/box.png')" alt="">
                    </div>

                    <p class="o-5 fw-6">اكتب بريدا الكترونيا</p>

                    <p class="fw-bold contact_link">
                      <a href="tel:+201288008898" > contactus@advisersgate.com </a>
                    </p>
                  </div>
                </div>


                <div class="col-md-4 mb-2">
                  <!-- single one  -->
                  <div class="single_contact_box">
                    <div class="icon_circle">
                      <img :src="require('@/assets/imgs/location-tick.png')" alt="">
                    </div>

                    <p class="o-5 fw-6">قم بالزيارة في أي وقت</p>

                    <p class="fw-bold contact_link">
                      <a href="tel:+201288008898" > شارع التسعين الشمالي ، القاهرة الجديدة ، التجمع الخامس ، القاهرة ، مصر </a>
                    </p>
                  </div>
                </div>
            </div>


            <section class="mt-4">
                <p class="common_head  fw-6 text-center">  اتصل بنا </p>
                <!-- left side  -->
                <div class="social_media mb-3 d-flex justify-content-center">
                    <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
                <h5 class="fw-bold text-center"> قدم طلبك وسوف نرد عليك في اسرع وقت </h5>

                <form class="mt-4 mb-4" ref="contactForm" @submit.prevent="contactUS">
                  <div class="row">
                    <div class="col-12 mb-3">
                      <input type="text" class="form-control" placeholder="الاسم" name="user_name" v-model="user_name">
                    </div>

                    <div class="col-md-6 mb-3">
                      <input type="number" class="form-control" placeholder="رقم الهاتف" name="phone" v-model="phone">
                    </div>

                    <div class="col-md-6 mb-3">
                      <input type="email" required class="form-control" name="email" v-model="email" placeholder="البريد الالكتروني">
                    </div>

                    <div class="col-md-12 mb-3">
                      <textarea name="complaint" v-model="complaint" class="form-control" id="" placeholder="رسالتك..." cols="30" rows="10"></textarea>
                    </div>


                    <div class="d-flex justify-content-end">
                      <button class="main_btn btn w-25" :disabled="disabled"> ارسال </button>
                    </div>
                    
                  </div>
                </form>
            </section>

    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      email : '',
      complaint : '',
      phone : '',
      user_name : '',
      disabled : true 
    }
  },
  watch:{
    complaint(){
      if( this.email !== '' && this.user_name !== '' && this.complaint !== ''  && this.phone !== ''){
        this.disabled = false
      }else{
        this.disabled = true
      }
    },
    phone(){
      if( this.email !== '' && this.user_name !== '' && this.complaint !== ''  && this.phone !== ''){
        this.disabled = false
      }else{
        this.disabled = true
      }
    },
    email(){
      if( this.email !== '' && this.user_name !== '' && this.complaint !== ''  && this.phone !== ''){
        this.disabled = false
      }else{
        this.disabled = true
      }
    },
    user_name(){
      if( this.email !== '' && this.user_name !== '' && this.complaint !== ''  && this.phone !== ''){
        this.disabled = false
      }else{
        this.disabled = true
      }
    }
  },
  methods:{
    async contactUS(){
      this.disabled = true ;
      const fd = new FormData(this.$refs.contactForm)
      await axios.post('new-complaint', fd , {
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
              this.user_name = '';
              this.phone = '';
              this.email = '';
              this.complaint = '';
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

<style lang="scss" scoped>
textarea{
  height: 100px;
}
  a{
    color: inherit !important;
    text-decoration: none !important;
  }
  .single_contact_box{
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 20px 10px;
        height: 210px;
        .icon_circle{
          width: 60px;
          height: 60px;
          background-color: rgba(245, 245, 245, 1);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }
        .contact_link{
          font-size: 16px;
        }
  }
  .contact_head_image{
    height:50vh;
    width:100%
  }
  .contact_head_image img{
    height:100%;
    width:100%;
  }
  .common_head[data-v-736e9135]::before {
      right: 46%;
      top: 25%;
  }
  .common_head{
    font-size: 16px;
  }
  .social_media{
    a{
      background: #333;
      width: 25px;
      height: 25px;
      padding: 3px;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg{
          color: #fff;
      }
    }
  }
</style>