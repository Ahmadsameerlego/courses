<template>
    <form @submit.prevent="updatePassword" ref="updatePass">
        <h6 class="common_head  fw-bold"> يتيح لكم هذا القسم تغيير كلمة المرور </h6>
        <div class="row">
            <div class="col-md-8">
                <div class="form-group position-relative">
                    <input
                        name="old_password"
                        v-model="old_password"
                        class="form-control mb-3 mt-2"
                        placeholder="كلمة المرور الحالية"
                        :type="passwordType3"
                        minlength="6"
                        maxlength="100"
                        required
                    />

                    <div v-if="!eyeToggle3">
                        <span @click="switchVisibility3()">
                            <i class="fa-regular fa-eye"></i>
                        </span>
                    </div>
                    <div v-else>
                        <span @click="switchVisibility3()">
                            <i class="fa-regular fa-eye-slash"></i>
                        </span>
                    </div>
                </div>
            </div>
            
            <div class="col-md-8">
                <div class="form-group position-relative">
                      <input
                        :type="passwordType"
                        name="password"
                        v-model="password"
                        class="form-control mb-3"
                        placeholder="كلمة المرور الجديدة"
                        minlength="6"
                        maxlength="100"
                        required
                      />
                      <div v-if="!eyeToggle">
                        <span @click="switchVisibility()">
                          <i class="fa-regular fa-eye"></i>
                        </span>
                      </div>
                      <div v-else>
                        <span @click="switchVisibility()">
                          <i class="fa-regular fa-eye-slash"></i>
                        </span>
                      </div>
                </div>
            </div>

            <div class="col-md-8">
                <div class="form-group position-relative">
                    <input
                        :type="passwordType2"
                        name=""
                        v-model="confirmPassword"
                        class="form-control mb-3"
                        placeholder="تأكيد كلمة المرور الجديدة"
                        minlength="6"
                        maxlength="100"
                        required
                    />
                    <div v-if="!eyeToggle2">
                    <span @click="switchVisibility2()">
                        <i class="fa-regular fa-eye"></i>
                    </span>
                    </div>
                    <div v-else>
                    <span @click="switchVisibility2()">
                        <i class="fa-regular fa-eye-slash"></i>
                    </span>
                    </div>
                </div>
            </div>

            <div class="col-8" v-if="showValid">
                <p v-if="passwordMatch" class="passwordConfirmed d-flex align-items-center">
                <i class="fa-regular fa-circle-check"></i>
                <span>كلمة السر متطابقة</span>
                </p>
                <p v-else class="passwordWrong d-flex align-items-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                    <span>كلمة السر غير متطابقة</span>
                </p>
            </div>

            <div class="col-md-8">
                <button class="btn main_btn pt-2 pb-2 w-100 mt-2"  :disabled="disabled"> تغيير كلمة المرور </button>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
export default {   
    data(){
        return{
            passwordType: "password",
            eyeToggle: false,
            passwordType2: "password",
            eyeToggle2: false,
            passwordType3: "password",
            eyeToggle3: false,
            password : '',
            confirmPassword : '',
            disabled : true,
            showValid : false
        }
    },
    watch:{
        password(){
            if( this.passwordMatch == true ){
                this.disabled = false;
            }else{
                this.disabled = true;
            }
            this.showValid = true;
        },
        confirmPassword(){
            if( this.passwordMatch == true ){
                this.disabled = false;
            }else{
                this.disabled = true;
            }
            this.showValid = true;
        }
    },
    computed:{
        passwordMatch() {
            return this.password === this.confirmPassword;  
        }
    },
    methods:{
        // update password 
        async updatePassword(){
            this.disabled = true ;
            const fd = new FormData(this.$refs.updatePass)
            await axios.post('update-passward?_method=patch', fd , {
                headers : {
                    Authorization:  `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then( (res)=>{
                if( res.data.key == 'success' ){
                    this.$swal({
                    icon: 'success',
                    title: res.data.msg,
                    timer: 2000,
                    showConfirmButton: false,
                    });
                }else{
                    this.$swal({
                        icon: 'error',
                        title: res.data.msg,
                        timer: 2000,
                        showConfirmButton: false,
                    });
                }
                this.disabled = false ;
            } )
        },

        switchVisibility() {
            this.eyeToggle = !this.eyeToggle;

            if (this.passwordType == "password") {
                this.passwordType = "text";
            } else {
                this.passwordType = "password";
            }
        },
         switchVisibility2() {
            this.eyeToggle2 = !this.eyeToggle2;

            if (this.passwordType2 == "password") {
                this.passwordType2 = "text";
            } else {
                this.passwordType2 = "password";
            }
        },
         switchVisibility3() {
            this.eyeToggle3 = !this.eyeToggle3;

            if (this.passwordType3 == "password") {
                this.passwordType3 = "text";
            } else {
                this.passwordType3 = "password";
            }
        },
    }
}
</script>

<style lang="scss">
    .common_head {
        padding-right: 17px;
    }
    .common_head::before {
        right: 0%;
    }
</style>