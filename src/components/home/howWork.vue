<template>
  <section id="howWork" class="">
    <div class="container">
        <h5 class="text-center fw-bold mb-4"> {{ $t('home.howWork') }} </h5>

        <div class="row">
            <div class="col-md-4 mb-2" v-for="work in works" :key="work.id">
                <div class="how_item d-flex flex-column align-items-center justify-content-center">
                    <!-- how image  -->
                    <div class="how_image">
                        <img :src="work.image" width="100" height="100" alt="">
                    </div>
                    <!-- how desc  -->
                    <p class="fw-6"> {{ work.description }}  </p>
                </div>
            </div>
            
        </div>
    </div>
  </section>

  <loader v-if="loader"/>
</template>

<script>
import axios from 'axios';
import loader from '@/components/layout/pageLoader.vue'
export default {
    data(){
        return{
            works : [],
            loader : true
        }
    },
    methods:{
        async getWorks(){
            await axios.get('how-work')
            .then( (res)=>{
                this.works = res.data.data;
                this.loader = false
            } )
        }
    },
    components:{
        loader
    },
    mounted(){
        this.getWorks()
    }

}
</script>

<style lang="scss">
    .how_item {
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 5px 9px;
        .how_image{
            margin-top: 10px;
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
            font-weight: 600;
        }
    }
    #howWork{
        margin-top: 65px;
        margin-bottom: 65px;
        position: relative;
        &::before{
            position: absolute;
            content: "";
            width: 82%;
            height: 1px;
            bottom: -12%;
            right: 9%;
            background-color: #000;
            margin: auto;
            opacity: .4;
        }
    }
</style>