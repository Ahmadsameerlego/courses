<template>
   <!-- shared header  -->
    <sharedHeaderVue :title="passedCourseType" />

    <!-- single course  -->
    <singleCourseVue @loadCourse="loadCourse" />
</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import singleCourseVue from '@/components/advise/singleCourse.vue'

export default {
    data(){
        return{
            passedCourseType : ''
        }
    },
    components:{
        sharedHeaderVue,
        singleCourseVue
    },
    methods:{
        loadCourse(name){
            this.passedCourseType = name
        }
    }
}
</script>

<style>

</style>