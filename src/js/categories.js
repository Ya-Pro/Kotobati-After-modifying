let categories = [
  { category: "روايات", number: 4043 },
  { category: "تاريخ", number: 2500 },
  { category: "علوم", number: 1200 },
  { category: "فلسفة", number: 800 },
  { category: "شعر", number: 3000 },
  { category: "أطفال", number: 1500 },
  { category: "ديني", number: 1000 },
  { category: "سير ذاتية", number: 1800 },
  { category: "أدب", number: 3500 },
  { category: "علوم اجتماعية", number: 2200 },
  { category: "تنمية بشرية", number: 900 },
  { category: "سياسة", number: 2800 },
  { category: "تقنية", number: 2000 },
  { category: "فنون", number: 1700 },
  { category: "رياضة", number: 1200 },
  { category: "طبخ", number: 500 },
  { category: "كتب مدرسية", number: 3000 },
  { category: "طب", number: 2500 },
  { category: "طبيعة", number: 800 },
  { category: "حاسوب", number: 1500 },
  { category: "أغاني", number: 200 },
  { category: "سينما", number: 1200 },
  { category: "تلفزيون", number: 800 },
  { category: "رحلات", number: 1000 },
  { category: "أدب عالمي", number: 3000 },
  { category: "أدب عربي", number: 4000 },
  { category: "إدارة أعمال", number: 2200 },
  { category: "تسويق", number: 1600 },
  { category: "مالية", number: 1800 },
  { category: "اقتصاد", number: 2500 },
  { category: "علم النفس", number: 1200 },
  { category: "تاريخ الفن", number: 800 },
  { category: "علم الأنساب", number: 500 },
  { category: "علم الحشرات", number: 700 },
  { category: "علم الفلك", number: 900 },
  { category: "علم الجيولوجيا", number: 1100 },
  { category: "علم الأحياء", number: 1300 },
  { category: "علم النبات", number: 800 },
  { category: "فلسفة العلوم", number: 400 },
  { category: "علم الاجتماع", number: 1900 },
  { category: "علم الإعلام", number: 1000 },
  { category: "تصميم", number: 2200 },
  { category: "فنون جميلة", number: 1700 },
  { category: "أنثروبولوجيا", number: 800 },
  { category: "علم اللغة", number: 2800 },
  { category: "علم الاقتصاد السياسي", number: 1000 },
  { category: "تاريخ العلوم", number: 700 },
  { category: "علم البيئة", number: 1500 },
  { category: "علم الأثار", number: 900 },
  { category: "علم الديناميكا", number: 500 },
  { category: "علم الأعصاب", number: 1200 },
  { category: "علم الليزر", number: 300 },
  { category: "علم الأشعة", number: 400 },
  { category: "علم الفيزياء", number: 1600 },
  { category: "علم الرياضيات", number: 2500 },
  { category: "علم الكيمياء", number: 1800 },
  { category: "علم الأرصاد الجوية", number: 1000 },
  { category: "علم الكواكب", number: 600 },
  { category: "علم الفلك الفيزيائي", number: 400 },
  { category: "علم السموم", number: 300 },
  { category: "علم النانو", number: 800 },
  { category: "علم الطاقة", number: 700 },
  { category: "علم النظرية الكمية", number: 500 },
  { category: "علم الفلسفة الإسلامية", number: 1200 },
  { category: "علم الحديث", number: 1500 },
  { category: "علم الفقه", number: 2000 },
  { category: "علم الأخلاق", number: 800 },
  { category: "الأدب الفرنسي الحديث", number: 2600 },
  { category: "الأدب الإنجليزي الحديث", number: 2700 },
  { category: "الأدب الألماني الحديث", number: 2800 },
  { category: "الأدب الروماني", number: 2900 },
  { category: "الأدب الإسرائيلي", number: 3000 },
  { category: "الأدب اليوناني الحديث", number: 3100 },
  { category: "الأدب الكوري", number: 3200 },
  { category: "الأدب الأمريكي الآسيوي", number: 3300 },
  { category: "الأدب الأسترالي", number: 3400 },
  { category: "الأدب الكندي", number: 3500 },
  { category: "الأدب النيوزيلندي", number: 3600 },
  { category: "الأدب الإفريقي الجنوبي", number: 3700 },
  { category: "الأدب البرازيلي", number: 3800 },
  { category: "الأدب الأرجنتيني", number: 3900 },
];


function showCategories() {
  document.querySelector(".categories").innerHTML = categories
    .map((category) => {
      return `
      <div class="box-writer">
        <h4>${category.category}</h4>
        <div class="books-number">
          <i class="fa-solid fa-book"></i>
          <span>${category.number}</span>
          <span>كتاب</span>
        </div>
      </div>
        `;
    })
    .join("");
}
showCategories();
