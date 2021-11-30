



//Binary search

var nums = [-20,-2,0,12,13,50,75]; // Sorted ascending
let target = 75;

//search(nums,target);

//search2(nums,target);


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target,left=0) { //more efficient
    
    if(nums == undefined || nums.length ==0){
       // console.log("empty arr");
        return -1;
    }
        
   var len = nums.length;
   var mid = Math.floor(len/2)
   //console.log(mid,nums)

   if(nums[mid] == target){
       return left+mid;
   }else if(mid ==0){
       return -1; 
   }else if(nums[mid] > target ){
       return search(nums.splice(0,mid),target,left);
   }else{
       return search(nums.splice(mid),target,left+mid);
   }   
   
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search2 = function(nums, target,left=0) { //more efficient
    
    if(nums == undefined || nums.length ==0){
       // console.log("empty arr");
        return -1;
    }
        
   var len = nums.length;
   var mid = Math.floor(len/2)
   console.log(mid,nums)

   if(nums[mid] == target){
       return left+mid;
   }else if(mid ==0){
       return -1; 
   }else if(nums[mid] > target ){
       return search2(nums.splice(0,mid),target,left);
   }else{
       return search2(nums.splice(mid+1),target,left+mid+1);
   }   
   
};



var start = new Date().getTime();

    console.log(search(nums,target))
    
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);


start = new Date().getTime();

    console.log(search2(nums,target))
    
end = new Date().getTime();
time = end - start;
console.log('Execution time2: ' + time);
