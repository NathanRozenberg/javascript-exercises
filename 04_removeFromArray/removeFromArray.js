const removeFromArray = function() {
    let array = arguments[0]
    let toBeRemoved = Array.from(arguments).slice(1)
    let output = []
    for(i=0; i < array.length; i++){
        if (!toBeRemoved.includes(array[i])){
            output.push(array[i])
        }
    }
    return output
};

// Do not edit below this line
module.exports = removeFromArray;
