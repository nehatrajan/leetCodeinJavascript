
var groupAnagrams = function(strs) {
    if (strs.length < 2){
        return strs;
    }
    var map = {};
    for (var i=0; i < strs.length; i++){
        var arr = strs[i].split('');
        arr.sort();
        var sortedString = arr.join('');
        if (sortedString in map){
            map[sortedString].push(strs[i]);
        }else {
            map[sortedString] = [strs[i]];
        }
    }
    var result = [];
    for (var group in map){
        result.push(map[group]);
    }
    return result;
}
