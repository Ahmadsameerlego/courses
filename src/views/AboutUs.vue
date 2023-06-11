<template>
    <!-- shared header  -->
    <singleCategoryHead title="معلومات عنا" desc="نحن شركة شابة ومبدعة ونقدم لك أفكارًا تجارية جديدة." />

    <!-- about vision  -->
    <aboutVisionVue />

    <!-- Who US  -->
    <whoUsVue />

    <subscribeFormVue />
</template>

<script>
import singleCategoryHead from '@/components/services/singleCategoryHead.vue';
import aboutVisionVue from '@/components/About/aboutVision.vue';
import whoUsVue from '@/components/About/whoUs.vue'
import subscribeFormVue from '@/components/home/subscribeForm.vue';

export default {
    components:{
        singleCategoryHead,
        aboutVisionVue,
        whoUsVue,
        subscribeFormVue
    }
}
</script>

<style>

</style>