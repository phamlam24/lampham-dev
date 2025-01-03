import { Color } from '../../app/classes/helper';

describe('Color', () => {
    it('should return the correct hex value for black', () => {
        const black = new Color();
        black.red = 0;
        black.green = 0;
        black.blue = 0;
        expect(black.getHex(black)).toBe('#000000');
    });

    it('should return the correct hex value for white', () => {
        const white = new Color();
        white.red = 255;
        white.green = 255;
        white.blue = 255;
        expect(white.getHex(white)).toBe('#FFFFFF');
    });

    it('should return the correct hex value for gray', () => {
        const gray = new Color();
        gray.red = 128;
        gray.green = 128;
        gray.blue = 128;
        expect(gray.getHex(gray)).toBe('#808080');
    });

    it('should return the correct hex value for purple', () => {
        const purple = new Color();
        purple.red = 128;
        purple.green = 0;
        purple.blue = 128;
        expect(purple.getHex(purple)).toBe('#800080');
    });

    it('should return the correct hex value for teal', () => {
        const teal = new Color();
        teal.red = 0;
        teal.green = 128;
        teal.blue = 128;
        expect(teal.getHex(teal)).toBe('#008080');
    });

    it('should return the correct hex value for olive', () => {
        const olive = new Color();
        olive.red = 128;
        olive.green = 128;
        olive.blue = 0;
        expect(olive.getHex(olive)).toBe('#808000');
    });
});