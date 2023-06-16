<template>
    <section id="fields">
        <div class="container">
            <h5 class="text-center fw-bold textCenter"> {{ $t('home.advise1') }} </h5>
            <p class="text-center o-5"> {{ $t('home.chooseCat') }} </p>

            <div class="row mt-4">
                <div class="col-md-4 mb-4" v-for="cat in categories" :key="cat.id" >
                    <router-link :to="'/OurServices/'+cat.id" style="color:inherit;text-decoration:none">
                        <!-- single field  -->
                        <div class="single_field d-flex align-items-center pt-3 pb-3 px-3 br-5 bordered_gray">
                            <img :src="cat.image" width="50" height="50" style="border-radius:50%" alt="" class="field_image">
                            <span class="normal_font"> {{ cat.name }} </span>
                        </div>
                    </router-link>
                </div>

                 <div class="col-md-4 mb-4"  >
                    <router-link to="singleService/1" style="color:inherit;text-decoration:none">
                        <!-- single field  -->
                        <div class="single_field d-flex align-items-center pt-3 pb-3 px-3 br-5 bordered_gray">
                            <img :src="require('@/assets/imgs/element-plus.png')" width="50" height="50" style="border-radius:50%" alt="" class="field_image">
                            <span class="normal_font"> المزيد </span>
                        </div>
                    </router-link>
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
            categories : []
        }
    },
    methods:{
        async getCats(){
            await axios.get('categories')
            .then( (res)=>{
                this.categories = res.data.data.slice(0,5)
            } )
        }
    },
    mounted(){
        this.getCats()
    }
}
</script>

<style lang="scss">
    #fields{
        margin-top: 65px;
        margin-bottom: 50px;
    }
    @media(max-width:768px){
        .textCenter{
            margin-bottom: 10px;
        }
        #fields{
            margin-top: 105px;
        }
    }
</style>