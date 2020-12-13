/**
 * 题目：
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 */



 /**
  * 解法1：临时数组，若临时数组中不存在，则false， 若存在，则true
  * @param {Array} nums 
  */
 var containsDuplicate = function(nums){
     var tmp = [];
     if(nums.length < 1){
        return false;
     }else{
        for(var i = 0; i < nums.length; i++){
           if(tmp.indexOf(nums[i]) > -1){
               return true
           } else{
               tmp.push(nums[i]);
                if(i === nums.length -1){
                    return false
                }
           }
        }
     }
 };


 containsDuplicate([1,2,3,4,1]) //true

 containsDuplicate([1,2,3,4]) // false



/**
 * 解法2：排序数组， 判断相邻元素是否相等
 */
var containsDuplicate2 = function(nums){
    nums.sort(function(a, b){
        return a - b;
    });
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            return true;
        }
        return false;
    }
}


/**
 * 解法3：双指针
 */
var containsDuplicate3 = function(nums){
    for(var i = 0; i < nums.length -1; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true
            }
            if(j === nums.length){
                return false;
            }
        }
    }
}