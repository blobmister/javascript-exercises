const palindromes = function (word) {
    let punctuation = /[\.,?!]/g;
    word = word.replace(punctuation, "").replace(/ /g, "").toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if(!(word.charAt(i) == word.charAt(word.length - 1 - i))) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
