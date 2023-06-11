<template>
    <section class="about_vision mt-4 mb-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-3">
                    
                    <!-- single item  -->
                    <div class="mb-4">
                        <h6 class="common_head  fw-bold"> رؤية الشركة </h6>
                        <p class="fw-bold about_desc">كن وكالة تسويق رائدة في المنطقة.</p>
                    </div>

                    <!-- single item  -->
                    <div class="mb-4">
                        <h6 class="common_head  fw-bold"> مهمة الشركة </h6>
                        <p class="fw-bold about_desc">بناء مجتمعات قوية وإنشاء نظام بيئي متبادل المنفعة حيث يمكن لكل منشئ أن ينمو ليصل إلى أعلى مستوياته</p>
                    </div>

                    <!-- single item  -->
                    <div class="mb-4">
                        <h6 class="common_head  fw-bold"> المكاتب / الدول </h6>
                        <p class="fw-bold about_desc">بدأت ConCast في عام 2021 كجزء من مجموعة CHBK في لبنان والآن نحن في الإمارات العربية المتحدة وتونس ومصر وتستمر الرحلة حتى نصل إلى جميع صانعي المحتوى في المنطقة</p>
                    </div>


                    <!-- single item  -->
                    <div class="mb-4">
                        <h6 class="common_head  fw-bold"> فريقنا </h6>
                        <p class="fw-bold about_desc">نحن فريق من مسوقي المحتوى الاستثنائيين ، نقدم ثروة من المعرفة والمهارة ، مصممون على نقل الأعمال إلى المستوى التالي</p>
                    
                        <ul>
                            <li class="mb-2 fw-bold">+40 موظف</li>
                            <li class="mb-2 fw-bold"> 4 مواقع (لبنان , تونس , مصر والإمارات) </li>
                            <li class="mb-2 fw-bold">4 جنسيات</li>
                        </ul>
                    </div>

                </div>


                <div class="col-md-6 mb-3">
                    <section class="d-flex">
                        <img class="leftSide" :src="require('@/assets/imgs/Left Section16.png')" alt="">
                        <img class="rightSide" :src="require('@/assets/imgs/Left Section15.png')" alt="">
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .about_desc{
        font-size: 16px !important;
        color : #333132 !important ;
        font-weight: normal !important;
    }
    .rightSide{
        margin-right: 20px;
        height:470px;
    }   
    .leftSide{
        width: 100%;
        height: 440px;
        margin-top: 50px;
    }
</style>