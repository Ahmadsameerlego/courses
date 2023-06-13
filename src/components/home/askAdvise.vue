<template>
  <section id="ask">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <section class="ask_details position-relative">
            <!-- free  absolute -->
            <div class="free_circle whiteColor"> {{ $t('home.free') }} </div>
            <!-- title  -->
            <div class="d-flex justify-content-end pt-5">
              <h5 class="fw-bold title_head whiteColor"> {{ $t('home.free_desc') }} </h5>
            </div>
            <!-- image  -->
            <div class="free_image">
              <img :src="require('@/assets/imgs/pexels-andrea-piacquadio-3978564 3 (2).png')" alt="">
            </div>

            <!-- work together  -->
            <div class="work_together d-flex align-items-center">
              <div class="px-3">
                <p class="fw-6 mb-0 whiteColor text-start"> {{ $t('home.workTogether') }} </p>
                <p class="fw-6 o-5 whiteColor"> {{ $t('home.lorem') }}  </p>
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
              {{ $t('home.formTitle') }}
            </h5>
            <p class="o-5 mb-3 ask_form_desc">
              {{ $t('home.lorem') }}
            </p>

            <form @submit.prevent="contactUS" ref="contactForm">
              <input type="text" name="user_name" v-model="user_name" class="form-control mb-3" :placeholder="$t('home.name')">
              <input type="tel" name="phone" v-model="phone" class="form-control mb-3" :placeholder="$t('home.phone')">  
              <input type="email" name="email" v-model="email" class="form-control mb-4" :placeholder="$t('home.email')">
              <textarea name="complaint" v-model="complaint" :placeholder="$t('home.advise')" class="form-control mb-2" style="height:70px" id="" cols="30" rows="10"></textarea>  
              <button class="main_btn ask_btn w-100 pt-3 pb-3 btn" :disabled="disabled"> {{ $t('home.askAdvise') }} </button>
            </form>
          </div>
        </div>
    </div>
    </div>

    <!-- absolute bar  -->
    <div class="abs_bar">
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