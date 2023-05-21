<template>
    <section id="subscribe" class="pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-2">
                    <h4 class="fw-bold">تلقي إخطارات عندما أنشر مقالات جديدة</h4>
                    <p class="sub_text o-5">ابق على اطلاع بأحدث الأخبار والإعلانات والمقالات.</p>
                </div>

                <div class="col-md-6">
                    <form >
                        <div class="d-flex justify-content-end  ">
                            <input type="email" class="form-control w-50" placeholder="البريد الاكتروني">
                            <button class="btn main_btn mx-3"> اشتراك </button>
                        </div>
                    </form>
                </div>
            </div>

            
        </div>        
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    #subscribe{
        background-color: #FAF8F6;
    }
    .sub_text{
        font-size: 15px;
        font-weight: 600;
    }
</style>