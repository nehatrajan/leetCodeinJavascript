/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    var arrayMap = sentence.split(" ");
    arrayMap = arrayMap.map(function(word){
        for (var i=0; i<dict.length; i++){
            if (word.startsWith(dict[i])){
                word = dict[i];
                break;
            }  
        }
        return word;
    });
    return arrayMap.join(" ");
};
