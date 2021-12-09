
exports.convertRoman2Number = (input) => {

    if (typeof (input) != 'string'){
        return ("Invalid input");
    } else if (typeof (input) === 'string') {
        let result1 = input.match(/[^IVXLCDM]/g);
        let result2 = input.match(/[I]{4}|[V]{4}|[X]{4}|[L]{4}|[C]{4}|[D]{4}|[M]{4}/g);
        if ( result1 != null && result2 != null ){
            return ("Invalid input");
        } else {
            // return ("Valid input");
            let converted_number = roman_to_number(input);
            return (converted_number);
        }
    }
}

roman_to_number = (roman_number) => {
    let number;
    if ( roman_number.length === 1 ) {
        number = char_to_integer(roman_number);
        if ( number != -1 ) {
            return(number);
        }
    } else {
        number = char_to_integer(roman_number.charAt(0));
        let prev, curr;
    
        for(let i = 1; i < roman_number.length; i++){
            curr = char_to_integer(roman_number.charAt(i));
            prev = char_to_integer(roman_number.charAt(i-1));
            if( curr <= prev ){
                number += curr;
            } else {
                number = number - prev*2 + curr;
            }
        }
        return number;
    }      
};

char_to_integer = (c) => {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
};