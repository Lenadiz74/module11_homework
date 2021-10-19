const getPercents = require('./index.js');

describe('getPercents', () => {

    test('function must be defined', () => {
        expect(getPercents).toBeDefined();
    })

    test('30 percent of 200', () => {
        expect(getPercents(30, 200)).toBe(60);
    })

    test('-30 percents of 200', ()=> {
        expect(getPercents(-30,200)).toBe(-60);
    })

    test('test with some empty string in parameters', () => {
        expect(getPercents('', '')).toBe(0);
    })

    test('test with not empty string in parameters', ()=> {
        expect(getPercents('x','y')).toBeNaN();
    })
})