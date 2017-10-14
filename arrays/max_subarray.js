/*param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    var currentSum = maxSum = nums[0];
    for (var i=1; i<nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};
