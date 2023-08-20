const jsdom = require('jsdom-global');
const changeClass = require('./animation'); 

describe('test function of changing class', () => {
    let cleanup;

    beforeAll(() => {
        cleanup = jsdom(); // Imitate DOM and environment
    });

    afterAll(() => {
        cleanup(); // Delete imitation DOM and environment
    });

    it('should toggle class on click', () => {
        const img = document.createElement('img');
        img.classList.add('big-img');

        // Call the click 
        img.click();

        // After the click, 'big-img' class shold be added
        expect(img.classList.contains('big-img')).toBe(true);

        // Call the click again
        img.click();

        // After the click, 'big-img' class shold be removed
        expect(img.classList.remove('big-img')).toBe(undefined);
    });
});