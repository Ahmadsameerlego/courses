<template>
    <section class="filterOperation mt-4">
        <div class="container">
            <p class="common_head  fw-bold"> المستشارين (50) </p>

            <!-- search & select  -->
            <div class="row">
                <div class="col-md-8 mb-2" >
                    <form >
                        <div class="form-group position-relative">
                            <input type="text" class="form-control searchInput" placeholder="ابحث عن ...">
                            <i class="fa-solid fa-magnifying-glass searchSvg"></i>
                        </div>
                    </form>
                </div>

                <div class="col-md-4">
                    <div class="form-group position-relative">
                      <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option selected hidden disabled>ترتيب</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                      </select>
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>


            <section class="operation">
                <div class="row">


                    <!-- filter operation  -->
                    <div class="col-md-4 mb-3">
                        <div class="filtersHead">
                            التصنيفات
                        </div>
                        <div class="accordion" id="accordionExample">
                            <!-- filter one  -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    التواجد
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> اليوم </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> هذا الاسبوع </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> هذا الشهر </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- filter two  -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    التخصصات
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group position-relative mb-2">
                                                <input type="text" class="form-control searchInput" placeholder="ابحث عن ...">
                                                <i class="fa-solid fa-magnifying-glass searchSvg"></i>
                                            </div>

                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> الكل </label>
                                            </div>

                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> خدمات الاستشارات الاستراتيجية </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> شركة وإعداد الأعمال </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> الاستثمار وإدارة الثروات </label>
                                            </div>    
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> إدارة الأعمال </label>
                                            </div>    
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> تنمية مهارات الأبناء </label>
                                            </div>    
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> الصحه والحياة </label>
                                            </div>    
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> العلوم والتكنولوجيا </label>
                                            </div>    
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- filter three  -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    المدة
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> 15 دقيقة </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> 30 دقيقة </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> 60 دقيقة </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- filter four  -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    التكلفة
                                </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group mb-2">
                                                 <input type="range" min="1" max="100" value="50" class="slider" id="myRange" style="    accent-color: #c40f3d;">
                                                <!-- <label for="" class="filterLabel"> 15 دقيقة </label> -->
                                                  <p>جنية: <span id="demo"></span></p>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- filter Five -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    التقييمات
                                </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group mb-2">
                                                 <div class="rating">
                                                    <input type="radio" id="star1" name="rate" value="1">
                                                    <label for="star1" title="text"></label>
                                                    <input type="radio" id="star2" name="rate" value="2">
                                                    <label for="star2" title="text"></label>
                                                    <input checked="" type="radio" id="star3" name="rate" value="3">
                                                    <label for="star3" title="text"></label>
                                                    <input type="radio" id="star4" name="rate" value="4">
                                                    <label for="star4" title="text"></label>
                                                    <input type="radio" id="star5" name="rate" value="5">
                                                    <label for="star5" title="text"></label> 
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>


                            <div class="filterAction d-flex">
                                <button  class="bordered_btn">
                                    مسح التصنيفات
                                </button>

                                <button class="btn main_btn" > تطبيق     </button>

                            </div>
                            
                        </div>
                    </div>

                    <!-- cards  -->
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="single_adviser position-relative">
                                    <div class="absSign">
                                        <img :src="require('@/assets/imgs/medal-star.png')" alt="">
                                    </div>
                                    <!-- head  -->
                                    <div class="d-flex">
                                        <div class="adviser_image">
                                            <img :src="require('@/assets/imgs/image 68 (1).png')" alt="">
                                        </div>

                                        <div class="adviser_details">
                                            <h6 class="fw-bold">الاسم بالكامل</h6>
                                            <p class="text-muted fs-5"> التخصص </p>
                                            <div class="rate">
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex mt-3">
                                        <img :src="require('@/assets/imgs/Vector232.png')" class="singImage" alt="">
                                        <p class="fw-bold">
                                            <span class="mainColor">جنيه 300</span> / 30 دقيقة  <span class="mainColor">جنيه 400</span> / 60 دقيقة
                                        </p>
                                    </div>
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/teacher.png')" class="singImage" alt="">
                                        <p class="fw-bold">
                                            <span class="mainColor">30</span> دورة تدريبية
                                        </p>
                                    </div>

                                    <div class="d-flex justify-content-evenly">
                                        <router-link  to="/singleAdviser/1" class="bordered_btn fw-bold">
                                            عرض الملف الشخصي
                                        </router-link> 

                                        <button class="btn main_btn fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#reserveAdviser"> احجز الان     </button>
                                        
                                        <!-- Modal -->
                                        <reserveCourseModalVue />

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="single_adviser position-relative">
                                    <div class="absSign">
                                        <img :src="require('@/assets/imgs/medal-star.png')" alt="">
                                    </div>
                                    <!-- head  -->
                                    <div class="d-flex">
                                        <div class="adviser_image">
                                            <img :src="require('@/assets/imgs/image 68 (1).png')" alt="">
                                        </div>

                                        <div class="adviser_details">
                                            <h6 class="fw-bold">الاسم بالكامل</h6>
                                            <p class="text-muted fs-5"> التخصص </p>
                                            <div class="rate">
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex mt-3">
                                        <img :src="require('@/assets/imgs/Vector232.png')" class="singImage" alt="">
                                        <p class="fw-bold">
                                            <span class="mainColor">جنيه 300</span> / 30 دقيقة  <span class="mainColor">جنيه 400</span> / 60 دقيقة
                                        </p>
                                    </div>
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/teacher.png')" class="singImage" alt="">
                                        <p class="fw-bold">
                                            <span class="mainColor">30</span> دورة تدريبية
                                        </p>
                                    </div>

                                    <div class="d-flex justify-content-evenly">
                                        <router-link  to="/singleAdviser/1" class="bordered_btn fw-bold">
                                            عرض الملف الشخصي
                                        </router-link> 

                                        <button class="btn main_btn fw-bold" > احجز الان     </button>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="single_adviser position-relative">
                                    <div class="absSign">
                                        <img :src="require('@/assets/imgs/medal-star.png')" alt="">
                                    </div>
                                    <!-- head  -->
                                    <div class="d-flex">
                                        <div class="adviser_image">
                                            <img :src="require('@/assets/imgs/image 68 (1).png')" alt="">
                                        </div>

                                        <div class="adviser_details">
                                            <h6 class="fw-bold">الاسم بالكامل</h6>
                                            <p class="text-muted fs-5"> التخصص </p>
                                            <div class="rate">
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                                <i class="fa-solid fa-star text-muted"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex mt-3">
                                        <img :src="require('@/assets/imgs/Vector232.png')" class="singImage" alt="">
                                        <p class="fw-bold">
                                            <span class="mainColor">جنيه 300</span> / 30 دقيقة  <span class="mainColor">جنيه 400</span> / 60 دقيقة
                                        </p>
                                    </div>
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/teacher.png')" class="singImage" alt="">
                                        <p class="fw-bold">
                                            <span class="mainColor">30</span> دورة تدريبية
                                        </p>
                                    </div>

                                    <div class="d-flex justify-content-evenly">
                                        <router-link  to="/singleAdviser/1" class="bordered_btn fw-bold">
                                            عرض الملف الشخصي
                                        </router-link> 

                                        <button class="btn main_btn fw-bold" > احجز الان     </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </section>
        </div>
    </section>
