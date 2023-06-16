<template>
    <section class="profile_form mt-4 mb-4">
        <div class="container">
            <div class="row">

                <div class="col-md-4 mb-3">
                    <!-- tabs   -->
                    <section class="tabs">
                        <ul class="nav nav-tabs p-0" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="dashboard-tab" data-bs-toggle="tab" data-bs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">
                                    <i class="fa-solid fa-table-cells mx-2"></i>
                                    {{ $t('nav.dashboard') }}
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">
                                    <i class="fa-solid fa-user mx-2"></i>
                                    {{ $t('nav.personalInfo') }}
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                    <i class="fa-solid fa-clipboard-list mx-2"></i>
                                    {{ $t('nav.orders') }}
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="courses-tab" data-bs-toggle="tab" data-bs-target="#courses" type="button" role="tab" aria-controls="courses" aria-selected="false">
                                    <i class="fa-solid fa-book-open mx-2"></i>
                                    {{ $t('nav.my_courses') }}
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Pills-tab" data-bs-toggle="tab" data-bs-target="#Pills" type="button" role="tab" aria-controls="Pills" aria-selected="false">
                                    <i class="fa-solid fa-file-circle-check mx-2"></i>
                                    {{ $t('nav.pills2') }}
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="Hours-tab" data-bs-toggle="tab" data-bs-target="#Hours" type="button" role="tab" aria-controls="Hours" aria-selected="false">
                                    
                                    <i class="fa-solid fa-calendar-check mx-2"></i>
                                    {{ $t('nav.hours') }}
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                    <i class="fa-solid fa-lock mx-2"></i>
                                    {{ $t('nav.changePass') }}
                                </button>
                            </li>
                        </ul>
                    </section>
                </div>

                <div class="col-md-8">
                    <section class="tabs_content">
                        <div class="tab-content" id="myTabContent">
                            <!-- dashboard  -->
                            <div class="tab-pane fade show active" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <advisorDashboard />
                            </div>

                            <!-- profile form  -->
                            <div class="tab-pane fade show" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <section id="profile_form">
                                    <h6 class="common_head  fw-bold"> {{ $t('nav.personalInfo') }} </h6>

                                    <form ref="adviserProfile" @submit.prevent="updateProfile">
                                        <section class="profile_head d-flex mt-3  justify-content-between">
                                            <div class="d-flex">
                                                <img :src="user.image" ref="userProfileImage" class="profile_image" alt="">
                                                <div class="d-flex flex-column mx-3">
                                                    <span class="text-muted mb-1"> {{ $t('profile.clickImage') }} </span>
                                                    <span class="text-muted mb-1"> {{ $t('profile.imageType') }} </span>
                                                    <span class="text-muted mb-3"> {{ $t('profile.imageSize') }} </span>

                                                    <button type="button" class="btn main_btn w-100 pt-2 pb-2 fw-6 position-relative">
                                                         {{ $t('profile.changeImage') }} 
                                                         <input type="file" name="image" accept="image/png, image/jpg" class="profileImage2" @change="uploadImage">
                                                    </button>
                                                </div>
                                            </div>

                                            <div>
                                                <button type="button" class="btn mainColor fw-bold" @click="removeDisabled">
                                                    {{ $t('profile.editProfile') }}
                                                    <i class="fa-solid fa-edit"></i>
                                                </button>
                                            </div>
                                        </section>

                                        <!-- main form  -->
                                        <div class="form_content mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        :value="user.name"
                                                        class="form-control mb-3"
                                                        :placeholder="$t('home.name')"
                                                        :disabled="disabled"
                                                    />
                                                </div>
                                                <!-- <div class="col-md-6">
                                                    <input
                                                        type="text"
                                                        name=""
                                                        class="form-control mb-3"
                                                        placeholder="اسم العائلة"
                                                        :disabled="disabled"
                                                    />
                                                </div> -->
                                                <div class="col-md-6">
                                                     <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                            :disabled="disabled"
                                                            :value="user.gender"
                                                            name="gender"
                                                        >
                                                            <option selected hidden value="" disabled>{{ $t('profile.gender') }}</option>
                                                            <option value="male">male</option>
                                                            <option value="female">female</option>
                                                        </select>
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                     <div class="form-group position-relative">
                                                        <input
                                                            type="text"
                                                            name=""
                                                            class="form-control mb-3"
                                                            :placeholder="$t('profile.date')"
                                                            
                                                            
                                                        />
                                                        <i class="fa-solid fa-calendar"></i>
                                                        <input type="date"  name="birth_date" class="birth_day form-control" :disabled="disabled" :value="user.birth_date" style="position:absolute;width:100%;height:100%;top:0;right:0">
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                     <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                            :disabled="disabled"
                                                            
                                                            name="country_id"
                                                        >
                                                            <option value="" selected hidden disabled > {{ country_name }} </option>
                                                            <option :value="country.id" v-for="country in countries" :key="country.id" > {{ country.name }} </option>
                                                            
                                                        </select>
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                     <!-- <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                            :disabled="disabled"
                                                            :value="user.city"
                                                            name="city"
                                                        >
                                                            <option selected hidden disabled value="">المدينة</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                        </select>
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div> -->
                                                    <div class="position-relative w-100">
                                                        <input
                                                            type="text"
                                                            v-model="regionQuery"
                                                            name="city_id"
                                                            :placeholder="$t('profile.chooseCity')"
                                                            class="inp-spe-tele form-control mb-2"
                                                            @input="getCities()"
                                                            @focus="showList"
                                                            :disabled="disabled"
                                                        />

                                                        <div
                                                        v-if="showList1"
                                                        style="
                                                            position: absolute;
                                                            width: 100%;
                                                            height: 200px;
                                                            overflow-y: auto;
                                                            top: 50px;
                                                            right:0;
                                                            z-index: 999;
                                                        "
                                                        >
                                                        <ul
                                                            class="list-group"
                                                            style="z-index: 9999;padding:0"
                                                            v-if="filteredRegions.length > 0"
                                                        >
                                                            <li
                                                            class="list-group-item"
                                                            v-for="(item, index) in filteredRegions"
                                                            :key="item.id"
                                                            >
                                                            <span
                                                                @click="
                                                                setNewValueForRegion(item.name, item.id)
                                                                "
                                                                style="cursor: pointer"
                                                            >
                                                                {{ index + 1 }}.{{ item.name }}
                                                            </span>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group" v-else>
                                                            <li class="list-group-item">
                                                            {{ $t('profile.noCity') }}
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <section class="position-relative">
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            :value="user.phone"
                                                            class="form-control mb-3"
                                                            :placeholder="$t('profile.phone')"
                                                            :disabled="disabled"
                                                        />
                                                        <div class="form-group countries">
                                                            <select
                                                                class="form-select mb-3"
                                                                aria-label="Default select example"
                                                                name="country_code"
                                                                :disabled="disabled"
                                                            >
                                                            <option selected hidden disabled>
                                                                {{user.country_code}}{{user.key}}
                                                            </option>
                                                            <option v-for="country in countries" :key="country.id" :value="country.key"> {{ country.key }}{{ country.name }} </option>
                                                            </select>
                                                            <i class="fa-solid fa-chevron-down"></i>
                                                        </div>
                                                    </section>
                                                </div>

                                                <div class="col-md-6">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        :value="user.email"
                                                        class="form-control mb-3"
                                                        :placeholder="$t('home.email')"
                                                        :disabled="disabled"
                                                    />
                                                </div>
                                                <div class="col-md-6">
                                                     <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                            :disabled="disabled"
                                                            :value="university_id"
                                                            name="university_id"
                                                        >
                                                            <option selected hidden disabled value=""> {{ $t('profile.university') }} </option>
                                                            <option value="1" > القاهرة </option>
                                                            
                                                        </select>
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                     <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                            :disabled="disabled"
                                                            
                                                            name="category_id"
                                                        >
                                                            <option selected hidden disabled value=""> {{ cat_name }} </option>
                                                            <option :value="cat.id" v-for="cat in categories" :key="cat.id"> {{ cat.name }}  </option>
                                                            
                                                        </select>
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <textarea name="bio" id="" cols="30" class="form-control" v-model="bio" :disabled="disabled" :placeholder="$t('profile.bio')" rows="15" style="height:70px"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- معدل الاسعار  -->
                                        <h6 class="common_head mt-4 fw-bold"> {{ $t('profile.priceRate') }} </h6>
                                        <p> {{ $t('profile.pricePlaceHolder') }} </p>
                                        <div class="row mt-2">

                                            <!-- <div class="col-md-4" v-for="price in prices" :key="price.id">
                                                <input
                                                    type="text"
                                                    :name="'prices['+price.minutes+']'"
                                                    :value="price.price"
                                                    class="form-control mb-3"
                                                    :placeholder="price.minutes +'دقيقة'"
                                                    :disabled="disabled"
                                                />
                                            </div> -->

                                            <div class="col-md-4" >
                                                <input
                                                    type="text"
                                                    name="prices[15]"
                                                    v-model="price1"
                                                    class="form-control mb-3"
                                                    :placeholder="$t('common.15h')"
                                                    :disabled="disabled"
                                                />
                                            </div>

                                            <div class="col-md-4" >
                                                <input
                                                    type="text"
                                                    name="prices[30]"
                                                    v-model="price2"
                                                    class="form-control mb-3"
                                                    :placeholder="$t('common.30h')"
                                                    :disabled="disabled"
                                                />
                                            </div>

                                            <div class="col-md-4" >
                                                <input
                                                    type="text"
                                                    name="prices[60]"
                                                    v-model="price3"
                                                    class="form-control mb-3"
                                                    :placeholder="$t('common.60h')"
                                                    :disabled="disabled"
                                                />
                                            </div>

                                            
                                        </div>


                                        <h6 class="common_head mt-4 fw-bold"> {{ $t('profile.networkExist') }} </h6>
                                        
                                        <div class="row mt-2">
                                            <!-- <div class="col-md-6" v-for="social in socials" :key="social">
                                                <input
                                                    type="url"
                                                    :name="'socials['+social.name+']'"
                                                    class="form-control mb-3"
                                                    :value="social.url"
                                                    :placeholder="social.name"
                                                    :disabled="disabled"
                                                />
                                            </div> -->
                                            <div class="col-md-6">
                                                <input
                                                    type="url"
                                                    name="socials[linkedIn]"
                                                    class="form-control mb-3"
                                                    placeholder="linkedIn"
                                                    v-model="linkedIn"
                                                    :disabled="disabled"
                                                />
                                            </div>

                                            <div class="col-md-6">
                                                <input
                                                    type="url"
                                                    name="socials[Behance]"
                                                    class="form-control mb-3"
                                                    placeholder="Behance"
                                                    v-model="Behance"
                                                    :disabled="disabled"
                                                />
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    type="url"
                                                    name="socials[facebook]"
                                                    class="form-control mb-3"
                                                    placeholder="facebook"
                                                    v-model="facebook"
                                                    :disabled="disabled"
                                                />
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    type="url"
                                                    name="socials[GitHub]"
                                                    class="form-control mb-3"
                                                    placeholder="GitHub"
                                                    v-model="GitHub"
                                                    :disabled="disabled"
                                                />
                                            </div>
                                        </div>

                                        <!-- <h6 class="common_head mt-4 fw-bold"> الاهتمامات </h6>
                                        <p class="text-muted"> يمكنك اختيار أكثر من واحدة </p>
                                        <div class="row">

                                            <div class="col-md-6" v-for="cat,i in categories" :key="cat.id">
                                                <div class="form-group mb-2">
                                                    <input :disabled="disabled" type="checkbox" class="checkboxFilter" :checked="myInters[i]" >
                                                    <label for="" class="filterLabel"> {{ cat.name }} </label>
                                                </div>
                                            </div>
                                            
                                        </div> -->


                                        <button class="btn main_btn w-100 mt-3" :disabled="disabledButton" > {{ $t('profile.saveChanges') }} </button>
                                    </form>

                                </section>

                                
                            </div>

                            <!-- my orders  -->
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <myOrdersTabs />
                            </div>

                            <!-- my courses  -->
                            <div class="tab-pane fade" id="courses" role="tabpanel" aria-labelledby="courses-tab">
                                <advisorCourses  />
                            </div>


                            <!-- my Pills  -->
                            <div class="tab-pane fade" id="Pills" role="tabpanel" aria-labelledby="Pills-tab">
                                <adviserPillsVue />
                            </div>
                            <!-- houres worked  -->
                            <div class="tab-pane fade" id="Hours" role="tabpanel" aria-labelledby="Hours-tab">
                                <adviserHouresVue :times="times" :every_day="every_day" :from_time="from_time" :to_time="to_time" />
                            </div>


                            <!-- forget password  -->
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <forgetPasswordProfile />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>

      <loader v-if="loader"/>

