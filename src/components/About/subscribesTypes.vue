<template>
    <section class="subscribe mt-4 mb-5">
        <div class="container">
            <p class="common_head  fw-6 text-center">  خطط بأسعار مناسبة </p>
            <h6 class="fw-bold text-center"> اختر الخطة المناسبة لك </h6>

            <section class="types mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <!-- monthly subscribe  -->
                        <section class="monthly pt-4 pb-4 d-flex flex-column justify-content-center align-items-center">
                            <!-- type image  -->
                            <img :src="monthly.image" class="type_image mb-2" alt="">

                            <h5 class="fw-bold mb-2"> {{ monthly.name }} </h5>

                            <!-- <span class="second_color type_price"> 100جنية <span class="normal_type"> / شهر </span> </span> -->
                            <span class="second_color type_price" v-html="monthly.description"> </span>
                            
                            <div class="features mt-3 w-50">
                                <!-- single feature  -->
                                <div class="d-flex justify-content-between align-items-center mb-2" v-for="feature in monthlyFeatures" :key="feature">
                                    <p> {{ feature.feature }} </p>
                                    <i class="fa-solid fa-check mainColor"></i>
                                </div>
                                
                            </div>

                        </section>
                    </div>
                    <div class="col-md-6">
                        <!-- monthly subscribe  -->
                        <section class="yearly pt-4 pb-4 d-flex flex-column justify-content-center align-items-center">
                            <!-- type image  -->
                            <img :src="yearly.image" class="type_image mb-2" alt="">

                            <h5 class="fw-bold mb-2"> {{ yearly.name }} </h5>

                            <!-- <span class="second_color type_price"> 100جنية <span class="normal_type"> / سنوي </span> </span> -->
                            <span class="second_color type_price" v-html="yearly.description">  </span>
                            
                            <div class="features mt-3 w-50">
                                <!-- single feature  -->
                                <div class="d-flex justify-content-between align-items-center mb-2" v-for="feature in yearlyFeatures" :key="feature">
                                    <p> {{ feature.feature }} </p>
                                    <i class="fa-solid fa-check mainColor"></i>
                                </div>
                                
                                
                            </div>

                        </section>
                    </div>
                </div>
            </section>
        </div>
    </section>

    <loader v-if="loader" />
</template>

<script>
import axios from 'axios'
import loader from '@/components/layout/pageLoader.vue'

export default {
    data(){
        return{
            monthly : {},
            yearly : {},
            monthlyFeatures : [],
            yearlyFeatures :[],
            loader : true
        }
    },
    methods:{
        async getPlans(){
            await axios.get('plans')
            .then( (res)=>{
                this.monthly = res.data.data[0];
                this.monthlyFeatures = res.data.data[0].features;
                this.yearlyFeatures = res.data.data[1].features;
                this.yearly = res.data.data[1];
                this.loader = false
            } )
        }
    },
    mounted(){
        this.getPlans()
    },
    components:{
        loader
    }
}
</script>

<style scoped>
    .common_head::before {
        right: 43% ;
    }
    .monthly{
        border: 1px solid #ccc;
    }
    .yearly{
        background: rgba(230, 230, 230, 1);
        transform: scaleY(1.1);
    }
    .second_color {
        color: rgba(40, 90, 124, 1);
        font-size: 18px;
        font-weight: 700;
    }
    .normal_type{
        color: #333 ;
        font-size: 14px;
        font-weight: normal;
    }
    .type_image {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
</style>