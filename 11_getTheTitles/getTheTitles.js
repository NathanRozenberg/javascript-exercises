const getTheTitles = function(input) {
    let output = []
    input.forEach(element => {
        output.push(element.title)
    });
    return output
};

// Do not edit below this line
module.exports = getTheTitles;
