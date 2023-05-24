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
                                    <i class="fa-solid fa-paper mx-2"></i>
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

                                    <form >
                                        <section class="d-flex mt-3  justify-content-between">
                                            <div class="d-flex">
                                                <img :src="require('@/assets/imgs/Background (1).png')" class="profile_image" alt="">
                                                <div class="d-flex flex-column mx-3">
                                                    <span class="text-muted mb-1"> اضغط على الصورة لتغيرها </span>
                                                    <span class="text-muted mb-1"> ملحوظة اختر فقط صورة PNG, JPG </span>
                                                    <span class="text-muted mb-3"> ولا يزيد حجمها عن 5MB </span>

                                                    <button type="button" class="btn main_btn w-100 pt-2 pb-2 fw-6"> حذف الصورة الشخصية </button>
                                                </div>
                                            </div>

                                            <div>
                                                <button type="button" class="btn mainColor fw-bold">
                                                    تعديل الملف الشخصي
                                                    <i class="fa-solid fa-edit"></i>
                                                </button>
                                            </div>
                                        </section>


                                        <div class="form_content mt-3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <input
                                                        type="text"
                                                        name=""
                                                        class="form-control mb-3"
                                                        placeholder="الاسم الاول"
                                                    />
                                                </div>
                                                <div class="col-md-6">
                                                    <input
                                                        type="text"
                                                        name=""
                                                        class="form-control mb-3"
                                                        placeholder="اسم العائلة"
                                                    />
                                                </div>
                                                <div class="col-md-6">
                                                     <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                        >
                                                            <option selected hidden disabled>نوع الجنس</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
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
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                     <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                        >
                                                            <option selected hidden disabled>البلد</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                        </select>
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                     <div class="form-group position-relative">
                                                        <select
                                                            class="form-select mb-3"
                                                            aria-label="Default select example"
                                                        >
                                                            <option selected hidden disabled>المدينة</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                        </select>
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <input
                                                        type="tel"
                                                        name=""
                                                        class="form-control mb-3"
                                                        placeholder="رقم الهاتف"
                                                    />
                                                </div>

                                                <div class="col-md-6">
                                                    <input
                                                        type="email"
                                                        name=""
                                                        class="form-control mb-3"
                                                        placeholder="البريد الالكتروني"
                                                    />
                                                </div>
                                                <div class="col-md-12">
                                                    <textarea name="" id="" cols="30" class="form-control" placeholder="نبذه شخصية" rows="15" style="height:70px"></textarea>
                                                </div>
                                            </div>
                                        </div>


                                        <h6 class="common_head mt-4 fw-bold"> التواجد على الشبكة </h6>
                                        
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
                                        </div>

                                        <h6 class="common_head mt-4 fw-bold"> الاهتمامات </h6>
                                        <p class="text-muted"> يمكنك اختيار أكثر من واحدة </p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group mb-2">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <label for="" class="filterLabel"> اعمال </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mb-2">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <label for="" class="filterLabel"> تكنولوجيا المعلومات والبرمجيات </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mb-2">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <label for="" class="filterLabel"> تطوير </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mb-2">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <label for="" class="filterLabel"> التصوير الفوتوغرافي والفيديو </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mb-2">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <label for="" class="filterLabel"> محاسبة مالية </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mb-2">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <label for="" class="filterLabel"> التدريس والأكاديميين </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mb-2">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <label for="" class="filterLabel"> الصحة واللياقة البدنية </label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mb-2">
                                                    <input type="checkbox" class="checkboxFilter">
                                                    <label for="" class="filterLabel"> إنتاجية المكتب </label>
                                                </div>
                                            </div>
                                        </div>


                                        <button class="btn main_btn w-100 mt-3"> حفظ التغييرات </button>
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
import myOrdersTabs from '@/components/profile/myOrdersTabs.vue'
export default {
    components:{
        forgetPasswordProfile,
        myOrdersTabs
    }
}
</script>

<style lang="scss">
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
</style>