// 프로그래머스 프린터 [미해결]
// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
// function solution(priorities, location) {
//   let finalArr = [];
//   priorities.map((val, index, arr) => {
//     // console.log(val, index, arr[index + 1]);
//     // if (val > arr[index + 1]) console.log(val);
//   });

//   const test = priorities.reduce((acc, val, index, arr) => {
//     return Math.max(acc, val);
//   });
//   finalArr.push(test);
//   // console.log(test, finalArr);
// }

// const test = solution([2, 1, 3, 2], 0);
// console.log(test);

// 참고 및 수정  | 참고 : https://bubobubo003.tistory.com/66
function solution(priorities, location) {
  let answer = 0;
  let tasks = priorities.map((v, i) => ({
    bool: i === location,
    val: v,
  }));
  while (true) {
    let cur = tasks.splice(0, 1)[0];
    if (tasks.some(t => t.val > cur.val)) {
      tasks.push(cur);
    } else {
      answer++;
      if (cur.bool) return answer;
    }
  }
}

let priorities = [2, 1, 3, 2];
let location = 2;

console.log(solution(priorities, location));

// Code Wars : Directions Reduction (5kyu) [미해결]
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
