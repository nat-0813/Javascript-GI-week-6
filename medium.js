function search (nums, target) { //the search function takes in an array nums and a target value target as parameters
    const index = nums.indexOf(target);//indexOf method to find the index of the target value in the array
    return index !== -1 ? index : -1;// if the returned index is -1, it means the target value is not present in the array, and we return -1 to indicate that.
}
// test the function
const nums = [4,5,6,7,0,1,2];
const target = 0;
const result = search(nums, target);
console.log(result);