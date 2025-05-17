// while2.js
// 사용자에게 1 ~ 10까지 임의의 수를 입력.
// 범위밖의 값을 입력하면 종료. 입력값의 누적합을 콘솔출력.
let sum = 0;

while (true) {
  let num = parseInt(prompt("1 ~ 10까지 임의의 수를 입력."));
  // 종료조건.
  if (num < 1 || num > 10) {
    break;
  }
  // 실행.
  sum += num;
} // end of while.
console.log(`누적값은 ${sum} 입니다.`);