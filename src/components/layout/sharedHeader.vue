<template>
    <section class="sharedHeader">
        <div class="pageTitle">
            {{ title }}
        </div>

        <img :src="require('@/assets/imgs/Combined-Shape.png')" alt="">
    </section>
</template>

<script>
export default {
    props:{
        title : String
    }
}
</script>

<style lang="scss">
    .sharedHeader{
        background: #333132;
        width: 100%;
        height: 300px;
        position: relative;
        img{
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            z-index: 0;
            opacity: .1;
        }
        .pageTitle{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            transform: translateY(115px);
            font-size: 20px;
            font-weight: 600;
            &::before{
                content: "";
                position: absolute;
                background: #c40f3d;
                width: 50px;
                height: 2px;
                top: 32px;
            }
        }
    }
</style>