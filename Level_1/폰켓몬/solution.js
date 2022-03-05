function solution(nums) {
  var answer = 0;
  let all = nums.length / 2;
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    if (!stack.includes(nums[i]) && stack.length < all) stack.push(nums[i]);
  }
  answer = stack.length;
  return answer;
};

// 다른 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length > max ? max : arr.length
};