### JavaScript Info

```JavaScript
    console.log('Rivojlanishni hozirdan boshlang!')
```
[javascript.info](https://javascript.info) - Rasmiy saytiga shu link orqali o'tishingiz mumkin.

#### Esda tuting:
**HTML** ga faqat eng oddiy skriptlar yoziladi. Keyinchalik murakkablari alohida fayllarda yoziladi. Alohida faylning afzalligi shundaki, brauzer uni yuklab oladi va   <a href="https://en.wikipedia.org/wiki/Web_cache">keshda</a> saqlaydi. Xuddi shu scriptga havola qilingan boshqa sahifalar uni yuklab olish o'rniga keshdan oladi, shuning uchun fayl aslida bir marta yuklab olinadi. Bu trafikni kamaytiradi va sahifalarni tezroq qiladi.

```JavaScript
    <script src="main.js">
      alert("1") // kontent e'tiborga olinmaydi, chunki src o'rnatilgan
    </script>
```

**O'zgaruvchi** - bu ma'lumotlar uchun nomlangan xotira. Biz o'zgaruvchilardan turli xil ko'rinishdagi ma'lumotlarni saqlash uchun foydalanishimiz mumkin.

**Message** nomli o'zgaruvchini e'lon qilish:

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





**YouTube kanalimizga obuna bo'ling:**  [InformTech Uz](http://youtube.com/c/InformTech)