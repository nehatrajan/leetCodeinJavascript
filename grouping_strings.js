function groupStrings(strings){
	var result = [];
  var map = {};
  for (var string of strings){
  		var key = '';
      for (var i=1; i<string.length; i++){
      	offset = string.charCodeAt(i)-string.charCodeAt(i-1);
        key += offset < 0 ? offset+26 : offset;
      }
      if (!(key in map)){
      		map[key] = [];
      }
      map[key].push(string);
  }
  return Object.keys(map).reduce(function(result, key){
  	result.push(map[key]);
    return result;
  }, []);
}

console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
