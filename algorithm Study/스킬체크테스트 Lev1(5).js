// 프로그래머스 다리를 지나는 트럭 [미해결]
// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  return answer;
}

// Code Wars : Directions Reduction (5kyu)
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
// https://repl.it/@megan_fisher/Solution-Directions-Reduction[참고]

function dirReduc(dirs) {
  const cancelMap = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  const test = dirs.map((val, index) => {
    if ((val, cancelMap[dirs[index + 1]])) dirs.splice(index, 2);
    else return val;
  });
  console.log(test);
}

const test1 = dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']);
// const test2 = dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']);
// const test3 = dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']);

// console.log(test1); // ["WEST"]
// console.log(test2); // ["NORTH", "WEST", "SOUTH", "EAST"]
// console.log(test3); // []
