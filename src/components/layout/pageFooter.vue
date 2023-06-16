<template>
    <section id="footer" class="pt-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 mb-3">
                    <section class="footer_right_hand d-flex">

                        <div >
                            <!-- logo  -->
                            <div class="logo">
                                <img :src="require('@/assets/imgs/image 73.png')" alt="">
                            </div>
                            <div>
                                <p class="footer_desc whiteColor">
                                    {{ $t('home.footerDesc') }}
                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="footer_links d-flex flex-column">
                                <h6 class="fw-6 whiteColor mb-4"> {{ $t('home.sitePlan') }} </h6>
                                <router-link to="/" class="whiteColor"> {{ $t('nav.home') }} </router-link>
                                <router-link to="/AboutUs" class="whiteColor"> {{ $t('nav.about') }} </router-link>
                                <router-link to="/OurServices/1" class="whiteColor" v-if="client"> {{ $t('nav.services') }} </router-link>
                                <router-link to="/" class="whiteColor" v-if="advisor"> {{ $t('nav.plans') }} </router-link>
                                <router-link to="/contactUs" class="whiteColor"> {{ $t('nav.contact') }} </router-link>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="col-md-6 mb-2">
                    <section class="footer_left_hand">
                        <h6 class="fw-6 whiteColor mb-3"> {{ $t('home.joinNow') }}  </h6>
                        <p class="whiteColor">
                            {{ $t('home.footerJoinDesc') }}
                        </p>

                        <div class="d-flex align-items-center">
                            <button class="bordered_btn whiteColor w-50 pt-3 pb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
                            {{ $t('home.joinClient') }}
                            </button>
                            <span class="mainColor whiteColor fw-bold px-3">أو</span>
                            <button class=" bordered_btn w-50 whiteColor pt-3 pb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
                                {{ $t('home.joinAdviser') }}
                            </button>
                        </div>
                    </section>
                </div>
            </div>

            <div class="footer_bottom  pt-4 ">
                <div class="d-flex ">
                    <div class="d-flex align-items-center">
                        <span class="whiteColor"> {{ data.phone }} </span>
                        <img class="footer_icon" :src="require('@/assets/imgs/call.png')" alt="">
                    </div>
                    <div class="margin_bottom d-flex align-items-center">
                        <span class="whiteColor"> {{ data.email }} </span>
                        <img class="footer_icon" :src="require('@/assets/imgs/direct.png')" alt="">
                    </div>
                </div>
                <p class="whiteColor">
                    {{ $t('home.copy') }}
                </p>

                <!-- left side  -->
                <div class="social_media">
                    <a v-for="social in socials" :key="social.id" :href="social.link" target="_blank">
                        <img :src="social.icon" alt="">
                    </a>
                    
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
            socials : [],
            client : null,
            advisor : null,
            data : {}

        }
    },
    methods:{
        // get socials
        async getSocials(){
            await axios.get('socials')
            .then( (res)=>{
                this.socials = res.data.data ;
            } )
        } ,
        async getSiteInfo(){
            await axios.get('settings')
            .then( (res)=>{
                this.data = res.data.data
            } )
        },
    },
    mounted(){
        this.getSocials();
        this.getSiteInfo()
            if( localStorage.getItem('userType') == 'client' ){
            this.client = true ;
            this.advisor = false ;
        }else if( localStorage.getItem('userType') == 'adviser' ){
            this.client = false ;
            this.advisor = true ;
        }
    }
}
</script>

<style lang="scss">
    #footer{
        background-color: #c40f3d;
        .row{
            border-bottom: 1px solid #fff;
        }
        .footer_right_hand{
            border-left: 1px solid #fff;
            .logo{
                img{
                    width: 135px;
                    height: 75px;
                    object-fit: contain;
                    margin-bottom: 16px;
                }
            }
            .footer_desc{
                font-size: 14px;
                width: 320px;
                line-height: 1.7;
                opacity: .8;
            }
            .footer_links{
                margin: 0 45px;
                a{
                    text-decoration: none;
                    opacity: .8;
                    margin-bottom: 10px;
                }
            }
        }
    }
    .margin_bottom{
        margin: 0 40px;
    }
    .footer_icon{
        width:20px;
        height:20px;
        margin: 0 10px;
    }
</style>

<style scoped>
    .bordered_btn{
        border: 1px solid #fff !important;
        color:#fff !important
    }
</style>