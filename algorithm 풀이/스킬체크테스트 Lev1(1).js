// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.
// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.

// 문제 1
function solution(s) {
  if (s.length === 6 || s.length === 4) {
    for (let val of s) {
      if (val.match(/^\\d+$/)) return false;
      else return true;
    }
  }
}

// solution Final
function solutionFinal(s) {
  if ((s.length == 4 || s.length == 6) && s.match(/^[0-9]+$/)) {
    return true;
  }
  return false;
}
// console.log(solution("0234a"));
// console.log(solutionFinal("0234a"));

// 문제 2
function solution2(s) {
  let pNum = 0;
  let yNum = 0;
  for (let val of s) {
    const str = val.toLowerCase();
    if (str === "p") pNum++;
    else if (str === "y") yNum++;
  }
  if (pNum === yNum) return true;
  else if (pNum !== yNum) return false;
  else if (pNum === 0 && yNum === 0) return true;
}

// console.log(solution2("yooyopp"));
// console.log(solution2("yooyo"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ?? Pass
function findNb(m) {
  // your code
  let sum = 0;
  for (n = 0; sum < m; n++) {
    sum = Math.pow(n * (n + 1), 2) / 4;
  }
  if (sum === m) return n - 1;
  else return (-1);
}

/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  const filtering = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  return array.map((sum) => sum % 2 ? filtering.shift() : sum);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));