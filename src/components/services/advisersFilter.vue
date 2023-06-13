<template>
    <section class="filterOperation mt-4">
        <div class="container">
            <p class="common_head  fw-bold"> {{ $t('common.advisors') }} ({{consultant_num}}) </p>

            <!-- search & select  -->
            <div class="row">

                <div class="col-md-8 mb-2" >
                    <form >
                        <div class="form-group position-relative">
                            <input type="text" class="form-control searchInput" :placeholder="$t('common.searchFor')">
                            <i class="fa-solid fa-magnifying-glass searchSvg"></i>
                        </div>
                    </form>
                </div>
                
                
                
                <div class="col-md-4">
                    <div class="form-group position-relative">
                      <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                        v-model="sort_by"
                      >
                        <option selected hidden value="" disabled> {{ $t('common.order') }} </option>
                        <option value="name"> {{ $t('common.name') }} </option>
                        <option value="rating"> {{ $t('common.rate') }} </option>
                        <option value="latest"> {{ $t('common.near') }} </option>
                      </select>
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>


            <section class="operation">
                <div class="row">


                    <!-- start filter operation  -->
                    <div class="col-md-4 mb-3">
                        <div class="filtersHead">
                            {{ $t('common.categorization') }}
                        </div>
                        <div class="accordion" id="accordionExample">
                            <!-- filter one  -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {{ $t('common.exist') }}
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> {{ $t('common.day') }} </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> {{ $t('common.weak') }} </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter">
                                                <label for="" class="filterLabel"> {{ $t('common.month') }} </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- filter two  -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    {{ $t('common.special') }}
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form class="selectedCats">
                                            <div class="form-group position-relative mb-2">
                                                <input type="text" class="form-control searchInput" :placeholder="$t('common.searchFor')">
                                                <i class="fa-solid fa-magnifying-glass searchSvg"></i>
                                            </div>

                                            <div class="form-group mb-2">
                                                <input type="checkbox" class="checkboxFilter"  v-model="selectAll" @click="toggleAllCheckboxes">
                                                <label for="" class="filterLabel" > {{ $t('common.all') }} </label>
                                            </div>

                                            <div class="form-group mb-2" v-for="cat in categories" :key="cat.id">
                                                <input type="checkbox" class="checkboxFilter"  :checked="isSelected(cat.id)" @change="toggleCheckbox(cat.id)"  >
                                                <label for="" class="filterLabel"> {{ cat.name }} </label>
                                            </div>
                                              
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- filter three  -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    {{ $t('common.duration') }}
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group mb-2">
                                                <input type="checkbox" name="minutes" value="15" :checked="isSelected2(15)"  @change="toggleTime(15)"  class="checkboxFilter">
                                                <label for="" class="filterLabel"> {{ $t('common.15h') }} </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" name="minutes" value="30" :checked="isSelected2(30)"  @change="toggleTime(30)" class="checkboxFilter">
                                                <label for="" class="filterLabel"> {{ $t('common.30h') }} </label>
                                            </div>
                                            <div class="form-group mb-2">
                                                <input type="checkbox" name="minutes" value="60" :checked="isSelected2(60)" @change="toggleTime(60)" class="checkboxFilter">
                                                <label for="" class="filterLabel"> {{ $t('common.60h') }} </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- filter four  -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    {{ $t('common.price') }}
                                </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group mb-2">
                                                 <input type="range" v-model="range" min="0" max="5000"  class="slider" id="myRange" style="accent-color: #c40f3d;">
                                                <!-- <label for="" class="filterLabel"> 15 دقيقة </label> -->
                                                  <p> <span id="demo"></span>: {{ $t('common.pound') }}</p>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- filter Five -->
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    {{ $t('common.rate2') }}
                                </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <form >
                                            <div class="form-group mb-2">
                                                 <div class="rating ">
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
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>


                            <div class="filterAction d-flex">
                                <button  class="bordered_btn" @click.prevent="removeSelected">
                                    {{ $t('common.removeCat') }}
                                </button>

                                <button class="btn main_btn" @click.prevent="getConsultant" > {{ $t('common.apply') }}     </button>

                            </div>
                            
                        </div>
                    </div>
                    <!-- end filter operation  -->

                    <!-- cards  -->
                    <div class="col-md-8">
                        <section class="position-relative">
                            <!-- loader  -->
                            <div class="loading" v-if="loader">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>


                            <div class="row " v-if="shownConsultants.length>0">
                            
                            <!-- single adviser  -->
                            <div class="col-md-6 mb-3" v-for="consultant in shownConsultants" :key="consultant.id">

                                <div class="single_adviser position-relative">
                                    <div class="absSign">
                                        <img :src="require('@/assets/imgs/medal-star.png')" alt="">
                                    </div>
                                    <!-- head  -->
                                    <div class="d-flex">
                                        <div class="adviser_image">
                                            <img :src="consultant.image" alt="">
                                        </div>

                                        <div class="adviser_details">
                                            <h6 class="fw-bold">{{ consultant.name }}</h6>
                                            <p class="text-muted fs-5" v-if="consultant.category!==null"> {{ consultant.category.name  }} </p>
                                            <div class="rate">
                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==1||consultant.rate==2||consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==2||consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==3||consultant.rate==4||consultant.rate==5}"></i>
                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==4}||consultant.rate==5"></i>
                                                <i class="fa-solid fa-star text-muted" :class="{rated:consultant.rate==5}"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex mt-3">
                                        <img :src="require('@/assets/imgs/Vector232.png')" class="singImage" alt="">
                                        <p class="fw-bold">

                                            <span v-for="price in consultant.prices" :key="price.id"><span class="mainColor"> {{ price.price }} {{ $t('common.pound') }}</span> / {{ price.minutes }} دقيقة </span> &nbsp;&nbsp;
                                        
                                        </p>
                                    </div>
                                    <div class="d-flex">
                                        <img :src="require('@/assets/imgs/teacher.png')" class="singImage" alt="">
                                        <p class="fw-bold">
                                            <span class="mainColor"> {{ consultant.num_courses }} </span> {{ $t('common.courses') }}
                                        </p>
                                    </div>

                                    <div class="d-flex justify-content-evenly">


                                        <router-link  :to="'/singleAdviser/'+consultant.id" class="bordered_btn fw-bold">
                                            {{ $t('common.showProfile') }}
                                        </router-link> 

                                        

                                        <button class="btn main_btn fw-bold" type="button" data-bs-toggle="modal" :data-bs-target="'#reserveAdviser'+consultant.id"> {{ $t('common.reserveNow') }}     </button>
                                        
                                        <!-- Modal -->
                                        <reserveCourseModalVue :consultant_id="consultant.id" :consultant="consultant" />

                                    </div>
                                </div>
                            </div>

                        </div>
                        </section>
                        

                        <paginate
                            v-model="currentPageP"
                            :page-count="totalPagesP"
                            :click-handler="page => pageClickHandler(page)"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'pagination'"
                            :page-class="'page-item'"    
                            :no-li-surround="true"   
                            v-if="shownConsultants.length>0" 
                            class="mx-auto d-flex justify-content-center mb-3"       
                        >
                        </paginate>


                        <div v-else class="notFound text-center"> {{ $t('common.noAdivsors') }} </div>
                    </div>




                </div>
            </section>
        </div>
    </section>
