"use strict"

const bestBookStars = document.querySelectorAll(".stars");



let imageShowen = 1;




function showBooks() {
  let showMyBooks = books
    .map((book) => {
      imageShowen = (imageShowen % 40) + 1;
      return `
        <div class="book">
        <a class="book-img"  href="bookposition.html">
        <img src="assets/images/${imageShowen}.jpg" alt="${
        book.title
      }"  loading="lazy"/>
        </a>
          <a class="book-title" href="bookposition.html">  ${book.title}</a>
          <a class="book-author" href="authorBrief.html"> ${book.author}</a>
          <div class="stars-downloads-bookmark">
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> 
            </div>
            <p class="downloads-number">(<span>${Math.floor(
              Math.random() * book.downloads + 1
            )}</span>)</p>
            <i class="fa-solid fa-bookmark bookmark"></i>
          </div>
          </div>
        </div>
      `;
    })
    .join("");
  document.querySelector(".best-books .books").innerHTML = showMyBooks;
}
showBooks();



// getting random rating to the books
bestBookStars.forEach((stars) => {
  let ratingStars = stars.getElementsByClassName("fa-star");
  let ratingNumber = Math.ceil(Math.random() * 5);

  if (ratingNumber < 4) ratingNumber = 3;

  for (let i = 0; i < ratingNumber; i++) ratingStars[i].classList.add("active");
});
