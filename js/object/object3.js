// object3.js
// indexOf()

let numArr = [10, 21, 33, 54, 16, 73]
let result = numArr.indexOf(333); // -1은 찾는 요소가 없음.
console.log(result);

let strAry = ["홍길동", "김길동", "홍길순"];
strAry.forEach(function (item) {
  if (item.indexOf("홍") == 0) { // 성씨가 "홍"씨인 사람.
    console.log(item);
  }
});

// numAry(변수) => 10 ~ 50 사이의 값을 10개 저장. => 콘솔에 출력(forEach);
let numAry = []; // 변수선언.
for (let i = 1; i <= 10; i++) {
  let no = Math.floor(Math.random() * 41) + 10;
  numAry.push(no); // 배열에 추가.
}
// numAry = [10, 20, 60]
// 10 ~ 50 사이의 값이 정상적으로 생성 체크 : every()
result = numAry.every(function (item) {
  if (item >= 10 && item <= 50) {
    return true;
  } else {
    return false;
  }
  // return item >= 10 && item <= 50;
})
console.log(result);

numAry.forEach(function (item) {
  console.log(item);
})