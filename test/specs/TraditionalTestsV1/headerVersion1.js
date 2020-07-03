import TraditionalPageObject from '/Users/Nick/Desktop/AppliFashion\/pageObjects/TraditionalTestsV1/traditionalTestsV1.object';
import TraditionalPageObject from '../';


const url = 'https://demo.applitools.com/gridHackathonV1.html';

describe('AppliFashion Header', () => {

    beforeAll( () => {
        browser.url(url);
    });

    it('should have the right applitoos title', () => {
        const title = browser.getTitle();
        expect(title).toBe('Applitools UltraFastGrid | Cross Browser Testing Demo App');
    });

    it('should check that the AppliFashion logo is displayed', () => {
        expect(TraditionalPageObject.appliFashionlogo).toBeDisplayed();
    });

    it('should verify that the AppliFashion logo image path is correct', () => {
        const logoSrcPath = $('div[id="logo"] img').getAttribute('src')
        expect(logoSrcPath).toBe('https://demo.applitools.com/grid/img/logo.svg')
    })

    it('should verify that there are 5 menu options in the header', () => {
        const numberMenuOptions = $$('li[class*="submenu"] a').length;
        expect(numberMenuOptions).toEqual(5);
    })
})