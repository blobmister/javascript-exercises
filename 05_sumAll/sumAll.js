const sumAll = function(a, b) {
    let sum = 0;

    // Check if input was valid
    if (!(Number.isInteger(a) && Number.isInteger(b))) {
        return "ERROR";
    }

    if(a < 0 || b < 0) {
        return "ERROR";
    }

    // Swap variables if larger number is first
    if (b < a) {
        let c = a;
        a = b;
        b = c;
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
