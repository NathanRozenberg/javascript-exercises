const palindromes = function (input) {
    let newinput = cleanString(input)
    let palinCheck = true
    for(i=0; i < Math.floor(newinput.length/2); i++){
        if (newinput[0+i] != newinput[newinput.length -1 - i]){
            palinCheck = false
        }
    }
    return palinCheck
};

function cleanString(input){
    let strarray = input.toLowerCase().split("")
    strarray = strarray.filter((letter) => letter.match(/[a-z0-9]/i));
    let output = ""
    strarray.forEach(element => output += element);
    return output
}

// Do not edit below this line
module.exports = palindromes;
