const fibonacci = function(index) {
    let output = 0
    let lastnumber = 1
    if (index < 0){
        return "OOPS"
    }
    for(i = 0; i < index; i++){
        let start = output
        output += lastnumber
        lastnumber = start
    }
    return output
};

// Do not edit below this line
module.exports = fibonacci;
