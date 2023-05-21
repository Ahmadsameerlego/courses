<template>
  <!-- header -->
  <pageHeader />
  <!-- pages  -->
  <router-view/>
  <!-- footer  -->
  <pageFooterVue />
</template>

<script>
// main style 
import './assets/css/style.scss'
import './assets/css/style-ltr.scss'
import pageHeader from './components/layout/pageHeader.vue'
import pageFooterVue from '@/components/layout/pageFooter.vue'
export default {
  components:{
    pageHeader,
    pageFooterVue
  },
  mounted(){
    if (localStorage.getItem("locale") == "en") {
      document.querySelector("body").classList.add("ltr");
    } else {
      document.querySelector("body").classList.remove("ltr");
    }
  },
}
</script>



<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: rtl;
}

</style>
