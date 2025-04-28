// while1.js
// 1 ~ 10 까지의 값중에서 홀수값만 콘솔에 출력.(for문)
for (let i = 1; i <= 10; i++) {
  if (i % 2) {
    // console.log(i);
  }
}

// 반복횟수 상관없이 조건을 만족할 동안 반복.
// let no = 1;
// while (true) {
//   if (no % 2) {
//     console.log(no);
//   }
//   if (no >= 10) {
//     break; // 반복종료.
//   }
//   no++; // 증감.
// }
// 임의의 값(0 ~ 100) 값을 생성하다가 30보다 작은 값이 반복종료
let running = true;
while (running) {
  let num = Math.floor(Math.random() * 101); // 0 <= x < 101
  console.log(num);

  if (num == 100) { // 종료조건.
    // break;
    running = false;
  }
}
console.log("end of prog.");