</template>

<script>
import reserveCourseModalVue from '@/components/advise/reserveCourseModal.vue'
import Paginate from 'vuejs-paginate-next';
import axios from 'axios';
export default {
    data(){
        return{
            categories : [],
            catsSelected : [],
            rate : 0,
            sort_by : '',
            minutes : [] ,
            shownConsultants : [] ,

            currentPageP: 1,
            perPageP: 10,
            totalPagesP: 0,
            loader : false ,
            consultant_num : 0,
            
            range : null
        }
    },
    computed:{
        selectAll: {
            get() {
            return this.catsSelected.length === this.categories.length;
            },
            set(value) {
            if (value) {
                this.catsSelected = this.categories.map((checkbox) => checkbox.id);
            } else {
                this.catsSelected = [];
            }
            },
        },
    },
    methods:{

        removeSelected(){
            this.range = 0 ;
            this.rate = 0 ;
            this.minutes = [];
            this.catsSelected = [];
            this.getConsultant()
        },
        
        
        // get consultant
        async getConsultant(){
            this.loader = true ;
            await axios.get(`get-consultants?category_id=${this.catsSelected}&rate=${this.rate}&sort_by=${this.sort_by}&minutes=${this.minutes}&from_price=0&to_price=${this.range}`)
            .then( (res)=>{
                    this.shownConsultants = res.data.data.data;
                    this.consultant_num = res.data.data.data.length ;
                    this.totalPagesP = res.data.data.pagination.total_pages
                    this.perPageP = res.data.data.pagination.per_page
                    this.currentPageP = res.data.data.pagination.current_page;
                    this.loader = false ;
             } )
        },
        pageClickHandler(page) {
            this.currentPageP = page
            this.getConsultant()
        },
        // get categories 
        async getCategories(){
            await axios.get('categories')
            .then( (res)=>{
                this.categories = res.data.data
            } )
        },
        // select all p1
        toggleCheckbox(checkboxId) {
            if (this.isSelected(checkboxId)) {
            this.catsSelected = this.catsSelected.filter((id) => id !== checkboxId);
            } else {
            this.catsSelected.push(checkboxId);
            }
            this.getConsultant()
        },
        toggleTime(checkboxId){
            if (this.isSelected2(checkboxId)) {
            this.minutes = this.minutes.filter((id) => id !== checkboxId);
            } else {
            this.minutes.push(checkboxId);
            }
            this.getConsultant()
        },
        // select all p2
        isSelected(checkboxId) {
            return this.catsSelected.includes(checkboxId);
        },

        isSelected2(checkboxId) {
            return this.minutes.includes(checkboxId);
        },



    },
    watch:{
        selectAll(){
            this.getConsultant()
        },
        sort_by(){
            this.getConsultant()
        },
        rate(){
            this.getConsultant()
        },
        minutes(){
            this.getConsultant()
        },
        range(){
            this.getConsultant()
        }
    },
    mounted(){
        // get categories 
        this.getCategories();
        this.getConsultant()

        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function() {
        output.innerHTML = this.value;
        }
    },
    components:{
        reserveCourseModalVue,
        Paginate
    },
    created() {
        this.totalPagesP = Math.ceil(this.shownConsultants.length / this.perPageP)
    },
}
</script>

<style >
    .active>.page-link, .page-link.active{
        background: #c40f3d !important;
        border: 1px solid #c40f3d !important;
    }
</style>
<style lang="scss" scoped>
.rate{
    svg.rated{
        color: #ffff00 !important;
    }
}
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
.selectedCats{
    max-height: 250px;
    overflow-y: auto;
}
.loading{
    position: absolute;
    width:100%;
    height: 100%;
    top:0;
    right:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cccccc3a;
}
</style>