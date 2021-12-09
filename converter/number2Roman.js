
exports.convertNumber2Roman = (input) => {

    // if (input <= 0) {
    //     return "Invalid input";
    // }
    // if (input > 3999){
    //     return "Invalid input";
    // }
    // if (!Number.isInteger(input)){
    //     console.log(Number.isInteger(input));
    //     return "Invalid input";
    // }
    if (input <= 0 || input > 3999 || !Number.isInteger(input)) {
        return "Invalid input";
    }

    // if (input === 1){
    //     return ("I");
    // }
    // if (input === 2){
    //     return ("II");
    // }
    // if (input === 3){
    //     return ("III");
    // }

    // if (input > 0 && input < 4){
    //     let i=1, result='I';
    //     while(i != input) {
    //         result=result.concat('I');
    //         i++;
    //     }
    //     return (result);
    // }
    
    let arr = [
        {number:1, roman: "I"},
        {number:4, roman: "IV"},
        {number:5, roman: "V"},
        {number:9, roman: "IX"},
        {number:10, roman: "X"},
        {number:40, roman: "XL"},
        {number:50, roman: "L"},
        {number:90, roman: "XC"},
        {number:100, roman: "C"},
        {number:400, roman: "CD"},
        {number:500, roman: "D"},
        {number:900, roman: "CM"},
        {number:1000, roman: "M"}
        ];
    
    let matched_num = arr.filter( (outputArr) => {
        if(outputArr.number == input){
            return outputArr.number
        }
    });

    if (matched_num.length > 0) {
        return(matched_num[0].roman);
    } else {
        let numeral="";
        while ( input > 0 ) {
            let filtered_arr = arr.filter( (outputArr) => {
                if(outputArr.number <= input){
                    return outputArr.number
                }
            });
            let last_index_value = filtered_arr.pop();
            let full = Math.floor(input / last_index_value.number)
        
            for(let i = 0; i<full; i++){
                numeral +=last_index_value.roman
            }
            input = input % last_index_value.number
        }
        return(numeral);
    }
    
};