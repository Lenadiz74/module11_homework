import {getPercents} from './index.js';

describe('getPercents', () => {

    it('function must be defined', () => {
        expect(getPercents).toBeDefined();
    })

    it('30 percent of 200', () => {
        expect(getPercents(30, 200)).toBe(60);
    })

    it('-30 percents of 200', () => {
        expect(getPercents(-30, 200)).toBe(-60);
    })

    it('it with some empty string in parameters', () => {
        expect(getPercents('', '')).toBe(0);
    })

    it('it with not empty string in parameters', () => {
        expect(getPercents('x', 'y')).toBeNaN();
    })
})