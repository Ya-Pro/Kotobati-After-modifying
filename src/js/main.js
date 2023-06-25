let searchBar = document.querySelector(".show-search-bar");
let searchIcon = document.querySelector(" ul .publish button");
let overlay = document.querySelector(".overlay");
searchIcon.addEventListener("click", () => {
  searchBar.classList.add("active-search-bar");
  overlay.classList.add("show-overlay");
});
// the sidebar appearing
let sidebar = document.querySelector(".sidebar");
let bars = document.querySelector(".fa-bars");
let closeSideBar = document.querySelector(".sidebar i.close");
bars.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeSideBar.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
overlay.addEventListener("click", () => {
  searchBar.classList.remove("active-search-bar");
  overlay.classList.remove("show-overlay");
});

// set the all details of the books to the local Storage
// the part of the unites of the book position
let bookUnites = ["MB", "KB"];
let bookImgs = document.querySelectorAll(".book-img img");
let bookTitles = document.querySelectorAll(".book-title");
let bookAuthors = document.querySelectorAll(".book-author");
let bookStars = document.querySelectorAll(".stars");
let bookRating = document.querySelectorAll(".persons-rating span");
bookImgs.forEach((bookImg, index) => {
  bookImg.addEventListener("click", () => {
    localStorage.setItem("bookImage", bookImgs[index].src);
    localStorage.setItem("bookTitle", bookTitles[index].textContent);
    localStorage.setItem("bookAuthor", bookAuthors[index].textContent);
    localStorage.setItem(
      "bookStars",
      bookStars[index].querySelectorAll("i.active").length
    );
    localStorage.setItem("bookRating", bookRating[index].textContent);
    localStorage.setItem("pagesCount", Math.floor(Math.random() * 100 + 1));
    localStorage.setItem(
      "bookDownloads",
      Math.floor(Math.random() * 10000 + 1)
    );
    localStorage.setItem("sizeCount", Math.floor(Math.random() * 100 + 1));
    localStorage.setItem(
      "sizeUnite",
      bookUnites[Math.floor(Math.random() * 2)]
    );
    localStorage.setItem("bookRating", bookRating[index].textContent);
  });
});
bookTitles.forEach((bookTitle, index) => {
  bookTitle.addEventListener("click", () => {
    localStorage.setItem("bookImage", bookImgs[index].src);
    localStorage.setItem("bookTitle", bookTitles[index].textContent);
    localStorage.setItem("bookAuthor", bookAuthors[index].textContent);
    localStorage.setItem(
      "bookStars",
      bookStars[index].querySelectorAll("i.active").length
    );
    localStorage.setItem("bookRating", bookRating[index].textContent);
    localStorage.setItem("pagesCount", Math.floor(Math.random() * 100 + 1));
    localStorage.setItem(
      "bookDownloads",
      Math.floor(Math.random() * 10000 + 1)
    );
    localStorage.setItem("sizeCount", Math.floor(Math.random() * 100 + 1));
    localStorage.setItem(
      "sizeUnite",
      bookUnites[Math.floor(Math.random() * 2)]
    );
    localStorage.setItem("bookRating", bookRating[index].textContent);
  });
});
// get the all details of the book from the local storage
let bookName = document.querySelector(".book-position .book-name");
let bookAuthor = document.querySelector(".book-position .author-name");
let bookImage = document.querySelector(".book-details .book-image img");
let bookNavName = document.querySelector(".book-position .nav-book-title");
let bookTitle = document.querySelector(".book-details .shown-book-title");
let bookAuthorName = document.querySelector(".book-details .author-name");
let bookRatingMain = document.querySelector(".book-details .rating-count");
// get the all details of the book from the local storage
bookName.innerHTML = localStorage.getItem("bookTitle");
bookAuthor.innerHTML = localStorage.getItem("bookAuthor");
bookImage.src = localStorage.getItem("bookImage");
bookNavName.innerHTML = localStorage.getItem("bookTitle");
bookTitle.innerHTML = localStorage.getItem("bookTitle");
bookAuthorName.innerHTML = localStorage.getItem("bookAuthor");
let bookStarsCount = document.getElementById("book-stars");
let childStars = bookStarsCount.querySelectorAll("i");
for (let i = 0; i < parseInt(localStorage.getItem("bookStars")); i++) {
  childStars[i].classList.add("active");
}
