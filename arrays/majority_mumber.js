/** 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var numMap = {};
    if (nums.length === 1) {
        return nums[0];
    }
    for (var i=0; i < nums.length; i++) {
        if (nums[i] in numMap) {
            numMap[nums[i]] += 1;
            if (numMap[nums[i]] >= nums.length/2) {
                return nums[i];
            }
        } else {
            numMap[nums[i]] = 1;
        }
    }

};
