<template>
    <!-- shared header  -->
  <sharedHeaderVue title="خدماتنا" />

  <!-- categories  -->
  <servicesCategoriesVue />
</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import servicesCategoriesVue from '@/components/services/servicesCategories.vue'
export default {
    components : {
        sharedHeaderVue,
        servicesCategoriesVue
    }
}
</script>

<style>

</style>