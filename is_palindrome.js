/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var strippedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (var i=0; i < strippedString.length/2; i++){
        if (strippedString[i] !== strippedString[strippedString.length-1-i]){
            return false;
        }
    }
    return true;
};

