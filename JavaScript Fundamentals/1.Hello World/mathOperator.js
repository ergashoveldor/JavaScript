// 'use strict';

alert("I am JavaScript");
console.log('Assalamu alaykum')

// o'zgaruvchini nusxalash
let name = 'John';
let admin;

admin = name;
console.log(name); // John
console.log(admin); // John

// // camelCase orqali o'zgaruvchilarni e'lon qilish
const birthDay = '11.12.1990';
const age = someCode(birthDay);

const userName = 'Eldor';
console.log(`Hello ${userName}`); // Hello Eldor

let isGreator = 5 > 2;
console.log(isGreator) // true

let name = 'Ilya';
console.log(`Hello ${1}`); // Hello 1
console.log(`Hello ${"name"}`); // Hello name
console.log(`Hello ${name}`); // hello Ilya

// alert | propmt | confirm bularning barchasi  - funksiya

let result = prompt('sizning  yoshingiz nechida?', '');
alert(`Mening yoshim ${result} da`);

let isBoss = confirm('Siz bosmisiz?');
alert(isBoss);

let userName = prompt('Sizning ismingiz nima?', '');
alert(`Mening ismim ${userName}`);

// Ma'lumot turlari

let value = true;
console.log(typeof value); // Boolean

value = String(value);
console.log(typeof value); // String

let str = '123';
console.log(typeof str); // String

str = Number(str);
console.log(typeof str); // Number

console.log(typeof undefined, typeof null) // undefined, object
console.log(Boolean("")) // false
console.log(Boolean("Hello")); // true
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
console.log(Number(null)) // 0

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true));  // 1
console.log(Number()); // 0

console.log(Boolean(0))  // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")) // false
console.log(Boolean("undefined"));  // true


// Matematik operatorlar

/*
  + - * / % **
  unary, binary, operand

  operand - operatorlar qo'llaniladigan narsa. Ma'salan ko'paytirishda 5 * 2 ikkita operand mavjud: chap operand 5 va o'ng operand 2. Ba'zan bu operandlarni argumentlar deb atashadi.

  Agar operator bitta operandga ega bo'lsa, UNARY hisoblanadi. Masalan, unar inkor sonning - ishorasini teskari qiladi.
  let x = 1;
  x = -x;
  console.log(x)

  Agar operator ikkita operandga ega bo'lsa, BINARY hisoblanadi. Xuddi shu minus ikkilik binary usulda ham mavjud.
  let x = 1, y = 3;
  console.log(y - x);
*/

console.log(5 % 2);
console.log( 5 ** 2);
console.log(8 ** (1/3));

let s = "my" + "string";
console.log(s);

// agar operandlardan biri string bo'lsa ikkinchisi ham stringga aylantiriladi va qo'shiladi. Bunda birinchi yoki ikkinchi operand string bo'lishi ahamiyatsiz
console.log('1' + 2); // 12
console.log(2 + '1'); // 21
console.log(2 + 2 + '1');  // 41
console.log('1' + 2 + 5); // 125
console.log(6 - '2'); // 4
console.log( '6' / '2'); // 3

let x = 1;
console.log(typeof +x); // 1  type Number

let y = -2;
console.log(typeof +y); // -2 type Number

console.log(typeof +true); // 1 type Number
console.log(typeof +""); // 0 type Number

// Number va +unary ni vazifasi bir xil

let apples = '2';
let oranges = '3';

console.log(typeof apples + oranges); // 23 type string

// birinchi navbatda unar plyuslar qo'llaniladi, ular satrlarni raqamlarga aylantiradi, so'ngra ikkilik plyus ularni jamlaydi.
console.log(+apples + +oranges); // 5 type number
console.log(Number(apples) + Number(oranges)); // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0

let a, b, c;
a = b = c = 2 + 2;
console.log(a, b, c) // 4 4 4 

let a,b,c;
c = 2 + 3;
a = c;
b = c;
console.log(a,b,c) // 5 5 5 


let n = 2;
n = n + 5;
n = n * 2;
console.log(n) // 14


let k = 2;
k *= 3 + 7;
console.log(k) // 20


// Increment ++  1 ga oshiridi
let counter = 2;
counter++;
console.log(counter); // 3

// Decrement --  1 ga kamaytiradi
let counter = 5;
counter--;
console.log(counter); // 4

// Increment va decrement faqat o'zgaruvchilarga qo'llanilishi mumkin
// counter++  postfiks shakli, eski qiymatni qaytaradi
// ++counter prefiks shakli, yangi qiymatni qaytaradi

let counter = 7;
let a = ++counter;
console.log(a) // 8

let counter = 10;
let a = counter++;
console.log(a); // 10

let counter = 0;
counter++;
++counter;
console.log(counter); // 2

let counter = 1;
console.log(2* counter++); // 2
console.log(2 * ++counter); // 6

let a = (1+2,3+4);
console.log(a) // 3+4=7


let a=1, b=1;
let c = ++a;
let d = b++;
console.log(c, d); // 2, 1

let a = 2;
let x = 1 + (a *= 2);
console.log(x) // 5

console.log("" + 1 + 0) // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2);  // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // -9  5
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2

let num1 = Number(prompt("First number", ''));
let num2 = Number(prompt("Second number", ""));
alert(num1 + num2);
