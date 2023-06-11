<template>
    <section id="categories" class="mt-4">
        <div class="container">
            <p class="common_head  fw-6"> خدماتنا </p>
            <h6 class="fw-bold">تحتاج خدمتنا؟ احجز استشارتك المجانية الآن وسوف نرد عليك في اسرع وقت</h6>

            <div class="services grid-container" v-if="filteredCats.length>0">
                <router-link :to="'/singleService/'+cat.id" class="item single_service mb-2" v-for="cat in filteredCats" :key="cat.id">
                    <img :src="cat.image" alt="">
                    <span> {{ cat.name }} </span>
                </router-link>
            </div>

            <div class="notFound mb-3 text-center" v-else> لا توجد خدمات متاحة </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            categories : [],
            filteredCats : [],
            allchilds : []
        }
    },
    methods:{
        // get all intersts 
        async getCategories(){
            await axios.get('categories')
            .then( (res)=>{
                this.categories = res.data.data;

                // get all childs 
                for( let i = 0 ; i < this.categories.length ; i++ ){                   
                    this.allchilds.push( ...this.categories[i].childs);
                }
                // filter child that have same parent id in the route 
                this.filteredCats = this.allchilds.filter( item => item.parent_id == this.$route.params.id );


        } )
        },
    },
    computed:{
        returnedCats(){
            return this.categories
        }
    },
    // beforeMount(){
    //     this.getCategories();
    // },
    mounted(){


    },
    watch: {
    '$route.params.id': {
      immediate: true, // Invoke the handler immediately when the component is created
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          // Route params have changed
          console.log('Route params have changed:', newValue);
          
          // Perform any necessary actions based on the change
          // For example, you can fetch data based on the new ID
          this.getCategories();

          this.allchilds = []
        }
      }
    }
  },

}
</script>

<style scoped lang="scss">

.item:nth-child(1) { grid-area: header; }
.item:nth-child(2) { grid-area: menu; }
.item:nth-child(3) { grid-area: main; }
.item:nth-child(4) { grid-area: right; }
.item:nth-child(5) { grid-area: footer; }
.item:nth-child(6) { grid-area: left; }

.grid-container {
  display: grid;
  grid-template-areas:
    'header menu main main '
    'header right footer left';
  gap: 20px;
  padding: 10px;
}

// .grid-container > div {
//   background-color: rgba(255, 255, 255, 0.8);
//   text-align: center;
//   padding: 20px 0;
//   font-size: 30px;
// }



.common_head::before {
    background-color: #c40f3d  !important;
    right: 0px !important;
}
.common_head{
    padding-right: 16px;
    padding-left: 16px;
}
.services{
    
    .single_service{
        position: relative;
        border-radius: 5px;
        &::before{
            content: '';
            position: absolute;
            width:100%;
            height: 100%;
            top: 0;
            right:0;
            background-color: #3333334f;
            border-radius: 5px;
        }
        span{
        position: absolute;
        top: 50%;
        right:50%;
        color: #fff;
        font-size: 17px;
        font-weight: 600;
            transform: translate(50%, -50%);

        }
    }
}

.single_service img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
}

.item:nth-child(1) {
    img{
        height: 100% !important;
    }
}
</style>