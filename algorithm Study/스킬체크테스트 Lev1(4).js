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

function solution(priorities, location) {
  let answer = 0;
  let tasks = priorities.map((v, i) => ({
    bool: i === location,
    val: v,
  }));
  /*
      기존의 배열형태에서 현재 위치하고있는 인덱스정보를 같이 갖고있는 객체로 저장
      location은 현재 대기목록의 위치 여기 예제에서는 배열의 3번째 값.
   [ 
      { lo: false, val: 2 },
      { lo: false, val: 1 },
      { lo: true, val: 3 },
      { lo: false, val: 2 } 
   ]
  */
  console.log(tasks);
  while (true) {
    let cur = tasks.splice(0, 1)[0]; //현재 처리하고자 하는 일을 빼낸다. splice 메서드는 원본 배열의 값을 바꿈.
    console.log(tasks, 'in', cur);
    if (tasks.some(t => t.val > cur.val)) {
      //현재 처리하고자 하는 일보다 더 높은 우선순위의 일이 있는지 비교
      tasks.push(cur); //더 높은 우선순위가 존재할 때, 현재 하고자 하는 일은 맨 뒤로 밀어둠.
    } else {
      //현재 하고자 하는 일이 가장 높은 우선순위일 때
      answer++; //answer 값에 +1을 한다.(인쇄순서를 카운트)
      console.log(cur.bool, 'what', cur);
      if (cur.bool) return answer; //그 일이 문제에서 현재 위치로 주어진 부분일 때 answer 값을 리턴.
    }
  }
}

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
