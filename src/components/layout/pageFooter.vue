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
                                    نجلب السنوات والخبرة العالمية والقدرة على التحمل لتوجيه عملائنا من خلال الحقائق الجديدة والمضطربة في كثير من الأحيان.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="footer_links d-flex flex-column">
                                <h6 class="fw-6 whiteColor mb-4"> خريطة الموقع </h6>
                                <router-link to="/" class="whiteColor"> الصفحة الرئيسية </router-link>
                                <router-link to="/AboutUs" class="whiteColor"> معلومات عنا </router-link>
                                <router-link to="/OurServices/1" class="whiteColor"> خدماتنا </router-link>
                                <router-link to="/" class="whiteColor"> الباقات </router-link>
                                <router-link to="/contactUs" class="whiteColor"> تواصل معنا </router-link>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="col-md-6 mb-2">
                    <section class="footer_left_hand">
                        <h6 class="fw-6 whiteColor mb-3"> إنضم إلينا الان  </h6>
                        <p class="whiteColor">
                            الآن يمكنك التواصل مع الآلاف من العملاء من جميع أنحاء العالم بشكل خاص
                        </p>

                        <div class="d-flex align-items-center">
                            <button class="bordered_btn whiteColor w-50 pt-3 pb-3">
                            انضم كعميل
                            </button>
                            <span class="mainColor whiteColor fw-bold px-3">أو</span>
                            <button class=" bordered_btn w-50 whiteColor pt-3 pb-3">
                                انضم كمستشار
                            </button>
                        </div>
                    </section>
                </div>
            </div>

            <div class="footer_bottom  pt-4 ">
                <div class="d-flex ">
                    <div class="d-flex align-items-center">
                        <span class="whiteColor">+201288008898</span>
                        <img class="footer_icon" :src="require('@/assets/imgs/call.png')" alt="">
                    </div>
                    <div class="margin_bottom d-flex align-items-center">
                        <span class="whiteColor">contactus@advisersgate.com</span>
                        <img class="footer_icon" :src="require('@/assets/imgs/direct.png')" alt="">
                    </div>
                </div>
                <p class="whiteColor">
                    © 2023 جميع الحقوق محفوظة لشركة Adviser Gates
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
            socials : []
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
    },
    mounted(){
        this.getSocials()
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