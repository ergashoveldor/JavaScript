#### Esda tuting:
**`HTML`** ga faqat eng oddiy skriptlar yoziladi. Keyinchalik murakkablari alohida fayllarda yoziladi. Alohida faylning afzalligi shundaki, brauzer uni yuklab oladi va   <a href="https://en.wikipedia.org/wiki/Web_cache">`keshda`</a> saqlaydi. Xuddi shu scriptga havola qilingan boshqa sahifalar uni yuklab olish o'rniga keshdan oladi, shuning uchun fayl aslida bir marta yuklab olinadi. Bu trafikni kamaytiradi va sahifalarni tezroq qiladi.

```JavaScript
    <script src="main.js">
      alert("1") // kontent e'tiborga olinmaydi, chunki src o'rnatilgan
    </script>
```