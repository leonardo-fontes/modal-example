const openBtn = document.querySelector(".btn-open");
const closeBtn = document.querySelector(".btn-close");
const overlay = document.querySelector(".modal");
const body = document.querySelector("body");

openBtn.addEventListener("click", function () {
  overlay.classList.add("open-modal");
  body.classList.add("body-bg");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("open-modal");
  body.classList.remove("body-bg");
});
