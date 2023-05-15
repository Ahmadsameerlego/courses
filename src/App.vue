<template>
  <!-- header -->
  <pageHeader />
  <router-view/>
</template>

<script>
// main style 
import './assets/css/style.scss'
import pageHeader from './components/layout/pageHeader.vue'
export default {
  components:{
    pageHeader
  }
}
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: rtl;
}

</style>
