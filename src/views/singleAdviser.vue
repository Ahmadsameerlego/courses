<template>
     <!-- shared header  -->
    <sharedHeaderVue :title="adviserName" />

    <!-- profile  -->
    <adviserProfileVue @loadAdviser="loadAdviser" />
</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import adviserProfileVue from '@/components/advise/adviserProfile.vue'

export default {
    data(){
        return{
            adviserName : ''
        }
    },
    components:{
        sharedHeaderVue,
        adviserProfileVue
    },
    methods:{
        loadAdviser(name){
            this.adviserName = name
        }
    }
}
</script>

<style>

</style>