<template>
     <!-- shared header  -->
    <sharedHeaderVue title="مايكل ابراهيم" />

    <!-- profile  -->
    <adviserProfileVue />
</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import adviserProfileVue from '@/components/advise/adviserProfile.vue'

export default {
    components:{
        sharedHeaderVue,
        adviserProfileVue
    }
}
</script>

<style>

</style>