</template>

<script>
import reserveCourseModalVue from '@/components/advise/reserveCourseModal.vue'
export default {
    mounted(){
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function() {
        output.innerHTML = this.value;
        }
    },
    components:{
        reserveCourseModalVue
    }
}
</script>

<style lang="scss" scoped>
.single_adviser{
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 6px;
    .adviser_image{
        width: 95px;
        height: 95px;
        border-radius: 4px;
        margin: 0 10px;
        img{
            width:100%;
            height:100%;
        }
    }
}
.common_head::before {
    background-color: #c40f3d  !important;
    right: 0px !important;
}
.common_head{
    padding-right: 16px;
    padding-left: 16px;
}
.searchInput{
    background:rgb(204 204 204 / 19%) !important;
    height: 40px !important;
    padding: 0 45px !important;
    
}
.searchSvg{
right: 15px !important;
}
.form-select{
    height: 40px !important;

}
.accordion-button::after,.accordion-button:not(.collapsed)::after{
    left : 8px !important
}

.accordion-item{
    border: 1px solid #ccc !important;
}
.filtersHead{
    border: 1px solid #ccc;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    height: 40px;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 10px;
}
.filterAction{
    border: 1px solid #ccc;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    height: 64px;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
    
}
.checkboxFilter{
    accent-color: #c40f3d;
    font-size: 16px;
    width: 15px;
    height: 16px;
}
.checkboxFilter:checked + label{
    color: #c40f3d;
}
.filterLabel{
    margin:  0 7px;
    font-size: 16px;
    font-weight: 600;
}
.accordion-button:not(.collapsed){
    color:#333 !important
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
.singImage{
    width: 20px;
    height:20px;
    margin: 0 6px;
}
.absSign{
    position: absolute;
    left: 10px;
}
</style>