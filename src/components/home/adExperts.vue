<template>
    <section id="experts">
        <div class="container">
            <h5 class="fw-bold whiteColor text-center">خبراء اداري</h5>
            <p class="text-center whiteColor w-50 o-5 mx-auto">خبراؤنا متخصصون و مؤهلون لتقديم العلم والمعرفة المكتسبة من تجارب فريدة والتي من شأنها أن تساعدك في تحقيق أهدافك في العمل والحياة</p>

            <!-- all experts  -->
            <div class="mt-5 d-flex align-items-center justify-content-between">
                <!-- single expert  -->
                <div class="single_expert d-flex flex-column align-items-center justify-content-centerr" >
                    <!-- expert image -->
                    <div class="expert_image">
                        <img :src="require('@/assets/imgs/Background.png')" alt="">
                    </div>
                    <h6 class="fw-bold whiteColor mt-3 mb-2">سارة الرحمن يوسف</h6>
                    <p class="whiteColor o-5">تصميم جرافيك</p>
                </div>

                <!-- single expert  -->
                <div class="single_expert d-flex flex-column align-items-center justify-content-centerr" >
                    <!-- expert image -->
                    <div class="expert_image">
                        <img :src="require('@/assets/imgs/Background (1).png')" alt="">
                    </div>
                    <h6 class="fw-bold whiteColor mt-3 mb-2">سارة الرحمن يوسف</h6>
                    <p class="whiteColor o-5">تصميم جرافيك</p>
                </div>
                <!-- single expert  -->
                <div class="single_expert d-flex flex-column align-items-center justify-content-centerr" >
                    <!-- expert image -->
                    <div class="expert_image">
                        <img :src="require('@/assets/imgs/Background (2).png')" alt="">
                    </div>
                    <h6 class="fw-bold whiteColor mt-3 mb-2">سارة الرحمن يوسف</h6>
                    <p class="whiteColor o-5">تصميم جرافيك</p>
                </div>
                <!-- single expert  -->
                <div class="single_expert d-flex flex-column align-items-center justify-content-centerr" >
                    <!-- expert image -->
                    <div class="expert_image">
                        <img :src="require('@/assets/imgs/Background (3).png')" alt="">
                    </div>
                    <h6 class="fw-bold whiteColor mt-3 mb-2">سارة الرحمن يوسف</h6>
                    <p class="whiteColor o-5">تصميم جرافيك</p>
                </div>
                <!-- single expert  -->
                <div class="single_expert d-flex flex-column align-items-center justify-content-centerr" >
                    <!-- expert image -->
                    <div class="expert_image">
                        <img :src="require('@/assets/imgs/Background (4).png')" alt="">
                    </div>
                    <h6 class="fw-bold whiteColor mt-3 mb-2">سارة الرحمن يوسف</h6>
                    <p class="whiteColor o-5">تصميم جرافيك</p>
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
    #experts{
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: #BF4D66;
    }
</style>