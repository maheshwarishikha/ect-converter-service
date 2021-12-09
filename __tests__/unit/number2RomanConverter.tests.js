const Converter = require("../../converter/number2Roman");

it ("converter function should exist", () => {
    expect( typeof(Converter.convertNumber2Roman)).toBe ("function");
});

describe("Validate Input", () => {
    it ("input should not be 0", () => {
        expect(Converter.convertNumber2Roman(0)).toBe ("Invalid input");
    });
    
    it ("input should not be greater than 3999", () => {
        expect(Converter.convertNumber2Roman(4000)).toBe ("Invalid input");
    });
    
    it ("input should not be string", () => {
        expect(Converter.convertNumber2Roman('testString')).toBe ("Invalid input");
    });
    
    it ("input should not be float", () => {
        expect(Converter.convertNumber2Roman(1.1)).toBe ("Invalid input");
    });
    
    it ("input should not be negative integer", () => {
        expect(Converter.convertNumber2Roman(-2)).toBe ("Invalid input");
    });
    
    // it ("input should be positive integer", () => {
    //     expect(Converter.convertNumber2Roman(2)).toBe ("Valid input");
    // });
})

describe ("For input '1 to 3'", () => {
    it("should return 'I' on input 1", () => {
        expect(Converter.convertNumber2Roman(1)).toBe ("I");
    });
    it("should return 'II' on input 2", () => {
        expect(Converter.convertNumber2Roman(2)).toBe ("II");
    });
    it("should return 'III' on input 3", () => {
        expect(Converter.convertNumber2Roman(3)).toBe ("III");
    });
});

describe ("Tests for L, M, C, D, X, V and some more", () => {
    it("should return 'V' on input 5", () => {
        expect(Converter.convertNumber2Roman(5)).toBe ("V");
    });
    it("should return 'L' on input 50", () => {
        expect(Converter.convertNumber2Roman(50)).toBe ("L");
    });
});

describe ("Test for any other number", () => {
    it ("should return 'VIII' on input '8'", () => {
        expect (Converter.convertNumber2Roman(8)).toBe ("VIII");
    });
    it ("should return 'XVII' on input '17'", () => {
        expect (Converter.convertNumber2Roman(17)).toBe ("XVII");
    });
    it ("should return 'CCXXXVI' on input '236'", () => {
        expect (Converter.convertNumber2Roman(236)).toBe ("CCXXXVI");
    });
    it ("should return 'MMMCMXCIX' on input '3999'", () => {
        expect (Converter.convertNumber2Roman(3999)).toBe ("MMMCMXCIX");
    });
});
