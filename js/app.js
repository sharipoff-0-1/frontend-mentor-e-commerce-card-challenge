const navbar = document.getElementById("navbar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
let highlight = document.querySelector(".highlight");
const smallImage = document.querySelectorAll(".small-image img");

// navbar menu open close
openBtn.addEventListener("click", () => {
  closeBtn.classList.remove("hidden");
  openBtn.classList.add("hidden");
  navbar.style.transform = "translateX(0)";
  document.body.style.backdropFilter = "blur(1rem)";
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
  navbar.style.transform = "translateX(-100%)";
});

// product image gallery
smallImage.forEach((index) => {
  index.addEventListener("click", function () {
    const thumbnailSrc = this.src;
    let bigSrc = thumbnailSrc.replace("thumbnail", "big");
    highlight.src = bigSrc;
  });
});
