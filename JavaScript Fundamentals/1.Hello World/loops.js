// let i = 3;
// while (i) {
//   console.log(i);
//   i--;
// }

// // while birinchi shartni bajarib keyin hisob kitobni qiladi

// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while(a < 5);

// Oldin kod ishga tushadi va natija yakunlangandan so'ng shart bo'yicha tekshiradi

// let b = 0;
// for (b; b < 6; b++) {
//   console.log(b)
// }
// console.log(b)

// shart bajarilmasa sikldan chiqadi va o'zgaruvchining oxirgi qiymatini console ga chiqaradi

// for (let i = 0; i < 10; i++) {
//   // if true, skip the remaining part of the body
//   if (i % 2 == 0) continue;

//   console.log(i); // 1, then 3, 5, 7, 9
// }

// for (let i = 0; i <= 10; i++) {
//   if(i% 2 == 0)

//   console.log(i)
// }

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let result = +prompt('100 dan katta son kiriting!','');

// for(result; result > 100; result++ ) {
//   console.log("hello")
// }

// let n = 10;

// for(let i = 2; i <= n; i++) {

//   for(let j = 2; j < i; j++) {
//     if(i % j == 0)
//   }
//   console.log(i)
// }

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