</template>

<script>
import forgetPasswordProfile from '@/components/auth/forgetPasswordProfile.vue';
import myOrdersTabs from '@/components/profile/myOrdersTabs.vue';
import advisorDashboard from '@/components/profile/advisorDashboard.vue';
import adviserPillsVue from '@/components/profile/adviserPills.vue';
import adviserHouresVue from './adviserHoures.vue';
import advisorCourses  from './advisorCourses.vue';

import loader from '@/components/layout/pageLoader.vue'

import axios from 'axios';
export default {
    data(){
        return{
            disabled : true,
            user : {},
            categories : [],
            myInters : [],
            countries : [],
            disabledButton : false,
            image : '',
            cities: [],
            regionQuery: "",
            showList1: false,
            city_id: "",
            country : null ,
            university_id : '',
            category_id : '',
            user_id : null,
            prices : [],
            socials : [],
            university : {},
            category : {},
            times : [],
            country_name : 'اختر الدولة',
            cat_name : 'التخصص',
            bio : '',
            price1 : null,
            price2 : null,
            price3 : null,
            linkedIn : '',
            GitHub : '',
            facebook : '',
            Behance: '',
            loader : true,
            every_day : null,
            to_time : '',
            from_time : ''

        }
    },
    computed:{
        filteredRegions() {
            if (!Array.isArray(this.cities)) {
                console.error("this.cities is not an array");
                return [];
            }
            return this.cities.filter((region) => {
                return region.name
                .toLowerCase()
                .includes(this.regionQuery.toLowerCase());
            });
        },
    },
    watch:{
        regionQuery() {
            if (this.regionQuery == "") {
                this.showList1 = false;
            }
        }
    },
    methods:{
        checkedInterests(cat) {
            return this.myInters.includes(cat.id);
        },
        // get countries 
        async getCountries(){
        await axios.get('countries')
        .then( (res)=>{
            this.countries = res.data.data
        } )
        },
        // remove inputs disablity 
        removeDisabled(){
            this.disabled = false
        },
        // change profile image 
        uploadImage(e){
            const file = e.target.files[0];
            this.$refs.userProfileImage.src = URL.createObjectURL(file);
            // this.image = URL.createObjectURL(file); 
        },

        // get user info 
        async getUserInfo(){
            await axios.get(`consultant-profile/${this.user_id}`, {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.user = res.data.data;
                    this.bio = res.data.data.bio;
                    this.prices = res.data.data.prices;

                    for( let i = 0; i < this.prices.length ; i++ ){
                        this.price1 = this.prices[0].price;
                        this.price2 = this.prices[1].price;
                        this.price3 = this.prices[2].price;
                    }
                    this.socials = res.data.data.socials;
                    for( let i = 0; i < this.socials.length ; i++ ){
                        this.linkedIn = this.socials[0].url;
                        this.Behance = this.socials[1].url;
                        this.facebook = this.socials[2].url;
                        this.GitHub = this.socials[3].url;
                    }

                    this.university = res.data.data.university;
                    this.times = res.data.data.times;
                    this.to_time = res.data.data.to_time; 
                    this.from_time = res.data.data.from_time; 
                    this.every_day = res.data.data.every_day; 


                    if( res.data.data.category !== null && res.data.data.category){
                        this.cat_name = res.data.data.category.name;
                        this.category_id = res.data.data.category.id;
                    }

                    if( res.data.data.city !== null && res.data.data.city){
                        this.regionQuery = res.data.data.city.name;
                        this.city_id = res.data.data.city.id;
                    }

                    if( res.data.data.country !== null && res.data.data.country){
                        this.country_name = res.data.data.country.name;
                        this.country = res.data.data.country;
                    }

                    // this.country = res.data.data.country.name;
                    
                    // if( res.data.data.city !== null ){
                    //     this.regionQuery = res.data.data.city.name;
                    // }

                    // if( res.data.data.country !== null ){
                    //     this.country = res.data.data.country.name;
                    // }
                    // this.myInters = res.data.data.interests

                    this.loader  = false ;

                    
                }
            } )
        },


        // update profile 
        async updateProfile(){
            this.disabledButton = true ;
            const fd = new FormData(this.$refs.adviserProfile);
             fd.append('city_id', this.city_id);
            // fd.append('image', this.$refs.userProfileImage.src)
            await axios.post('update-consultant-profile?_method=put', fd , {
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
                    this.getUserInfo();
                }else{
                    this.$swal({
                        icon: 'error',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,
                    });
                }

                this.disabledButton = false ;
            } )
        },

        // get all intersts 
        async getCategories(){
            await axios.get('categories')
            .then( (res)=>{
                this.categories = res.data.data
            } )
        },
        // get cities 
        async getCity(){
            await axios.get('cities')
            .then( (res)=>{
                this.cities = res.data.data
            } )
        },
        // filter city
        setNewValueForRegion(value1, id) {
        this.regionQuery = value1;
        this.city_id = id;
        if (this.regionQuery == value1) {
            this.showList1 = false;
        }
        console.log(this.city_id)
        },
        async getCities() {
        this.showList1 = true;
        },
        // show list of cities
        showList() {
        this.showList1 = true;
        },
    },
    components:{
        forgetPasswordProfile,
        myOrdersTabs,
        advisorDashboard,
        adviserPillsVue,
        adviserHouresVue,
        advisorCourses,
        loader
    },
    mounted(){
        this.user_id = JSON.parse(localStorage.getItem('user')).id
        // get profile 
        this.getUserInfo();

        // get all interst 
        this.getCategories();

        // get countries 
        this.getCountries();
        
        this.getCity();

    }
}
</script>

<style lang="scss" scoped>
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
    font-size: 14px;
    font-weight: 600;
}
    #myTab{
        display: flex;
        flex-direction: column;
        background: #F4F4F4;
        .nav-link{
                margin: 20px 10px;
                padding: 12px;
                font-weight: 600;
                color: #333;
                font-size: 18px;
            &.active{
                background: #c40f3d;
                margin: 20px 10px;
                padding: 12px;
                width:94%;
                border-radius: 0;
                display: flex;
                color: #fff;
            }
        }
    }

    .common_head{
        padding: 0 17px;
    }
    .common_head::before {
        background-color: #c40f3d;
        right: 0%;
    }
    .profile_image{
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
    .profileImage2{
        position: absolute;
        width:100%;
        height:100%;
        top: 0;
        left: 0;
        opacity: 0;
    }
    .countries{
  position: absolute;
  left:0;
  top: 0;
  width:120px;
  height:100%;
}

@media( max-width:768px ){
    .profile_head{
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
    }
    .profile_image[data-v-1a1ee608] {
        width: 100px;
        height: 100px;
    }
}
</style>