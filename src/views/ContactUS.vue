<template>
      <!-- shared header  -->
    <sharedHeaderVue :title="$t('nav.contact')" />

    <!-- contact form  -->
    <contactFormVue />

    <subscribeFormVue />

</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import contactFormVue from '@/components/contact/contactForm.vue';
import subscribeFormVue from '@/components/home/subscribeForm.vue';


export default {
    components:{
        sharedHeaderVue,
        contactFormVue,
        subscribeFormVue
    }
}
</script>

<style>

</style>