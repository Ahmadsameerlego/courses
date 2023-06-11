<template>
    <!-- shared header  -->
    <sharedHeaderVue title="الباقات" />

    <!-- types  -->
    <subscribesTypesVue />

    <subscribeFormVue />
    

</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import subscribesTypesVue from '@/components/About/subscribesTypes.vue';
import subscribeFormVue from '@/components/home/subscribeForm.vue';
export default {
    components:{
        sharedHeaderVue,
        subscribesTypesVue,
        subscribeFormVue
    }
}
</script>

<style>

</style>