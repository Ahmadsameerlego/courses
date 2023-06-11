<template>
    <section id="experts">
        <div class="container">
            <h5 class="fw-bold whiteColor text-center">خبراء اداري</h5>
            <p class="text-center whiteColor w-50 o-5 mx-auto">خبراؤنا متخصصون و مؤهلون لتقديم العلم والمعرفة المكتسبة من تجارب فريدة والتي من شأنها أن تساعدك في تحقيق أهدافك في العمل والحياة</p>

            <!-- all experts  -->
            <div class="experts mt-5 d-flex align-items-center justify-content-between">
                <!-- single expert  -->
                <div v-for="work in works" :key="work.id" class="single_expert d-flex flex-column align-items-center justify-content-centerr" >
                    <!-- expert image -->
                    <div class="expert_image">
                        <img :src="work.image" alt="" style="width:75px;height:75px;border-radius:50%;object-fit:cover;">
                    </div>
                    <h6 class="fw-bold whiteColor mt-3 mb-2"> {{ work.name }} </h6>
                    <p class="whiteColor o-5"> {{ work.category }} </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            works : []
        }
    },
    methods:{
        async getWorks(){
            await axios.get('team-work')
            .then( (res)=>{
                this.works = res.data.data
            } )
        }
    },
    mounted(){
        this.getWorks()
    }

}
</script>

<style lang="scss">
    #experts{
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: #BF4D66;
    }
    @media(max-width:768px){
        .experts{
            flex-direction: column;
            justify-content: center !important;
            align-items: center !important;
        }
    }
</style>