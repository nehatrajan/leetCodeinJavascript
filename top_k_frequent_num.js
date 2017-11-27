/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    var wordMap = {};
    var result = [];
    for (var i=0; i < words.length; i++){
        if (words[i] in wordMap){
            wordMap[words[i]] += 1;
        }else {
            wordMap[words[i]] = 1;
        }
    }
    sortedMap = Object.keys(wordMap).sort(function(a,b){
        if(wordMap[b] === wordMap[a]){
        		return a !== b ? a < b ? -1 : 1 : 0
        }
        return wordMap[b]-wordMap[a];
    });
    return Object.entries(sortedMap).slice(0,k).map(entry => entry[1]);
};
