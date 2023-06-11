<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="active-tap" data-bs-toggle="tab" data-bs-target="#active" type="button" role="tab" aria-controls="active" aria-selected="true">المنتهية ({{  finished_orders.length }})</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="finished-tap" data-bs-toggle="tab" data-bs-target="#finished" type="button" role="tab" aria-controls="finished" aria-selected="false"> القادمة ({{ next_orders.length }}) </button>
  </li>

</ul>
<div class="tab-content" id="myTabContent">
  <!-- المنتهية  -->
  <div class="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tap">
    <section>
      <div class="row mt-3" v-if="finished_orders.length>0">
        <div class="col-md-6" v-for="order in finished_orders" :key="order.id">
          <div class="single_order">
            <div class="d-flex">
              <!-- order image  -->
              <div class="order_image">
                <img :src="order.file" alt="">
              </div>

              <!-- order details  -->
              <div class="order_details">
                <h6 class="fw-bold"> {{ order.title }} </h6>

                <p class="d-flex">
                  <i class="fa-solid fa-clock mainColor"></i>
                  <span class="o-5"> {{ order.time }} </span>
                </p>

                <div class="d-flex justify-content-between">
                  <p class="d-flex ">
                    <i class="fa-solid fa-user mainColor"></i>  
                    <span class="o-5"> {{ order.consultant.name }} </span>
                  </p>

                  <span class="accepted">
                    مقيول
                  </span>
                </div>
              </div>

              
            </div>

            <div class="mt-3">
                <button class="add_rate btn"  > اضف تقييم </button>

              </div>
          </div>
        </div>
      </div>
      <div class="notFound text-center mt-2 mb-2" v-else>
        لا توجد طلبات منتهية الى الان
      </div>
    </section>
  </div>
  <!-- القادمة  -->
  <div class="tab-pane fade" id="finished" role="tabpanel" aria-labelledby="finished-tap">
    <section>
      <div class="row mt-3" v-if="next_orders.length>0">

        <div class="col-md-6" v-for="order in next_orders" :key="order.id">
          <div class="single_order">
            <div class="d-flex">
              <!-- order image  -->
              <div class="order_image">
                <img :src="order.file" alt="">
              </div>

              <!-- order details  -->
              <div class="order_details">
                <h6 class="fw-bold"> {{ order.title }} </h6>

                <p class="d-flex">
                  <i class="fa-solid fa-clock mainColor"></i>
                  <span class="o-5"> {{ order.time }} </span>
                </p>

                <div class="d-flex justify-content-between">
                  <p class="d-flex ">
                    <i class="fa-solid fa-user mainColor"></i>  
                    <span class="o-5"> {{ order.consultant.name }} </span>
                  </p>

                  <span class="waiting">
                    قيد الانتظار
                  </span>
                </div>
              </div>

              
            </div>

            <div class="mt-3">
                <button class="add_rate btn" data-bs-toggle="modal" data-bs-target="#rate" type="button"> اضف تقييم </button>
              </div>
                  <!-- rate modal  -->
                  <div
                      class="modal fade"
                      id="rate"
                      tabindex="-1"
                      aria-labelledby="changePlanLabel"
                      aria-hidden="true"
                      >
                      <div class="modal-dialog modal-dialog-centered" style="max-width:50% !important">
                          <div class="modal-content">
                              <div class="modal-body">
                                  <div class="modal-head border-bottom pt-3 pb-3 px-4">
                                      <h5 class="fw-bold"> أضف تقييم </h5>
                                  </div>

                                  <section class="mt-3 mx-5">
                                    <p>التقييم 5.0</p>
                                    <form >
                                      <div class="form-group mb-2">
                                            <div class="rating justify-content-center">
                                              <input type="radio" id="star1" name="rate" value="5" v-model="rate">
                                              <label for="star1" title="text"></label>
                                              <input type="radio" id="star2" name="rate" value="4" v-model="rate">
                                              <label for="star2" title="text"></label>
                                              <input  type="radio" id="star3" name="rate" value="3" v-model="rate">
                                              <label for="star3" title="text"></label>
                                              <input type="radio" id="star4" name="rate" value="2" v-model="rate">
                                              <label for="star4" title="text"></label>
                                              <input type="radio" id="star5" name="rate" value="1" v-model="rate">
                                              <label for="star5" title="text"></label> 
                                          </div>
                                      </div>

                                      <div class="form-group">
                                        <label for="" class="mb-2"> التقييم </label>
                                        <textarea name="comment" v-model="comment"  placeholder="التقييم" class="form-control" id="" cols="30" rows="10"></textarea>
                                      </div>

                                      <div class="d-flex justify-content-between mt-3 mb-3">
                                          <button  class="custom_bordered" data-bs-dismiss="modal" aria-label="Close" type="button">
                                              الغاء 
                                          </button>

                                          <button class="btn main_btn w-50 mx-2" :disabled="disabled" @click.prevent="rateOrder(order.id)"> اضف </button>

                                      </div>
                                    </form>
                                  </section>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
          </div>
        </div>
      </div>

      <div class="notFound text-center mt-2 mb-2" v-else>
        لا توجد طلبات قادمة الى الان
      </div>
    </section>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      finished_orders : [],
      next_orders : [],
      consultant : {},
      comment : '',
      rate : null,
      disabled : false
    }
  },
  methods:{
    async getOrders(){
      await axios.get('client-orders',{
        headers : {
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res)=>{
        if( res.data.key == 'success' ){
          this.next_orders = res.data.data.next_orders;
        this.finished_orders = res.data.data.finished_orders ;
        }
      })
    },
    // rate order 
    async rateOrder(id){
      this.disabled = true ;
      await axios.patch(`rating-order/${id}?rate=${this.rate}&comment=${this.comment}`, {
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
              location.reload();
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
      } )
    }
  },
  mounted(){
    this.getOrders()
  }
}
</script>

