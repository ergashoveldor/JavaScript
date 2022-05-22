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