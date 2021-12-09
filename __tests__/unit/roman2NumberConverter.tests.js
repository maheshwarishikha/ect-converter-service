const Converter = require("../../converter/roman2Number");

it ("converter function should exist", () => {
    expect( typeof(Converter.convertRoman2Number)).toBe ("function");
});

describe("Validate Input", () => {
    // it ("input should be string", () => {
    //     expect (Converter.convertRoman2Number("string")).toBe ("Valid input");
    // });

    it ("input should not be number", () => {
        expect (Converter.convertRoman2Number(123)).toBe ("Invalid input");
    });

    it ("input format should be string", () => {
        expect (Converter.convertRoman2Number(['abc'])).toBe ("Invalid input");
    });

    it ("input should not include any incorrect letter", () => {
        expect (Converter.convertRoman2Number("XYZ")).toBe ("Invalid input");
    });

    // it ("if input is valid", () => {
    //     expect (Converter.convertRoman2Number("XV")).toBe ("Valid input");
    // });
});

describe("if input is I, V, X, L, C, D, M", () => {
    it("should return '1' on input I", () => {
        expect(Converter.convertRoman2Number('I')).toBe (1);
    });
    it("should return '1000' on input M", () => {
        expect(Converter.convertRoman2Number('M')).toBe (1000);
    });
});

describe ("Test for any number excluding IV, IX, XC and more ", () => {
    it("should return '2' on input II", () => {
        expect(Converter.convertRoman2Number('II')).toBe (2);
    });

    it("should return '15' on input XV", () => {
        expect(Converter.convertRoman2Number('XV')).toBe (15);
    });
});

describe ("Test for any number including IV, IX, XC and more ", () => {
    it("should return '19' on input XIX", () => {
        expect(Converter.convertRoman2Number('XIX')).toBe (19);
    });
    
    it("should return '490' on input XD", () => {
        expect(Converter.convertRoman2Number('XD')).toBe (490);
    });
});