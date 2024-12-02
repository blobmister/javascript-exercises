const repeatString = function(str, num) {
    let outstr = "";
    if (num < 0) {
        return "ERROR";
    }

    for (let i = 0; i < num; i++) {
        outstr += str;
    }

    return outstr;
};

// Do not edit below this line
module.exports = repeatString;
