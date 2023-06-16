<template>
  <div class="home">
    <!-- how work  -->
    <howWorkVue />
    <!-- fields  -->
    <advFiledsVue />
    <!-- experts  -->
    <adExpertsVue />
    
    <!-- test -->
    <testmonilasReviewsVue />

    <!-- FAQS  -->
    <FAQSVue />

    <!-- ask advise  -->
    <askAdvise />

    <!-- subscribe  -->
    <subscribeFormVue />


  </div>
</template>

<script>
import howWorkVue from '@/components/home/howWork.vue'

import advFiledsVue from '@/components/home/advFileds.vue'

import adExpertsVue from '@/components/home/adExperts.vue'

import testmonilasReviewsVue from '@/components/home/testmonilasReviews.vue'

import FAQSVue from '@/components/home/FAQS.vue'

import askAdvise from '@/components/home/askAdvise.vue'

import subscribeFormVue from '@/components/home/subscribeForm.vue'


export default {
  data(){
    return{
    }
  },
  mounted(){
    console.log( this.$route.fullPath )
  },
  name: 'HomeView',
  components: {
    howWorkVue,
    advFiledsVue,
    adExpertsVue,
    testmonilasReviewsVue,
    FAQSVue,
    askAdvise,
    subscribeFormVue
  }
}
</script>
