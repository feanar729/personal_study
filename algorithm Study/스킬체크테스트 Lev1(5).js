// 프로그래머스 다리를 지나는 트럭 [미해결]
// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  return answer;
}

// Code Wars : Directions Reduction (5kyu)
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(dirs) {
  let i = 0;
  while (i < dirs.length) {
    if (
      (dirs[i] === 'NORTH' && dirs[i + 1] === 'SOUTH') ||
      (dirs[i] === 'EAST' && dirs[i + 1] === 'WEST') ||
      (dirs[i] === 'SOUTH' && dirs[i + 1] === 'NORTH') ||
      (dirs[i] === 'WEST' && dirs[i + 1] === 'EAST')
    ) {
      dirs.splice(i, 2);
      i--;
    } else {
      i++;
    }
  }

  return dirs;
}

const test = dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']);
console.log(test);
