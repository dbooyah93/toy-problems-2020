// Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

var canJump = function(nums) {
  const hop = function ( arr ) {
    if ( arr.length === 1 ) {
      return true;
    } else {
      for ( let i = 1; i <= arr[0]; i++ ) { // itteratting over current hop
        return hop( arr.slice( i ) ); // recursive call
      }
    }
    return false;
  }
  return hop( nums );
};


let test = [3,2,1,0,4];
console.log( canJump( test ) );