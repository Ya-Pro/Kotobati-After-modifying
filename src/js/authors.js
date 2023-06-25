let arabAuthors = [
  { name: "نجيب محفوظ", books: 50 },
  { name: "طه حسين", books: 150 },
  { name: "غسان كنفاني", books: 20 },
  { name: "نزار قباني", books: 30 },
  { name: "جبران خليل جبران", books: 15 },
  { name: "توفيق الحكيم", books: 70 },
  { name: "عبد الرحمن منيف", books: 25 },
  { name: "أحمد خالد توفيق", books: 200 },
  { name: "سميرة عزام", books: 10 },
  { name: "عباس محمود العقاد", books: 45 },
  { name: "توفيق الدقن", books: 5 },
  { name: "نجلاء إسماعيل", books: 8 },
  { name: "أحمد خلف", books: 12 },
  { name: "نبيل فاروق", books: 40 },
  { name: "علي أحمد باكثير", books: 60 },
  { name: "عبد الوهاب مطاوع", books: 30 },
  { name: "سعد زغلول", books: 20 },
  { name: "فريد الأطرش", books: 5 },
  { name: "صلاح جاهين", books: 25 },
  { name: "أحمد مطر", books: 35 },
  { name: "فاروق جويدة", books: 15 },
  { name: "مصطفى لطفي المنفلوطي", books: 80 },
  { name: "عبد الحميد جودة", books: 10 },
  { name: "محمد حسنين هيكل", books: 30 },
  { name: "محمد الغزالي", books: 50 },
  { name: "نجلاء الشهابي", books: 5 },
  { name: "رفعت السعيد", books: 40 },
  { name: "حسن كامي", books: 10 },
  { name: "عبد الرحمن الشرقاوي", books: 25 },
  { name: "حنان الشيخ", books: 8 },
  { name: "أحمد السالم", books: 12 },
  { name: "عبد الفتاح كيلاني", books: 20 },
  { name: "أحمد رجب رجب", books: 5 },
  { name: "فريد الخميسي", books: 50 },
  { name: "محمد بهاء الدين", books: 15 },
  { name: "سيد قطب", books: 30 },
  { name: "صبحي عطري", books: 10 },
  { name: "فؤاد الكرماوي", books: 20 },
  { name: "عمارة سامي", books: 5 },
  { name: "أحمد بخيت", books: 70 },
  { name: "الطيب صالح", books: 25 },
  { name: "يوسف السباعي", books: 15 },
  { name: "علي الورديان", books: 8 },
  { name: "عباس العقاد", books: 40 },
  { name: "محمد عبد الحليم عبد الله", books: 30 },
  { name: "محمد البسيوني", books: 10 },
  { name: "حسين البرغوثي", books: 20 },
  { name: "محمود درويش", books: 15 },
  { name: "عبد الله العروي", books: 5 },
  { name: "محمد الماغوط", books: 10 },
  { name: "عبد المنعم الجندي", books: 30 },
  { name: "صبحي محمد", books: 12 },
  { name: "أحمد الشقيري", books: 40 },
  { name: "عزام الأحمد", books: 8 },
  { name: "محمود تيمور", books: 25 },
  { name: "سليمان العيسوي", books: 15 },
  { name: "عبد الرحمن بدوي", books: 20 },
  { name: "محمد هاشم", books: 5 },
  { name: "محمد سلطان القاسمي", books: 10 },
  { name: "أحمد زكي أبو شادو", books: 30 },
  { name: "محمد الصاوي", books: 25 },
  { name: "رشدي الخواجة", books: 15 },
  { name: "جمال الغيطاني", books: 20 },
  { name: "محمود السعدني", books: 10 },
  { name: "محمد علي المازني", books: 5 },
  { name: "أحمد مراد", books: 50 },
  { name: "عصام تليمة", books: 8 },
  { name: "علي الطنطاوي", books: 15 },
  { name: "عبد الحليم بدران", books: 25 },
  { name: "أحمد الشقيري", books: 40 },
  { name: "محمد الجوادي", books: 10 },
  { name: "عبد الله الكتار", books: 5 },
  { name: "محمد نجيب بشير", books: 20 },
  { name: "جمال حمدان", books: 15 },
  { name: "أحمد محمود", books: 30 },
  { name: "زكي مبارك", books: 10 },
  { name: "عبد الله الطيب", books: 25 },
  { name: "حسين الوادي", books: 5 },
  { name: "جمال الغيطاني", books: 20 },
  { name: "علي الجارم", books: 8 },
  { name: "سامي شيخون", books: 12 },
  { name: "عمر طاهر", books: 40 },
  { name: "محمد حسن ولي الدين", books: 30 },
  { name: "محمد المنسي قنديل", books: 25 },
  { name: "نجيب الكيلاني", books: 5 },
  { name: "حسانين هيكل", books: 15 },
  { name: "عبد الله العربي", books: 10 },
  { name: "أحمد عبد العزيز", books: 20 },
  { name: "أحمد السيد النقيب", books: 8 },
  { name: "محمد الصباغ", books: 12 },
  { name: "فريد الدهشان", books: 25 },
  { name: "عبد الحميد جاسم", books: 5 },
  { name: "عبد الرحمن الشريف", books: 10 },
  { name: "فؤاد الشريف", books: 15 },
  { name: "محمد عبد المعطي", books: 20 },
];

let authorImage = 1;
function showAuthors() {
  let i = 1;
  document.querySelector(".books-authors").innerHTML = arabAuthors
    .map((author, index) => {
      authorImage = (authorImage % 34) + 1;
      return `  <!-- the part of the author box -->
          <div class="box-writer">
              <div class="author-image">
                <img src="assets/images/writer${authorImage}.jpg" alt="writer">
              </div>
              <h4>${author.name}</h4>
            <div class="books-number">
                <i class="fa-solid fa-book"></i>
                <span>${author.books}</span>
                <span>كتاب</span>
            </div>
          </div>
          `;
    })
    .join("");
}
showAuthors();
