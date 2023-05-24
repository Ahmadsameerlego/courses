<template>
    <!-- shared header  -->
    <sharedHeaderVue title="حسابي" />
    <!-- profile form  -->
    <userProfileFormVue />
</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import userProfileFormVue from '@/components/profile/userProfileForm.vue'

export default {

    components:{
        sharedHeaderVue,
        userProfileFormVue
    }

}
</script>

<style>

</style>