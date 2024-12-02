const reverseString = function(str) {
    let strAr = new Array();

    // Generating array of characters
    for (let i = 0; i < str.length; i++) {
        strAr.push(String(str).charAt(i));
    }

    let reverseAr = new Array();

    // Reversing the array
    for (let i = 0; i < str.length; i++) {
        reverseAr[i] = strAr[strAr.length - (i + 1)];
    }

    //Putting array back to string
    let outStr = "";
    for (let i = 0; i < reverseAr.length; i++) {
        outStr += reverseAr[i];
    }

    return outStr;

};

// Do not edit below this line
module.exports = reverseString;
