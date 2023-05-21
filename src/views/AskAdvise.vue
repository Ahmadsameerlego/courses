<template>
    <!-- shared header  -->
  <sharedHeaderVue title="طلب استشارة" />
  <!-- form  -->
  <adviseFormVue />
</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import adviseFormVue from '@/components/advise/adviseForm.vue'
export default {
    components:{
        sharedHeaderVue,
        adviseFormVue
    }
}
</script>

<style>

</style>