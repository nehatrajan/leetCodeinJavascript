/** 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numMap = {};
    var num = []
    for (var i=0; i < nums.length; i++) {
        if (nums[i] in numMap) {
            return [numMap[nums[i]], i];
        } else{
            numMap[target-nums[i]] = i;
        }
    }
    return num
};
