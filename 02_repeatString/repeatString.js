const repeatString = function(input,qty) {
    if (qty >= 0){
        let output = ''
        for(i=0; i<qty; i++){
            output = output + input
        }
        return output
    }
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
