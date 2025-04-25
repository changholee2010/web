// variable2.js
let num1 = 100; // int num1;
console.log(typeof num1);
num1 = "hundred";

let num_2 = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date(); // O vs. o
console.log(typeof birthOfDate);

let isOK = true;
isOK = 10 < 5; // false.
isOK = 10 > 5; // true.

if (isOK) {
  // isOK 값이 true일 경우 {} 블럭을 실행.
  console.log('isOK는 참입니다.');
}

// 배열: [100, 200, 250] 여러개의 값을 저장.
let numAry = [10, 20, 25, 31]; // 인덱스는 0부터 시작.
console.log(numAry[0]);

let strAry = ["Hello", "Nice", "Good", 300]; // 가능하지만 안쓰도록 합시다.2025.04.25

// 객체(object). 키: 값의 형태.
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  personInfo: function () { // 함수는 기능.
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age);
  }
}
person.personInfo(); // 메소드 호출(call)

console.log(person.name);

// undefied, null
let whatIsThis;
whatIsThis = document.querySelector('#userValu');
console.log(typeof whatIsThis);