<template>
  <section id="FAQS">
    <p class="common_head text-center fw-6"> أسئلة مكررة </p>
    <h4 class="fw-bold text-center">تحقق من الأسئلة الشائعة للحصول على إجابات</h4>

    <div class="container">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ما هي القطاعات أو الصناعات التي تقوم بالتوظيف لها؟
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p class="fw-6 o-5">
                        أعمتهم الرغبة ، بحيث لا يستطيعون التنبؤ بالمتاعب التي لا بد أن تنشأ ؛ واللوم على قدم المساواة يقع على من يفشل في واجبه وهو نفس القول من خلال الانكماش. مرة أخرى ، لا يوجد أي شخص يحب أو يسعى أو يرغب في الحصول على الألم نفسه ، فهو آلام ولكن الظروف عظيمة
                    </p>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    ما هي خدمات التوظيف التي تقدمها؟
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p class="fw-6 o-5">
                        أعمتهم الرغبة ، بحيث لا يستطيعون التنبؤ بالمتاعب التي لا بد أن تنشأ ؛ واللوم على قدم المساواة يقع على من يفشل في واجبه وهو نفس القول من خلال الانكماش. مرة أخرى ، لا يوجد أي شخص يحب أو يسعى أو يرغب في الحصول على الألم نفسه ، فهو آلام ولكن الظروف عظيمة
                    </p>
                </div>
                </div>
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
    #FAQS{
        padding-top: 65px;
        padding-bottom: 50px;
        background-color: #FAF8F6;
        
    }
    .accordion-item{
        border: none !important;
        background: transparent !important;
    }
    .accordion-button{
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        font-size: 18px;
        font-weight: 700;
    }
    .accordion-item:first-of-type .accordion-button{
        font-size: 18px;
        font-weight: 700;
        color:#333
    }
    .accordion-button:not(.collapsed)::after{
        position: absolute;
        left: 0;
        background-image: url('@/assets/imgs/minus-circle.png') !important;
    }
    .accordion-button::after{
        position: absolute;
        left: 0;
        background-image: url('@/assets/imgs/add-circle.png') !important;

    }
    .accordion-button:not(.collapsed){
        color:#333
    }
    .common_head{
            position: relative;
            &::before{
            position: absolute;
            content: "";
            width: 12px;
            height: 12px;
            background-color: #bf4d66;
            right: 46%;
            top: 2px;
            }
        }
</style>