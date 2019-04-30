// 프로그래머스 쇠막대기
// https://programmers.co.kr/learn/courses/30/lessons/42585
'use-strict';

function solution(arrangement) {
  let answer = 0;
  let stack = [];
  let arr = arrangement.split('');

  for (let i in arr) {
    if (arr[i] === '(') {
      stack.push(arr[i]);
    } else {
      stack.pop();
      answer += arr[i - 1] === '(' ? stack.length : 1;
    }
  }
  return answer;
}

// Code Wars : Directions Reduction (5kyu) [미해결]
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

const cancelMap = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  EAST: 'WEST',
  WEST: 'EAST',
};

function dirReduc(arr) {
  let changed = false;
  arr.forEach((val, index) => {
    if (val === cancelMap[arr[index]]) {
      console.log(val, index);
      // arr.splice(index, 2);
      // changed = true;
    }
  });
  for (let index in arr) {
    // console.log(arr[index], cancelMap[arr[index]]);
    if (arr[index + 1] === cancelMap[arr[index]]) {
      arr.splice(index, 2);
      changed = true;
    }
  }
  // if array was altered at all
  // recurse to check again for new matches
  return changed ? dirReduc(arr) : arr;
}

const test = dirReduc([
  'NORTH',
  'SOUTH',
  'SOUTH',
  'EAST',
  'WEST',
  'NORTH',
  'WEST',
]);
console.log(test);
