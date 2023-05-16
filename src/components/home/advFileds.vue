<template>
    <section id="fields">
        <div class="container">
            <h5 class="text-center fw-bold"> نقوم بتوصيلك مع أفضل المستشارين </h5>
            <p class="text-center o-5"> حدد التخصص الذي يناسب إحتياجاتك </p>

            <div class="row mt-4">
                <div class="col-md-4 mb-4">
                    <!-- single field  -->
                    <div class="single_field d-flex align-items-center pt-3 pb-3 px-3 br-5 bordered_gray">
                        <img :src="require('@/assets/imgs/designtools.png')" alt="" class="field_image">
                        <span class="normal_font"> تصميم الجرافيك </span>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <!-- single field  -->
                    <div class="single_field d-flex align-items-center pt-3 pb-3 px-3 br-5 bordered_gray">
                        <img :src="require('@/assets/imgs/f1.png')" alt="" class="field_image">
                        <span class="normal_font"> تكنولوجيا (IT) </span>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <!-- single field  -->
                    <div class="single_field d-flex align-items-center pt-3 pb-3 px-3 br-5 bordered_gray">
                        <img :src="require('@/assets/imgs/d1.png')" alt="" class="field_image">
                        <span class="normal_font"> قواعد بيانات </span>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <!-- single field  -->
                    <div class="single_field d-flex align-items-center pt-3 pb-3 px-3 br-5 bordered_gray">
                        <img :src="require('@/assets/imgs/document-code.png')" alt="" class="field_image">
                        <span class="normal_font"> برمجة الحاسب </span>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <!-- single field  -->
                    <div class="single_field d-flex align-items-center pt-3 pb-3 px-3 br-5 bordered_gray">
                        <img :src="require('@/assets/imgs/a1.png')" alt="" class="field_image">
                        <span class="normal_font">لغات</span>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <!-- single field  -->
                    <div class="single_field d-flex align-items-center pt-3 pb-3 px-3 br-5 bordered_gray">
                        <img :src="require('@/assets/imgs/element-plus.png')" alt="" class="field_image">
                        <span class="normal_font"> المزيد </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    #fields{
        margin-top: 65px;
        margin-bottom: 50px;
    }
</style>