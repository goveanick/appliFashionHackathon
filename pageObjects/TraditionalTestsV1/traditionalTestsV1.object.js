class TraditionalTestsV1PageObject {

    // Sample selector
    get appliFashionlogo()        { return $('div[id="logo"] img'); }
    get requestAnswerBoxOnPartnerPage()     { return $('div[class*="PartnerPromptsQuestionCarouselItem"]'); }


    // ================================================== Helper Methods ===================================================================

    sampleMethod() {

    }

}

export default new TraditionalTestsV1PageObject();
