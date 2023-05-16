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
  </div>
</template>

<script>
import howWorkVue from '@/components/home/howWork.vue'

import advFiledsVue from '@/components/home/advFileds.vue'

import adExpertsVue from '@/components/home/adExperts.vue'

import testmonilasReviewsVue from '@/components/home/testmonilasReviews.vue'

import FAQSVue from '@/components/home/FAQS.vue'

import askAdvise from '@/components/home/askAdvise.vue'
export default {
  name: 'HomeView',
  components: {
    howWorkVue,
    advFiledsVue,
    adExpertsVue,
    testmonilasReviewsVue,
    FAQSVue,
    askAdvise
  }
}
</script>
