
function getPhoneNumbers(string) {
    if(string.length < 2) {
        return string;
    }
    var phoneNumbers = [];
    for (var i=0; i< string.length; i++) {
        var char = string[i];
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length);
        for (var subPermutation of getPhoneNumbers(remainingString)){
            var temp = char + subPermutation;
            phoneNumbers.push(temp)
        }

    }
    return phoneNumbers;
}

console.log(getPhoneNumbers('0123456789'));
