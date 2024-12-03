const removeFromArray = function(ar) {
    outAr = new Array();

    for (let i = 0; i < ar.length; i++) {
        let isntDupe = true;
        for (let j = 1; j < arguments.length; j++) {
            if (ar[i] === arguments[j]) {
                isntDupe = false;
                break;
            }
        }

        if (isntDupe) {
            outAr.push(ar[i]);
        }
    }

    return outAr;
};

// Do not edit below this line
module.exports = removeFromArray;
