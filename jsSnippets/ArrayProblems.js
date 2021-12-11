/**
 * 
 * Get Second largest element from an array(not-unique)
 *  
 * input >>  [4, 2, 3, 6, 6, 5]
 * Output >> 5
 * 
 *  */

function getSecondLargest(nums) {
    let sortedUniqueArr =[];
    for(let x=0;(x<nums.length && x <2 );x++){
        let temp = null;
        for(let y=0;y<nums.length; y++){
            temp = nums[y]> temp && (sortedUniqueArr.indexOf(nums[y])<0)?nums[y]:temp
        }    

        if(temp){
            sortedUniqueArr.push(temp);
        }
    }
    return(sortedUniqueArr.pop()); 
}

