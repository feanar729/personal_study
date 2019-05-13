// 프로그래머스 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
function solution(priorities, location) {
  let finalArr = [];
  priorities.map((val, index, arr) => {
    // console.log(val, index, arr[index + 1]);
    // if (val > arr[index + 1]) console.log(val);
  });

  const test = priorities.reduce((acc, val, index, arr) => {
    return Math.max(acc, val);
  });
  finalArr.push(test);
  // console.log(test, finalArr);
}

const test = solution([2, 1, 3, 2], 0);
// console.log(test);

// Code Wars : Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
  // do magic
  const filtering = arr.filter(val => {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
  for (let val of filtering) {
    return val;
  }
}

const test1 = findUniq([0, 1, 0]); // 1
const test2 = findUniq([1, 1, 1, 2, 1, 1]); // 2
const test3 = findUniq([3, 10, 3, 3, 3]); // 10

// console.log(test1);

// -------------------------------------------------------------------------------------
// Best Practice
// -------------------------------------------------------------------------------------

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
