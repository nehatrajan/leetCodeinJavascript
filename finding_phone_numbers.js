function getPhoneNumbers(number, firstFew) {
    if (number.length == 0) {
        console.log(firstFew);
    } else {
        for (var i = 0; i < number.length; i++) {
            var currentLetter = number.substring(i, i + 1);
            var rest = number.replace(currentLetter,"");
            var newfirstFew = firstFew.concat(currentLetter);
            getPhoneNumbers(rest,newfirstFew);
        }
    }
}

function getPhoneNumbersInSameArea(number){
    // will make the first three digits as constant and give permutations of the other 7 digits
    var area = number.substring(0,3);
    var phoneNumber = number.replace(area,"");
    getPhoneNumbers(phoneNumber,area);
}
getPhoneNumbersInSameArea('1234567890');
