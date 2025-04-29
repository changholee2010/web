// function7.js
console.log(friends);

let friend = {
  name: "김민규",
  age: 20,
  phone: "010-1111-2222"
}

// for .. in => 객체의 속성반복.
for (let prop in friend) {
  console.log(`prop: ${prop}, val: ${friend[prop]}`);
}

// 함수: makeRow(friend={})
function makeRow(friend = { name, age, phone}) {
  let str = "";
  str += "<tr>";
  for (let a in friend) {
    str += `<td>${friend[a]}</td>`;
  }
  str += "</tr>";
  return str;
}

// 출력.
let titles = ["이름", "나이", "연락처"];

let tlist = "";
tlist += "<table class='table'>";
tlist += "<thead><tr>";
for (let title of titles) {
  tlist += `<th>${title}</th>`;
}
tlist += "</tr></thead><tbody>";
// 데이터 -> row생성.
// for(let i = 0; i < friends.length; i++) {
//   tlist += makeRow(friends[i]);
// }
// for .. of => 배열 반복.
for (let friend of friends) {
  tlist += makeRow(friend);
}
tlist += "</tbody></table>";
document.write(tlist);