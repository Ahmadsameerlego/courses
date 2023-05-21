<template>
   <!-- shared header  -->
    <sharedHeaderVue :title="passedCourseType" />

    <!-- single course  -->
    <singleCourseVue />
</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import singleCourseVue from '@/components/advise/singleCourse.vue'

export default {
    data(){
        return{
            passedCourseType : 'تصوير وصنع أفلام الستوب موشن - المستوى 1'
        }
    },
    components:{
        sharedHeaderVue,
        singleCourseVue
    }
}
</script>

<style>

</style>