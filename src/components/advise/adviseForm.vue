<template>
    <section id="adviseForm" class="mt-4">
        <div class="container">

            <div class="imagesForm d-flex justify-content-center">
                <img :src="require('@/assets/imgs/Rectangle 2175.png')" alt="">
                <img :src="require('@/assets/imgs/Rectangle 2176.png')" alt="">
                <img :src="require('@/assets/imgs/Rectangle 2177.png')" alt="">
            </div>

            <section class="adForm mt-3">
                <p class="common_head  fw-6"> طلب استشارة </p>
                <h6 class="fw-bold">تحتاج خدمتنا؟ احجز استشارتك المجانية الآن وسوف نرد عليك في اسرع وقت</h6>

                <form class="mt-2">
                    <input type="text" class="form-control mb-2" placeholder="اسمك" name="" id="">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="tel" class="form-control mb-2" placeholder="رقم الهاتف" name="" id="">
                        </div>
                        <div class="col-md-6">
                            <input type="email" class="form-control mb-2" placeholder="البريد الألكتروني" name="" id="">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control mb-2" placeholder="اسم الشركة" name="" id="">
                        </div>
                        <div class="col-md-6">
                            <div class="form-group position-relative">
                                <select
                                    class="form-select mb-3"
                                    aria-label="Default select example"
                                >
                                    <option selected hidden disabled>نوع الخدمة</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </select>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="form-group position-relative">
                               <input type="text" class="form-control mb-2" placeholder="ارفاق ملف" name="" id="">
                                <i class="fa-solid fa-camera-retro">
                                    <input type="file">
                                </i>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group position-relative">
                               <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="رسالة..."></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end mt-3 mb-4">
                        <button class="btn main_btn w-25"> احجز الان </button>
                    </div>
                </form>
            </section>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    #adviseForm{
        .imagesForm{
            img{
                height: 250px
            }
        }
        .common_head{
            padding-right: 16px;
            padding-left: 16px;
        }
        .common_head::before {
            background-color: #c40f3d  !important;
            right: 0px !important;
        }
        textarea{
            height: 100px !important;
        }
    }
    
</style>