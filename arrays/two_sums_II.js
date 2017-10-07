ram {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var lo = 0; var high = numbers.length-1;
    while(numbers[lo] + numbers[high] !== target) {
        if (numbers[lo] + numbers[high] > target) {
            high--;
        } else {
            lo++;
        }
    }
    return [lo+1, high+1]
};
