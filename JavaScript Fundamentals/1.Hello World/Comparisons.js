// stringlarni taqqolash
/*
  Satr boshqasidan kattaroq yoki yo'qligini bilish uchun JavaScript "lug'at" yoki "leksikografik" deb ataladigan tartibdan foydalanadi.

Boshqacha qilib aytganda, satrlar harfma-harf taqqoslanadi.
*/

//

// console.log('Z' > 'A'); // true
// console.log(01011010 > 01000001); // true
// console.log('Glow' > 'Glee'); // true
// console.log("Bee" > "Be"); // true
// console.log(01100101 > 01101111); // false

let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true!
console.log(a === b); // false
console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(
  5 > 4, // true
  "apple" > "pineapple", // false
  "2" > "12", // false
  undefined == null, // true
  undefined === null, // false
  null == "\n0\n", // false
  null === +"\n0\n"
); // false

console.log(6 == "6"); // true
console.log(6 === "6"); // false

// === data type bilan tekshiradi
