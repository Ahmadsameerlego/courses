<template>
    <section class="profile_form mt-4 mb-4">
        <div class="container">
            <div class="row">

                <div class="col-md-4 mb-3">
                    <!-- tabs   -->
                    <section class="tabs">
                        <ul class="nav nav-tabs p-0" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                    <i class="fa-solid fa-user mx-2"></i>
                                    البيانات الشخصية
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                    <i class="fa-solid fa-clipboard-list mx-2"></i>
                                    طلباتي
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                    <i class="fa-solid fa-lock mx-2"></i>
                                    تغيير كلمة المرور
                                </button>
                            </li>
                        </ul>
                    </section>
                </div>

                <div class="col-md-8">
                    <section class="tabs_content">
                        <div class="tab-content" id="myTabContent">
                            <!-- profile form  -->
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <section id="profile_form">
                                    <h6 class="common_head  fw-bold"> معلومات شخصية </h6>

                                    <form ref="updateProfile" @submit.prevent="updateProfile" >
                                        <section class="d-flex mt-3  justify-content-between">
                                            <div class="d-flex">
                                                <img :src="user.image" ref="userProfileImage" class="profile_image" alt="">
                                                <div class="d-flex flex-column mx-3">
                                                    <span class="text-muted mb-1"> اضغط على الصورة لتغيرها </span>
                                                    <span class="text-muted mb-1"> ملحوظة اختر فقط صورة PNG, JPG </span>
                                                    <span class="text-muted mb-3"> ولا يزيد حجمها عن 5MB </span>

                                                    <button type="button" class="btn main_btn w-100 pt-2 pb-2 fw-6 position-relative">
                                                         تعديل الصورة الشخصية 
                                                         <input type="file" class="profileImage2" name="image" accept="image/png, image/jpg"  @change="uploadImage" >
                                                    </button>
                                                </div>
                                            </div>

                                            <div>
                                                <button type="button" class="btn mainColor fw-bold" @click="removeDisabled">
                                                    تعديل الملف الشخصي
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
                                                        placeholder="الاسم"
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
                                                            <option selected hidden value="" disabled>نوع الجنس</option>
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
                                                            placeholder="تاريخ الميلاد"
                                                            
                                                            
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
                                                            placeholder="اختر المدينة"
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
                                                            class="list-group boxShadow"
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
                                                            لا توجد مدينة
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
                                                            placeholder="رقم الجوال"
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
                                                        placeholder="البريد الالكتروني"
                                                        :disabled="disabled"
                                                    />
                                                </div>
                                                <!-- <div class="col-md-12">
                                                    <textarea name="" id="" cols="30" class="form-control" placeholder="نبذه شخصية" rows="15" style="height:70px"></textarea>
                                                </div> -->
                                            </div>
                                        </div>


                                        <!-- <h6 class="common_head mt-4 fw-bold"> التواجد على الشبكة </h6>
                                        
                                        <div class="row mt-2">
                                            <div class="col-md-6">
                                                <input
                                                    type="text"
                                                    name=""
                                                    class="form-control mb-3"
                                                    placeholder="linkedin"
                                                />
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    type="text"
                                                    name=""
                                                    class="form-control mb-3"
                                                    placeholder="Behance"
                                                />
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    type="text"
                                                    name=""
                                                    class="form-control mb-3"
                                                    placeholder="facebook"
                                                />
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    type="text"
                                                    name=""
                                                    class="form-control mb-3"
                                                    placeholder="GitHub"
                                                />
                                            </div>
                                        </div> -->

                                        <h6 class="common_head mt-4 fw-bold"> الاهتمامات </h6>
                                        <p class="text-muted"> يمكنك اختيار أكثر من واحدة </p>
                                        <div class="row">

                                            <div class="col-md-6" v-for="cat,i in categories" :key="cat.id">
                                                <div class="form-group mb-2">
                                                    <input :disabled="disabled" type="checkbox" class="checkboxFilter" :value="cat.id" v-model="selectedCats" :checked="myInters[i]" >
                                                    <label for="" class="filterLabel"> {{ cat.name }} </label>
                                                </div>
                                            </div>
                                            
                                        </div>


                                        <button class="btn main_btn w-100 mt-3" :disabled="disabledButton" > حفظ التغييرات </button>
                                    </form>

                                </section>
                            </div>

                            <!-- my orders  -->
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <myOrdersTabs />
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
</template>

<script>
import forgetPasswordProfile from '@/components/auth/forgetPasswordProfile.vue';
import myOrdersTabs from '@/components/profile/myOrdersTabs.vue';
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
            country : null ,
            country_name : 'اختر الدولة',
            cities: [],
            regionQuery: "",
            showList1: false,
            city_id: "",
            selectedCats : [],
            imageObject : {}

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
        },
        myInters(){
            console.log(this.myInters)
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

        // remove inputs disablity 
        removeDisabled(){
            this.disabled = false
        },
        // change profile image 
        uploadImage(e){
            const file = e.target.files[0];
            this.$refs.userProfileImage.src = URL.createObjectURL(file);
            // this.image = URL.createObjectURL(file); 
            this.imageObject = URL.createObjectURL(file);
            console.log(this.imageObject)
        },

        // get user info 
        async getUserInfo(){
            await axios.get('profile', {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.user = res.data.data;
                    // this.country = res.data.data.country.name;
                    if( res.data.data.city !== null && res.data.data.city){
                        this.regionQuery = res.data.data.city.name;
                        this.city_id = res.data.data.city.id;
                    }

                    if( res.data.data.country !== null && res.data.data.country){
                        this.country_name = res.data.data.country.name;
                        this.country = res.data.data.country;
                    }
                    this.myInters = res.data.data.interests

                    
                }
            } )
        },


        // update profile 
        async updateProfile(){
            this.disabledButton = true ;
            const fd = new FormData(this.$refs.updateProfile);
            fd.append('city_id', this.city_id);
            for( let i = 0 ; i < this.selectedCats.length ; i++ ){
                fd.append('category_ids[]', this.selectedCats[i] );
            }
            console.log(this.imageObject)
            await axios.post('update-profile?_method=put', fd , {
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
                    this.getUserInfo()
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
                this.categories = res.data.data;
                setTimeout(() => {
                    // get profile 
                    this.getUserInfo();
                }, 10);
            } )
        },
    },
    components:{
        forgetPasswordProfile,
        myOrdersTabs
    },
    created(){
        // get all interst 
        this.getCategories();
    },
    mounted(){
        

        

        // get countries 
        this.getCountries()

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
</style>