<style scoped lang="scss">
textarea{
  height: 140px;
}
.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
}

.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  cursor: pointer;
  font-size: 35px;
  color: #ccc;
}

.rating:not(:checked) > label:before {
  content: '★';
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}
.custom_bordered{
        border: 1px solid #ccc;
        background-color: transparent;
        border-radius: 4px;
        width: 50%;
    }
  .nav-tabs{
    padding: 0;
  }
  .nav-item{
    width:50%;
    .nav-link{
      width:100%;
      color: rgba(51, 49, 50, 1);
      font-weight: 600;
      &.active{
        border: none;
        border-bottom: 2px solid #c40f3d;
        color: #c40f3d;
        font-weight: bold;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .single_order{
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px;
    .order_image{
      width: 80px;
      height:80px;
      margin-left: 10px;
      border-radius: 8px;
      img{
        width:100%;
        height:100%;
        border-radius: 8px;
      }
    }
  }
  .accepted{
    background-color: rgb(234, 249, 238);
    padding: 3px 10px;
    height: 26px;
    color: rgb(56, 199, 95);
    width: 71px;
    text-align: center;
    border-radius: 3px;
  }
  .waiting{
    background-color:rgba(254, 240, 200, 1);
    padding: 3px 10px;
    height: 26px;
    color:rgba(119, 59, 27, 1);
    width: 90px;
    text-align: center;
    border-radius: 3px;
  }
  .add_rate{
    width: 100%;
    border: 1px solid #c40f3d;
    color: #c40f3d;
    font-weight: 600;
  }
</style>

<style >
  .accepted{
    background-color: rgb(234, 249, 238);
    padding: 3px 10px;
    height: 26px;
    color: rgb(56, 199, 95);
    width: 71px;
    text-align: center;
    border-radius: 3px;
  }
  .waiting{
    background-color:rgba(254, 240, 200, 1);
    padding: 3px 10px;
    height: 26px;
    color:rgba(119, 59, 27, 1);
    width: 90px;
    text-align: center;
    border-radius: 3px;
  }
</style>