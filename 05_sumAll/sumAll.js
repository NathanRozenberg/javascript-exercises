const sumAll = function(num1, num2) {
    if(!isValidNumber(num1) || !isValidNumber(num2)){
        return "ERROR"
    }
    else{
        let smaller = num1 < num2 ? num1 : num2
        let larger = num1 > num2 ? num1 : num2
        let output = 0
        for(i=smaller; i <= larger; i++){
            output += i
        }
        return output
    }
};

function isValidNumber(input){
    if(typeof(input) === 'number' && Number.isInteger(input) && 
    input >= 0){
        return true
    }
    else{
        return false
    }
}

// Do not edit below this line
module.exports = sumAll;
