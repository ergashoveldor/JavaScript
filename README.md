### JavaScript Info

```JavaScript
    console.log('Rivojlanishni hozirdan boshlang!')
```
## **YouTube kanalimizga obuna bo'ling:**  [InformTech Uz](http://youtube.com/c/InformTech)

[javascript.info](https://javascript.info) - Rasmiy saytiga shu link orqali o'tishingiz mumkin.

#### Esda tuting:
**`HTML`** ga faqat eng oddiy skriptlar yoziladi. Keyinchalik murakkablari alohida fayllarda yoziladi. Alohida faylning afzalligi shundaki, brauzer uni yuklab oladi va   <a href="https://en.wikipedia.org/wiki/Web_cache">`keshda`</a> saqlaydi. Xuddi shu scriptga havola qilingan boshqa sahifalar uni yuklab olish o'rniga keshdan oladi, shuning uchun fayl aslida bir marta yuklab olinadi. Bu trafikni kamaytiradi va sahifalarni tezroq qiladi.

```JavaScript
    <script src="main.js">
      alert("1") // kontent e'tiborga olinmaydi, chunki src o'rnatilgan
    </script>
```

**`O'zgaruvchi`** - bu ma'lumotlar uchun nomlangan xotira. Biz o'zgaruvchilardan turli xil ko'rinishdagi ma'lumotlarni saqlash uchun foydalanishimiz mumkin.

**`Message`** nomli o'zgaruvchini e'lon qilish:

```JavaScript
    let message;
```
Endi biz tayinlash operatoridan foydalanib, unga ba'zi ma'lumotlarni kiritishimiz mumkin:

```JavaScript
    let message;
    message = 'Assalamu Alaykum';

    yoki

    let message = 'Assalamu alaykum';
```

Shuningdek, biz bir qatorda bir nechta o'zgaruvchilarni e'lon qilishimiz mumkin:

```JavaScript
    let user = 'Anvar', age = 25, jobs = 'Dasturchi';
```

Ushbu kod barchasi bitta qatorda yozildi, lekin bunaqa strukturada kod yozish tavsiya etilmaydi.Yaxshiroq o'qilishi uchun har bir o'zgaruvchini alohida qatorga yozishimiz kerak.

```JavaScript
    let user = 'Anvar';
    let age = 25;
    let jobs = 'Dasturchi';
```
Yana qo'shimcha tarzda o'zgaruvchilarni quyidagicha e'lon qilish mumkin:
```JavaScript
    let user = 'Anvar',
        age = 25,
        message = 'Dasturchi';
    
    yoki

    let user = 'Anvar'
      , age = 25
      , message = 'Dasturchi';
```
Texnik jihatdan, bu variantlarning barchasi bir xil vazifani bajaradi.

```JavaScript
    let message;
    message = 'Hello!'; // Qiymat o'zgartirilganda eski ma'lumotlar o'zgaruvchidan o'chiriladi.
    message = 'World!'; 
    console.log(message); // Natija: World!
```
Shuningdek, biz ikkala o'zgaruvchini e'lon qilishimiz va ma'lumotlarni biridan ikkinchisiga nusxalashimiz mumkin:
```JavaScript
    let hello = "Hello World";
    let message;
    // Nusxa qilish
    message = hello;
    console.log(message); // Natija: Hello World
    console.log(hello); // Natija: Hello World
```
### ⚠️ Bir xil nomli o'zgaruvchini ikki marta e'lon qilish xatolikni keltirib chiqaradi.

O'zgaruvchi faqat bir marta e'lon qilinishi kerak.

```JavaScript
    let message = 'Xabar';
    let message = 'Malumot'; // Bu yerda xatolik kelib chiqaradi
```

### O'zgaruvchilarni nomlash

JavaScriptda o'zgaruvchilarni nomlash asosan 2 xil qoidaga asosan nomlanadi:
1. Harflar, raqamlar yoki belgilarni o'z ichiga olishi kerak (`$`, `_` )
2. Birinchi belgi raqam bo'lmasligi kerak

To'g'ri o'zgaruvchi nomiga keltirilgan misollar:

```JavaScript
    let userName;
    let test123;
    let $ = 1;
    let _ = 2;
```

Noto'g'ri o'zgaruvchi nomiga keltirilgan misollar:

```JavaScript
    let 1a;
    let my-name;
```

**Agar so'zda bir nechta so'z bo'lsa odatda camelCase ishlatiladi. Ya'ni so'zlar birin-ketin yoziladi, har bir so'z bosh harf bilan yoziladi: meningKasbimDasturchi**.

⚠️ `apple` va `APPLE` nomli o'zgaruvchilar 2 xil ko'rinishdagi o'zgaruvchilar hisoblanadi.

⚠️ Lotin bo'lmagan harflarga ruxsat beriladi, lekin tavsiya etilmaydi:

```JavaScript
    let имя = '...';
    let 我 = '...';
```
Quyidagi nomlar bilan o'zgaruvchi e'lon qilish mumkin emas, chunki ular JavaScript da boshqa vazifalarni bajaradi:

```JavaScript
    let, class, function, return

    let let = 5; // let deb nomlash mumkin emas
    let return = 12; // return deb nomlash mumkin emas
```

### Doimiy (o'zgarmas) o'zgaruvchini e'lon qilish uchun `let` ni o'rniga `const` dan foydalansak bo'ladi.

```JavaScript
    const myBirthDay = '15.08.1998';
```

`const` o'zgarmas qiymatlarni saqlaydi. Ularni qayta tayinlash mumkin emas.

```JavaScript
    const myBirthday = '18.04.1982';
    myBirthday = '01.01.2001'; // Xatolik!!!
```
Agar dasturchi o'zgaruvchi hech qachon o'zgarmasligiga amin bo'lsa, uni `const` orqali e'lon qilishi mumkin.

### Eslab qolish qiyin bo'lgan qiymatlar uchun katta harf konstantalarni ishlatish qulay

```JavaScript
    const COLOR_RED = "#F00";
    const COLOR_GREEN = "#0F0";
    const COLOR_BLUE = "#00F";
    const COLOR_ORANGE = "#FF7F00";
```
Foydasi:

- `COLOR_ORANGE` ga qaraganda eslash ancha oson `"#FF7F00"`
- Kodni o'qiyotganda, `#FF7F00` ga qaraganda ancha mazmunli `COLOR_ORANGE`

O'zgaruvchilarni nomlash dasturlashning eng muhim va murakkab ko'nikmalaridan biridir. O'zgaruvchilar nomlariga tez-tez nazar tashlasangiz, qaysi kodni tajribali dasturchi va qaysi kodni endi boshlagan dasturchilar tomonidan yozilganligini aniqlash mumkin.

Haqiqiy loyihada ko'p vaqt noldan butunlay alohida biror narsa yozishdan ko'ra mavjud kod bazasini o'zgartirish va kengaytirishga sarflanadi. Bir muncha vaqt boshqa biror narsa qilgandan so'ng ba'zi kodlarga qaytganimizda, yaxshi etiketlangan ma'lumotlarni topish ancha oson bo'ladi. Yoki, boshqacha qilib aytganda, o'zgaruvchilar yaxshi nomga ega bo'lganda.

Iltimos, o'zgaruvchini e'lon qilishdan oldin uning to'g'ri nomlash haqida o'ylab ko'ring. Agar shunday qilsangiz, sizning kodingiz o'zgalar ham o'qiy olishadi.

Ba'zi yaxshi qoidalarga rioya qilish kerak:

 - `userName` , `shoppingCart` kabi odam oʻqiy oladigan nomlardan foydalaning
 -   `a`, `b`, kabi qisqartmalar yoki qisqa nomlardan uzoqroq turing

Oddiy tuyuladimi? Haqiqatan ham shunday, lekin tavsiflovchi va qisqacha o'zgaruvchilar nomlarini yaratish amalda bunday emas😂 

## DATA TYPES haqida maqola O'zbek tilida: [Data types](https://ergashoveldor.medium.com/data-tiplari-data-types-26c2b662bb82) 

\
![Data types](https://miro.medium.com/max/1400/1*H7Cmo_2kCpgBbVAxQm8bDg.jpeg)

Dasturlashda data tiplari muhim tushuncha hisoblanadi. O’zgaruvchilar ustida ishlashni ta’minlash uchun uning tipi haqida ma’lumotga ega bo’lishimiz muhimdir. Data tiplarisiz kompyuterda, masalan, sonni so’zdan farqlab bo’lmaydi.

![data type](https://miro.medium.com/max/1400/1*HuN_T7uPgeQ33Sg05FBH7Q.jpeg)

  Ko'rib turganingizdek data tiplari 2 turga bo'linadi : 
  
  
  1. **Primitive**  


  2. **Non-primitive**
  
  
  
  **Primitiv** tiplarga quyidagilar kiradi :
  `Number, String, Boolean, Null, Undefined, Symbol va BigInt`;
  
  
  
  **Non-primitive** tiplarga quyidagilar kiradi:
  `Object`;
  
  **Primitiv**
  Tiplarning barchasi faqatgina yagona qiymatni qabul qiladi va uni faqat yangi qiymatga almashtirib o'zgartirish mumkin, eski qiymatni o'zgartirolmaymiz. Bunday tiplar ingliz tilida "immutable types" deyiladi. Misol:

  ```JavaScript
  let a, b;
a = 5;
b = a;

console.log('a = ', a); // a = 5
console.log('b = ', b); // b = 5

a = 4;
console.log('a = ', a); // a = 4
console.log('b = ', b); // b = 5
```
  
  
  Keling bularni birin-ketinlik bilan ko'rib chiqamiz!

### Number

   Number -  64 bitli ikkilik formatdagi IEEE 754 ning qiymati (- (2 ^ 53 - 1) va 2 ^ 53 - 1 orasidagi sonlar).
       Sonlar yuqoridagi chegaradagi sonlar bilan birga maxsus quyidagi 3 ta qiymatni ham o'z ichiga oladi: `+ Infinity, -Infinity va NaN ("Not a Number" - "Son emas").`

### String

  JavaScriptda matnli ma'lumotlarni ko'rsatish uchun string turi ishlatilinadi. Stringni quyidagi ko'rinishda yozishimiz mumkin : `"Salom Dunyo", 'Hello World'`. Matnli ma'lumotlarni stringga aylantirishimiz uchun `''` va `""` dan foydalanamiz. String uzunligi bu undagi elementlar sonidir. Misol:
  ```JavaScript
  console.log('Hello World'.length);
  //11
  ```
 Berilgan stringni uzunligi 11 ga teng, ya'ni bunda elementlar soni hisoblanmoqda. `length` property'si - mavjud stringni uzunligini qaytaradi. 

### Boolean

   Ko'pincha, dasturlashda sizga ikkita qiymatdan bittasiga ega bo'lishi mumkin bo'lgan data tip kerak bo'ladi, masalan: 


```
  HA / YO'Q
  ON / OFF
  ROST / YOLG'ON
```

Buning uchun JavaScriptda mantiqiy data tip (Boolean) mavjud. Bu faqat rost (`true`) yoki yolg'on(`false`) qiymatlarni qabul qilishi mumkin.


`Boolean()`  funksiya boshqa tipdagi qiymatni mantiqiy qiymatga o'girib beradi. Misol:

```JavaScript
Boolean(0) // false
Boolean(-1) // true
Boolean(1.2) // true
Boolean('') // false
Boolean('Salom') // true
```

### Null 


  `null` tipini ikkita xususiyati bilan tushunishi kerak:  

```
- null bo'sh yoki mavjud bo'lmagan qiymatdir.
- null tayinlanishi kerak bo'lgan qiymatdir.
let a = null;
console.log(a);
// null
```

### Undefined 

  JavaScriptda qiymati bo'lmagan o'zgaruvchining qiymati `undefined` ga teng. Tipi ham undefined. Misol: 


```JavaScript
  let computer;
  console.log(computer);
  // Undefined
```

 Biz computer degan o'zgaruvchi yaratdik va bu o'zgaruvchining qiymati yo'q. Shuning uchun natija undefined ga teng bo'ladi.

### Symbol 

 Bu sal murakkabroq tip. Bu haqida keyinchalik to'xtalamiz.

### BigInt 

  BigInt turi JavaScriptdagi raqamli primitive bo'lib, u butun sonlarni aniqlik bilan ko'rsatishi mumkin. BigInt yordamida butun son chegarasidan tashqarida ham katta butun sonlarni ishlatishingiz mumkin. BigInt butun sonning oxiriga n qo'shib yoki konstruktorni chaqirish orqali hosil bo'ladi. Misol:  


  ```JavaScript
  const x = 2n ** 53n;
  console.log(x);
  // 9007199254740992n
```
BigInt bilan `+`,`*`,`-`,`**` va `%` operatorlaridan foydalanishingiz mumkin - xuddi Number kabi. BigInt Boolean shaklga o'tkaziladigan holatlarda o'zini number kabi tutadi: `if`, `||`, `&&`, `Boolean`,`!`.

### Null va Undefined orasidagi farq
JavaScriptda `undefined` o'zgaruvchining e'lon qilinganligini anglatadi, ammo hali unga qiymat berilmagan, masalan: 


```JavaScript
var testVar;
console.log(testVar);            // undefined
console.log(typeof testVar);     // undefined
```

`null` esa tayinlash qiymati. U o'zgaruvchiga bo'sh qiymatning ifodasi sifatida berilishi mumkin:  

```JavaScript
var testVar = null;
console.log(testVar);            // null
console.log(typeof testVar);     // object
```

```JavaScript
console.log(null === undefined)     // false
console.log(null == undefined)      // true
console.log(null === null)          // true
```

### Operator typeof

  `typeof` - JavaScript o'zgaruvchisining turini topish uchun foydalanishingiz mumkin. 



```JavaScript
    console.log(typeof "Alisher")                 // "string"
    console.log(typeof 7.89)                      // "number"
    console.log(typeof NaN)                       // "number"
    console.log(typeof true)                      // "boolean"
    console.log(typeof [5,6,7,4])                 // "object"
    console.log(typeof {name:'Ali', age:25})      // "object"
    console.log(typeof new Date())                // "object"
    console.log(typeof function () {})            // "function"
    console.log(typeof myCar)                     // "undefined" 
    console.log(typeof null)                      // "object";   
```

null "object" tipiga mansub bo'lsada, u primitiv tipdir.
 
**Non-primitive**

Keling endi Non-primitive lar haqida so'z yuritsak, yuqorida ko'rsatilganidek Non-primitive type ga faqat `Object` kiradi. Va uni qiymatini bevosita ham o'zgartirsa bo'ladi. Bunday xususiyatga ega type'lar inglizchada "mutable types" deyiladi. Misol:

```JavaScript
const car1 = {name: 'BMW', color: 'blue'};
const car2 = car1;

console.log('car1: ', car1);  // car1: {name: 'BMW', color: 'blue'}
console.log('car2: ', car2);  // car2: {name: 'BMW', color: 'blue'}

car1.name = 'Chevrolet';
console.log('car1: ', car1);  // car1: {name: 'Chevrolet', color: 'blue'}
console.log('car2: ', car2);  // car2: {name: 'Chevrolet', color: 'blue'}
```

### Object 
 - o'zida bir qancha property ni saqlay olish xususiyatiga ega;
 - {} qavslar orqali objectlarni yozishimiz mumkin.
Bunga misol:
```JavaScript
let data = {
  name: "John",
  age: 25,
  isMarried: true,
  hello: function() {
    console.log('Assalomu aleykum');
  }
}

data.hello();
// Assalomu aleykum
```

Yuqorida data degan object yaratdik va  unda bir nechta tiplar joylashgan. Object'larning eng yaxshi tomonlaridan biri shundaki, biz funksiyani uning qiymatlaridan biri sifatida saqlashimiz mumkin.

```JavaScript
  let person = { name: 'John Doe' , age: 25 , isMarried: true}
```
yoki
``` JavaScript
  let array = ['apelsin', null, undefined, false, 26]
```

Ko'rib turganimizdek Object tipi misolida `array` va `object` keltirilgan. Bu holatda, ikkala o'zgaruvchi ham bir qancha qiymatlarni o'zida saqlab qoldi. Aynan shu xususiyat ularni **Non-primitive** qiladi.

```JavaScript
Array, Function, Object bularning hammasining tipi object hisoblanadi.
````

### Array

Array - bu bir vaqtning o'zida bir nechta qiymatni o'zida ketma-ket saqlay oladigan o'zgaruvchidir.


Agar sizda avtomobillar nomlari ro'yxati mavjud bo'lsa, ularni o'zgaruvchilarga saqlash quyidagicha ko'rinishi mumkin:

```JavaScript
let avtomobil1 = 'Malibu';
let avtomobil2 = 'Damas';
let avtomobil3 = 'Nexia';
```

Lekin bu yerda bizlarga faqatgina 3 tagina avtomobil nomi keltirib o'tilgan, shular soni 300 ta bo'lsa, yuqoridagi ketma-ketlikda ularni e'lon qilishimiz umuman tushunarsiz holatga kelib qoladi. Sababi biz  `avtomobil1, avtomobil2, ... avtomobil300` deb o'zgaruvchilarni e'lon qilsak, ularni oladigan qiymati baribir 1 xil ko'rinishdagi avtomobil nomlariga teng bo'ladi. Yana uning ustiga bir nechta avtomobil qo'shish kerak bo'lsachi? 
Keling shu ishni `array` da qilib ko'ramiz:


```JavaScript
let avtomobil = ['Malibu','Damas','Nexia','Spark','Captiva'];
```

Array bitta nom ostida ko'plab qiymatlarni o'z ichiga olishi mumkin va siz indeks raqamiga murojaat qilib qiymatlarni ko'rishingiz mumkin.

```JavaScript
let avtomobil = ['Malibu','Damas','Nexia','Spark','Captiva'];
let avto = avtomobil[0];
console.log(avto);
// Malibu
```

>Array indekslari 0 dan boshlanadi. [0] - birinchi element, [1] -ikkinchi element


### Funksiya

Funksiya bu ma'lum bir vazifani bajarish uchun mo'ljallangan kod bloki.

```JavaScript
function myFunction(a,b) {
  return a * b;
}
```

JavaScript funksiyasi `function` kalit so'z bilan belgilanadi, so'ngra funksiya nomi, keyin argument qabul qiladigan `()`.
Funksiya nomlari harflar, raqamlar, `_` va `$` belgilaridan iborat bo'lishi mumkin.
`()` ichida vergul bilan ajratilgan bir nechta parametr nomlari bo'lishi mumkin. Bu parametrlarni funksiya ichida o'zgaruvchi kabi ishlatishimiz mumkin. Yuqoridagi `myFunction(a,b)` funksiyamiz bunga yaxshi misol bo'la oladi.
Funksiya bo'yicha bajariladigan kod figurali qavs ichiga yoziladi : `{}`.
Funksiya ichidagi kod  funksiya chaqirilganda bajariladi. Funksiyani chaqirish uning nomi ortidan kerakli parametrning aniq qiymatlarini berish orqali amalga oshiriladi.
`myFunction(3,4) // 12`


  > Funksiya e'lon qilingan tepada. Unda u bajarilmaydi. Shunchaki JavaScript uni xotiraga yozib, "tanib" oladi.

  ### Xulosa
  
  - Agar bitta qiymat bilan ishlamoqchi bo'lsak **primitive** typedan foydalanishimiz kerak.
  - Bir nechta qiymatni saqlash kerak bo'lsa **Non-primitive**  typedan foydalanganimiz ma'qul.

  