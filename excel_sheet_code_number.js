/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    return s.split('').reduce(function(result, elem, index){
        return result*26 + (elem.charCodeAt()-'A'.charCodeAt()+1);
    }, 0);
    
};
