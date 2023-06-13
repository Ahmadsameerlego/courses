<template>
    <!-- shared header  -->
    <singleCategoryHead :title="$t('header.about1')" :desc="$t('header.about2')" />

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