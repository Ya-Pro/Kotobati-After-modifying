// the get the all details of the showen book
let bookShowenTitle = document.querySelector(" .shown-book-title");
let relatedFilter = books.filter((book) => {
  return book.title !== bookShowenTitle;
});
let authorFilter = books.reverse();

// the part of the related books
let relatedBooks = document.querySelector(".related-books .books");
let authorBooks = document.querySelector(".same-author-books .books");
function showBooks(filter, booksRA) {
  let randomBooks = Math.floor(Math.random() * 40 + 1);
  for (let i = randomBooks; i < randomBooks + 6; i++) {
    let book = filter[i];
    let bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `
        <a class="book-img" href="bookposition.html">
        <img src="assets/images/${i}.jpg" alt="${book.title}" loading="lazy"/>
        </a>
          <a class="book-title" href="/bookposition.html">  ${book.title}</a>
          <a class="book-author" href="authorBrief.html"> ${book.author}</a>
          <div class="stars-downloads-bookmark">
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> 
            </div>
            <p class="persons-rating">(<span>${Math.floor(
              Math.random() * book.downloads + 1
            )}</span>)</p>
            <i class="fa-solid fa-bookmark bookmark"></i>
          </div>
          </div>
  `;
    booksRA.appendChild(bookElement);
  }
}
showBooks(relatedFilter, relatedBooks);
showBooks(authorFilter, authorBooks);
// the part of the all stars of the book
let allStars = document.querySelectorAll(".stars");
allStars.forEach((stars, index) => {
  let ratingStars = stars.querySelectorAll("i");
  ratingStars.forEach((star) => {
    let randomRating = Math.floor(Math.random() * 5);
    for (let i = 0; i < randomRating; i++) {
      ratingStars[i].classList.add("active");
    }
  });
});
// the part of the book rating
let saveBook = document.querySelector(".save-rate .save");
let saveBookMessage = document.querySelector(".book-saved");
let bookRemoved = document.querySelector(".book-not-saved");
let isSaved = false;
saveBook.addEventListener("click", () => {
  if (!isSaved) {
    bookRemoved.classList.remove("show-message");
    setTimeout(() => {
      saveBook.querySelector(".save-book").innerHTML = "إزالة من مكتبتي";
      saveBookMessage.innerHTML = "تم إضافة الكتاب إلى مكتبتك";
      saveBookMessage.classList.add("show-message");
      saveBookMessage.style.backgroundColor = "rgb(246, 86, 86)";
    }, 0);
    setTimeout(() => {
      saveBook.querySelector(".save-book").innerHTML = "إزالة من مكتبتي";
      saveBookMessage.classList.remove("show-message");
    }, 1500);
    isSaved = true;
  } else {
    saveBookMessage.classList.remove("show-message");
    setTimeout(() => {
      bookRemoved.classList.add("show-message");
      saveBook.querySelector(".save-book").innerHTML = "اضف الى مكتبتي";
    }, 0);
    setTimeout(() => {
      bookRemoved.classList.remove("show-message");
      saveBook.querySelector(".save-book").innerHTML = "اضف الى مكتبتي";
    }, 1500);
    isSaved = false;
  }
});
// the part of the box-rating
let bookRatingName = localStorage.getItem("bookTitle");
let textArea = document.getElementById("rating");
let placeHolderContent = `نريد أن نستفاد منك، ما رأيك في كتاب ${bookRatingName}؟ أو كيف سمعت عنه`;
let boxRating = document.querySelector(".box-rating");
let ratingBtn = document.querySelector(".rate.btn-2");
let boxRatingRemove = document.querySelector(".box-rating-remove");
let addRating = document.querySelector(".box-rating-add");
ratingBtn.addEventListener("click", () => {
  textArea.value = "";
  boxRating.classList.add("show-box");
  textArea.placeholder = placeHolderContent.trim();
  document.body.style.overflow = "hidden";
});
boxRatingRemove.addEventListener("click", () => {
  boxRating.classList.remove("show-box");
  document.body.style.overflow = "auto";
  addStars.forEach((star, index) => {
    star.classList.remove("active");
  });
});

addRating.addEventListener("click", () => {
  if (textArea.value.trim() === "") {
    setTimeout(() => {
      saveBookMessage.classList.add("show-message");
      saveBookMessage.innerHTML = "   من فضلك أضف تقييمك أولاً";
      saveBookMessage.style.backgroundColor = "#2ecc71";
    }, 0);
    setTimeout(() => {
      saveBookMessage.classList.remove("show-message");
    }, 1500);
  } else {
    setTimeout(() => {
      boxRating.classList.remove("show-box");
      saveBookMessage.classList.add("show-message");
      saveBookMessage.innerHTML = "تمت إضافة تقييمك بنجاح";
      saveBookMessage.style.backgroundColor = "#2ecc71";
    }, 0);
    setTimeout(() => {
      saveBookMessage.classList.remove("show-message");
      document.body.style.overflow = "auto";
    }, 1500);
    setTimeout(() => {
      saveBookMessage.classList.add("show-message");
      saveBookMessage.innerHTML = "   شكراً جزيلاً لك على تقييمك";
      saveBookMessage.style.backgroundColor = "#2ecc71";
    }, 1600);
    setTimeout(() => {
      saveBookMessage.classList.remove("show-message");
    }, 2900);
    addStars.forEach((star, index) => {
      star.classList.remove("active");
    });
  }
  textArea.value = "";
});
// making the rating of the stars
let addStars = document.querySelectorAll(".add-rating i");
let isRated = false;
addStars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    addStars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
// make random downloads number for download and size
let pagesCount = document.querySelector(".pages-count");
let sizeCount = document.querySelector(".size-count");
let sizeUnit = document.querySelector(".size-unit");
let bookDownloads = document.querySelector(".downloads .downloads-count");
pagesCount.innerHTML = localStorage.getItem("pagesCount");
sizeCount.innerHTML = localStorage.getItem("sizeCount");
sizeUnit.innerHTML = localStorage.getItem("sizeUnite");
bookDownloads.innerHTML = localStorage.getItem("bookDownloads");
// put the rating count and the review count to the book
let ratingCount = document.querySelector(".rating-count");
let reviewCount = document.querySelector(".reviews-count");
ratingCount.innerHTML = "(" + localStorage.getItem("bookRating") + ")";
reviewCount.innerHTML = "(" + localStorage.getItem("bookRating") + ")";
// let the another books to the author be
let bookGlance = document.querySelector(".book-glance .book-description");
let sameAuthor = document.querySelector(".same-author-books .same-author");
bookGlance.innerHTML = `مما لا شك فيه أن  كتاب ${localStorage.getItem(
  "bookTitle"
)} قد شمل العديد من الفوائد التي لا حصر لها ولكن لن أستطيع أن أوفي حق`;
sameAuthor.innerHTML = localStorage.getItem("bookAuthor");
