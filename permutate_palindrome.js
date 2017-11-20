function canPermutatePalindrome(s){
var stringMap = {};
var palindromeSum = 0;
for (var i=0; i < s.length; i++){
		if (s[i] in stringMap){
    		stringMap[s[i]] += 1;
    }else {
    		stringMap[s[i]] = 1;
    }
}
console.log(stringMap);
for (var letterCount in stringMap){
	palindromeSum += stringMap[letterCount]%2;
}
	return palindromeSum < 2;
}

console.log(canPermutatePalindrome('neha'));
