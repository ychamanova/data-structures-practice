/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 
    l    r
  [[1,2, 3,4],
t [11, 12, 5],
b [10, 13, 6]
  [ 9, 8, 7]]
*/

var generateMatrix = function (n) {
  const ans = new Array(n);
  for (let i = 0; i < n; i++) {
    ans[i] = [];
  }
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  let squared = n * n;

  let start = 1;

  while (start <= squared) {

    for (let i = left; i <= right; i++) {
      ans[top][i] = start;
      start++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      ans[i][right] = start;
      start++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      ans[bottom][i] = start;
      start++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      ans[i][left] = start;
      start++;
    }
    left++;
  }
  return ans;
};