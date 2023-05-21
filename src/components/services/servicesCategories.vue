<template>
    <section id="categories" class="mt-4">
        <div class="container">
            <p class="common_head  fw-6"> خدماتنا </p>
            <h6 class="fw-bold">تحتاج خدمتنا؟ احجز استشارتك المجانية الآن وسوف نرد عليك في اسرع وقت</h6>

            <div class="services">
                <router-link to="/singleService/1" class="single_service">
                    <img :src="require('@/assets/imgs/Rectangle 2183.png')" alt="">
                    <span>تصميم الجرافيك</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.common_head::before {
    background-color: #c40f3d  !important;
    right: 0px !important;
}
.common_head{
    padding-right: 16px;
    padding-left: 16px;
}
.services{
    
    .single_service{
        position: relative;
        span{
        position: absolute;
        top: 50%;
        right:50%;
        color: #fff;
        font-size: 17px;
        font-weight: 600;
            transform: translate(50%, -50%);

        }
    }
}
</style>