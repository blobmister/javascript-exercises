const getTheTitles = function(ar) {
    let outAr = [];


    for (let i = 0; i < ar.length; i++) {
        outAr.push(ar[i]['title']);
    }

    return outAr;
};

// Do not edit below this line
module.exports = getTheTitles;
