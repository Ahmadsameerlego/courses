<template>
    <!-- shared header  -->
    <sharedHeaderVue title="اضافة دورة" />

    <adviserAddCourseForm />

</template>

<script>
import sharedHeaderVue from '@/components/layout/sharedHeader.vue';
import adviserAddCourseForm from '@/components/profile/adviserAddCourseForm.vue'
export default {
    components:{
        sharedHeaderVue,
        adviserAddCourseForm
    }
}
</script>

<style>

</style>