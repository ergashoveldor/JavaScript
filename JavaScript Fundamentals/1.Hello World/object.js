// let user = {
//   name: "Eldor",
//   age: 22,
//   isAdmin: true,
//   "likes birds": true,
// };

// delete user.age;

// user["likes birds"] = false;

// delete user["likes birds"];
// console.log(user["likes birds"]);
// // console.log(user.name, user.age, user.isAdmin);

// let key = "like birds";
// user[key] = true;
// console.log(user[key]);

// let user = {
//   name: "John",
//   age: 25,
// };
// let key = prompt("Iltimos ismingizni kiriting", "name");

// alert(user[key]);

// Computed properties - HIsoblangan xususiyatlar

// let meva = prompt("Yaxshi ko'rgan mevangiz nomini kiriting", "olma");

// let bag = {
//   [meva]: 5,
// };
// alert(bag.olma);

// let fruit = "apple";
// let bag = {
//   [fruit + "Computers"]: 5,
// };

// console.log(bag);

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// let user = makeUser("Eldor", 22);
// console.log(user);
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

// console.log(obj.for + obj.let + obj.return);

// let obj = {
//   0: "test",
// };
// console.log(typeof obj["0"]);
// console.log(typeof obj[0]);

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__);

// let user = {};
// console.log(user.noSuchProperty === undefined);

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = "name";

// console.log("age" in user);
// console.log(key in user);

// let obj = {
//   test: undefined,
// };

// console.log(obj.test);
// console.log("test" in obj);

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   console.log(user[key]);
//   console.log(key);
// }

// let phoneNumber = {
//   49: "England",
//   41: "Portugal",
//   98: "Uzbekistan",
//   1: "USA",
// };

// for (let number in phoneNumber) {
//   // console.log(number);
//   console.log(phoneNumber[number]);
// }

// let phoneNumber = {
//   "+45": "Portugal",
//   "+98": "Uzbekistan",
//   "+1": "USA",
//   "+75": "Qatar",
// };
// for (let number in phoneNumber) {
//   console.log(number, phoneNumber[number]);
// }

// let user = {
//   name: "John",
//   age: 25,
//   job: "developer",
// };
// let otherUser = user;

// otherUser.name = "Eldor";

// console.log(otherUser);

// let a = {};
// let b = {};
// console.log(a == b);

// let user = {
//   name: "John",
//   age: 25,
//   job: "developer",
// };

// let clone = {};

// for (let key in user) {
//   clone[key] = user[key];
//   console.log(clone);
// }

// clone.name = "Eldor";

// console.log(clone);

// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = Object.assign({}, user);
// console.log(clone);

// const user = {
//   name: "John",
// };

// user.name = "Eldor";

// console.log(user);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum = sum + salaries[key];
}
console.log(sum);
