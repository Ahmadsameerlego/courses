<template>
    <!-- shared header  -->
    <sharedHeaderVue title="حسابي" />

    <adviserProfileVue />
</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import adviserProfileVue from '@/components/profile/advisorProfileForm.vue'

export default {
    components:{
        sharedHeaderVue,
        adviserProfileVue
    }
}
</script>

<style>

</style>