// function3exe.js
// 1. max(10, 17) => "2개의 숫자중에서 큰값은 17입니다."
function max(num1 = 0, num2 = 0) {
  if (num1 > num2) {
    console.log(`2개의 숫자중에서 큰값은 ${num1}입니다.`)
  } else {
    console.log(`2개의 숫자중에서 큰값은 ${num2}입니다.`)
  }
}
// 2. sumUpTo(5) => "1부터 5까지의 합은 15입니다."
function sumUpTo(num1 = 0) {
  let sum = 0;
  for (let i = 1; i <= num1; i++) {
    sum += i;
  }
  console.log(`1부터 ${num1}까지의 합은 ${sum}입니다.`)
}

// 3. diff(17, 34) => "두수의 차는 17입니다."
function diff(num1 = 0, num2 = 0) {
  let result = 0;
  if (num1 > num2) {
    result = num1 - num2;
  } else {
    result = num2 - num1;
  }
  console.log(`두수의 차는 ${result}입니다.`)
}

// 기능호출🌞.
max(10, 4);