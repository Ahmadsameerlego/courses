<template>
  <section id="howWork" class="">
    <div class="container">
        <h5 class="text-center fw-bold mb-4"> كيف يعمل أداري </h5>

        <div class="row">
            <div class="col-md-4 mb-2">
                <div class="how_item d-flex flex-column align-items-center justify-content-center">
                    <!-- how image  -->
                    <div class="how_image">
                        <img :src="require('@/assets/imgs/Payment Information-pana.png')" alt="">
                    </div>
                    <!-- how desc  -->
                    <p class="fw-6">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف .</p>
                </div>
            </div>
            <div class="col-md-4 mb-2">
                <div class="how_item d-flex flex-column align-items-center justify-content-center">
                    <!-- how image  -->
                    <div class="how_image">
                        <img :src="require('@/assets/imgs/Completed-pana.png')" alt="">
                    </div>
                    <!-- how desc  -->
                    <p class="fw-6">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف .</p>
                </div>
            </div>
            <div class="col-md-4 mb-2">
                <div class="how_item d-flex flex-column align-items-center justify-content-center">
                    <!-- how image  -->
                    <div class="how_image">
                        <img :src="require('@/assets/imgs/Webinar-pana.png')" alt="">
                    </div>
                    <!-- how desc  -->
                    <p class="fw-6">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف .</p>
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
    .how_item {
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 5px 9px;
        .how_image{
            margin-top: 10px;
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
            font-weight: 600;
        }
    }
    #howWork{
        margin-top: 65px;
        margin-bottom: 65px;
        position: relative;
        &::before{
            position: absolute;
            content: "";
            width: 82%;
            height: 1px;
            bottom: -12%;
            right: 9%;
            background-color: #000;
            margin: auto;
            opacity: .4;
        }
    }
</style>