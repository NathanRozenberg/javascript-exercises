const reverseString = function(input) {
    let letter_array = []
    let output = ''
    for(i=0; i<input.length ; i++){
        letter_array[i] = input[i]
    }
    for(i= letter_array.length - 1; i >= 0; i--){
        output += letter_array[i]
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
