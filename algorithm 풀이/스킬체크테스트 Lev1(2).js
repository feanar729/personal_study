// 프로그래머스 쇠막대기
// https://programmers.co.kr/learn/courses/30/lessons/42585

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
