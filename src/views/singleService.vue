<template>
    <!-- shared header  -->
    <singleCategoryHead title="خدماتنا" desc="ابق على تواصل معنا" />

    <!-- filter operation  -->
    <advisersFilterVue />
</template>

<script>
import singleCategoryHead from '@/components/services/singleCategoryHead.vue'

import advisersFilterVue from '@/components/services/advisersFilter.vue'
export default {
    components:{
        singleCategoryHead,
        advisersFilterVue
    }
}
</script>

<style>

</style>