const navbar = document.getElementById("navbar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

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
