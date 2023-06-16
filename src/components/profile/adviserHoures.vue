<template>
  <section class="houresWorked">
    <h6 class="common_head  fw-bold"> ساعات العمل </h6>

    <section class="position-relative mt-3" >

      <section v-if="every_day==false">
        <div class="allTimes" v-if="times.length>0">
          <p class="fw-6" v-for="time in times" :key="time.id" > {{ time.day }} من {{ time.from_time }} الى {{ time.to_time }} </p>
        </div>
        

        <div v-else>
          <p class="text-center fw-6 notFound"> لا توجد ساعات عمل مضافة الى الان </p>
        </div>
      </section>

      <section v-else-if="every_day==true">
        <p v-if="every_day==true">
            كل يوم من {{ from_time }} الى {{ to_time }}
        </p>
      </section>
        


        <button class="btn main_btn detectTime pt-2 pb-2"  data-bs-toggle="modal" data-bs-target="#times" type="button"> تحديد ساعات العمل </button>
        <!-- change plan modal  -->
          <div
              class="modal fade"
              id="times"
              tabindex="-1"
              aria-labelledby="changePlanLabel"
              aria-hidden="true"
              v-if="showTimes"
              >
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                      <div class="modal-body">
                          <div class="modal-head border-bottom pt-3 pb-3 px-4">
                              <h5 class="fw-bold"> تحديد ساعات العمل </h5>
                          </div>
                          <section class="pt-3 pb-3 px-3">
                              <form ref="times" @submit.prevent="updateTimes">
                                  
                                  <div class="row align-items-center">
                                    
                                    <!-- like every day  -->
                                    <div class="col-md-4 mb-2">
                                      <div class="form-check form-switch">
                                        <label class="form-check-label fw-6" for="flexSwitchCheckChecked">مثل كل يوم</label>
                                        <input class="form-check-input" v-model="likeEveryDay" type="checkbox" role="switch" id="flexSwitchCheckChecked" >
                                      </div>
                                    </div>

                                    <div class="col-md-8 mb-2">

                                      <div v-if="dailyTime" class="d-flex justify-content-between align-items-center">
                                        <input type="time" class="form-control" name="from_time">
                                        <span class="fw-6 mx-2">الى</span>
                                        <input type="time" class="form-control" name="to_time">
                                      </div>
                                    </div>
                                  </div>


                                  <!-- normal days  -->
                                  <section v-if="normalDays" class="mt-3">
                                    <div class="row">
                                      
                                      <!-- saturday  -->
                                      <div class="col-md-4 mb-2">
                                        <div class="form-check form-switch" v-if="normalCheck" >
                                          <label class="form-check-label fw-6" for="flexSwitchCheckChecked">السبت</label>
                                          <input class="form-check-input" v-model="normalDay" value="saturday"  name="days[]" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                        </div>
                                      </div>

                                      <div class="col-md-8 mb-2">

                                        <div v-if="normalCheck" class="d-flex justify-content-between align-items-center">
                                          <input type="time" class="form-control" name="from_times[]">
                                          <span class="fw-6 mx-2">الى</span>
                                          <input type="time" class="form-control" name="to_times[]">
                                        </div>

                                      </div>

                                      <!-- sunday  -->
                                      <div class="col-md-4 mb-2">
                                        <div class="form-check form-switch" v-if="sunDaycheck">
                                          <label class="form-check-label fw-6" for="flexSwitchCheckChecked"> الأحد </label>
                                          <input class="form-check-input" v-model="sundayModel" value="sunday"  name="days[]" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                        </div>
                                      </div>

                                      <div class="col-md-8 mb-2">

                                        <div v-if="sunDaycheck" class="d-flex justify-content-between align-items-center">
                                          <input type="time" class="form-control" name="from_times[]">
                                          <span class="fw-6 mx-2">الى</span>
                                          <input type="time" class="form-control" name="to_times[]">
                                        </div>
                                      </div>

                                      <!-- monday  -->
                                      <div class="col-md-4 mb-2">
                                        <div class="form-check form-switch" v-if="moncheck">
                                          <label class="form-check-label fw-6" for="flexSwitchCheckChecked"> الاثنين </label>
                                          <input class="form-check-input" v-model="monModel" value="monday"  name="days[]" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                        </div>
                                      </div>

                                      <div class="col-md-8 mb-2">

                                        <div v-if="moncheck" class="d-flex justify-content-between align-items-center">
                                          <input type="time" class="form-control" name="from_times[]">
                                          <span class="fw-6 mx-2">الى</span>
                                          <input type="time" class="form-control" name="to_times[]">
                                        </div>
                                      </div>
                                      <!-- tuesday  -->
                                      <div class="col-md-4 mb-2" >
                                        <div class="form-check form-switch" v-if="tuesdaycheck">
                                          <label class="form-check-label fw-6" for="flexSwitchCheckChecked"> الثلاثاء </label>
                                          <input class="form-check-input" v-model="tuesdayModel" value="tuesday"  name="days[]" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                        </div>
                                      </div>

                                      <div class="col-md-8 mb-2">

                                        <div v-if="tuesdaycheck" class="d-flex justify-content-between align-items-center">
                                          <input type="time" class="form-control" name="from_times[]">
                                          <span class="fw-6 mx-2">الى</span>
                                          <input type="time" class="form-control" name="to_times[]">
                                        </div>
                                      </div>
                                      <!-- wednesday  -->
                                      <div class="col-md-4 mb-2">
                                        <div class="form-check form-switch" v-if="wednesdaycheck">
                                          <label class="form-check-label fw-6" for="flexSwitchCheckChecked"> الاربعاء </label>
                                          <input class="form-check-input" v-model="wednesdayModel" value="wednesday"  name="days[]" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                        </div>
                                      </div>

                                      <div class="col-md-8 mb-2">

                                        <div v-if="wednesdaycheck" class="d-flex justify-content-between align-items-center">
                                          <input type="time" class="form-control" name="from_times[]">
                                          <span class="fw-6 mx-2">الى</span>
                                          <input type="time" class="form-control" name="to_times[]">
                                        </div>
                                      </div>
                                      <!-- thursday  -->
                                      <div class="col-md-4 mb-2">
                                        <div class="form-check form-switch" v-if="thursdaycheck">
                                          <label class="form-check-label fw-6" for="flexSwitchCheckChecked"> الخميس </label>
                                          <input class="form-check-input" v-model="thursdayModel" value="thursday"  name="days[]" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                        </div>
                                      </div>

                                      <div class="col-md-8 mb-2">

                                        <div v-if="thursdaycheck" class="d-flex justify-content-between align-items-center">
                                          <input type="time" class="form-control" name="from_times[]">
                                          <span class="fw-6 mx-2">الى</span>
                                          <input type="time" class="form-control" name="to_times[]">
                                        </div>
                                      </div>
                                      <!-- friday  -->
                                      <div class="col-md-4 mb-2">
                                        <div class="form-check form-switch" v-if="fridaycheck">
                                          <label class="form-check-label fw-6" for="flexSwitchCheckChecked"> الجمعة </label>
                                          <input class="form-check-input" v-model="fridayModel" value="friday"  name="days[]" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                        </div>
                                      </div>

                                      <div class="col-md-8 mb-2">

                                        <div v-if="fridaycheck" class="d-flex justify-content-between align-items-center">
                                          <input type="time" class="form-control" name="from_times[]">
                                          <span class="fw-6 mx-2">الى</span>
                                          <input type="time" class="form-control" name="to_times[]">
                                        </div>
                                      </div>


                                    </div>
                                  </section>

                                  <div class="d-flex justify-content-between">
                                      <button  class="custom_bordered" data-bs-dismiss="modal" aria-label="Close" type="button">
                                          الغاء 
                                      </button>

                                      <button class="btn main_btn w-50 mx-2" :disabled="disabled"> اضافة </button>

                                  </div>
                              </form>
                          </section>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      dailyTime : false,
      likeEveryDay : false,
      normalDays : true ,
      normalDay : true ,
      normalCheck  : true,
      sundayModel : true ,
      sunDaycheck : true ,
      monModel : true ,
      moncheck : true ,
      tuesdayModel : true,
      tuesdaycheck : true,
      wednesdayModel : true,
      wednesdaycheck : true ,
      thursdayModel: true,
      thursdaycheck : true,   
      fridayModel : true,
      fridaycheck : true,   
      disabled : false,
      showTimes : true
    }
  },
  props:{
    times : Array,
    from_time : String,
    to_time : String,
    every_day: Boolean
  },
  watch:{
    likeEveryDay(){
      if(this.likeEveryDay == true){
        this.dailyTime = true ;
        this.normalDays = false ;
      }else{
        this.dailyTime = false ;
        this.normalDays = true ;
      }

      console.log(this.likeEveryDay)
    },
    normalDay(){
      if( this.normalDay == true ){
        this.normalCheck = true ;
      }else{
        this.normalCheck = false ;
      }
    },
    sundayModel(){
      if( this.sundayModel == true ){
        this.sunDaycheck = true ;
      }else{
        this.sunDaycheck = false ;
      }
    },

    monModel(){
      if( this.monModel == true ){
        this.moncheck = true ;
      }else{
        this.moncheck = false ;
      }
    },
    tuesdayModel(){
      if( this.tuesdayModel == true ){
        this.tuesdaycheck = true ;
      }else{
        this.tuesdaycheck = false ;
      }
    },
    wednesdayModel(){
      if( this.wednesdayModel == true ){
        this.wednesdaycheck = true ;
      }else{
        this.wednesdaycheck = false ;
      }
    },
    thursdayModel(){
      if( this.thursdayModel == true ){
        this.thursdaycheck = true ;
      }else{
        this.thursdaycheck = false ;
      }
    },
    fridayModel(){
      if( this.fridayModel == true ){
        this.fridaycheck = true ;
      }else{
        this.fridaycheck = false ;
      }
    },
    
  },
  methods:{
    async updateTimes(){
      this.disabled = true ;
      const fd = new FormData(this.$refs.times);
      if( this.likeEveryDay == true ){
        fd.append('every_day', 1)
      }else{
        fd.append('every_day', 0);
        if( this.normalDay == true || this.monModel == true || this.sundayModel == true ){
          fd.append('statuses[]', 0);
        }
      }
      await axios.post(`update-consultant-times?_method=put`, fd ,{
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
            setTimeout(() => {
              location.reload()
            }, 2000);
        }else{
            this.$swal({
                icon: 'error',
                title: res.data.msg,
                timer: 2000,
                showConfirmButton: false,
            });
        }

        this.disabled = false ;
      })
    }
  }
}
</script>

<style>
  .notFound{
    background: #ccc;
    padding: 10px;
    margin: auto;
    width: 50%;
    border-radius: 5px;
    color: #c40f3d;
  }
</style>
<style scoped>
    .modal-dialog{
        max-width:40% !important;
    }
    @media( max-width:768px){
        .modal-dialog {
            max-width: 95% !important;
            margin: auto !important;
        }
    }
    .custom_bordered{
        border: 1px solid #ccc;
        background-color: transparent;
        border-radius: 4px;
        width: 50%;
    }
    .detectTime{
        position: absolute;
        top: 0;
        left: 0;
        width: 150px;
    }
    .form-switch .form-check-input {
      width: 2em !important;
      float: left !important;
    }
</style>