<template>
    <div class="singleHead position-relative">
        <img :src="require('@/assets/imgs/Background (5).png')" alt="">
        <div class="rightSide">
            <p class="common_head whiteColor fw-bold"> {{ title }} </p>
            <h6 class="fw-bold whiteColor"> {{ desc }} </h6>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        desc : String,
        title : String
    }
}
</script>

<style lang="scss" scoped>
    .singleHead{
        &::before{
            content: '';
            position:absolute;
            width:40%;
            height:100%;
            right:0;
            top: 0;
            background:rgb(51 51 51 / 88%);
        }
        .rightSide{
            position: absolute;
            right: 8%;
            top: 35%;
        }
    }
    .common_head{
        padding: 0 17px;
    }
    .common_head::before {
        background-color: #c40f3d;
        right: 0%;
    }
</style>