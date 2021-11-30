
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) { //more efficient
    let pos = -1;
    for(i = 0; i<nums.length;i++){
        pos = nums[i] == target ? i : pos;
    }
    return pos;
   
};

var nums = [-20,-2,0,12,13,50,75]; // Sorted ascending
let target = 75;
console.log(search(nums,target));