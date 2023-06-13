<template>
    <!-- shared header  -->
    <singleCategoryHead :title="$t('nav.services')" :desc="$t('header.keepContact')" />

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