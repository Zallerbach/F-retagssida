const container = document.querySelector(".container");
const hamburger_menu = document.querySelector(".hamburger-menu");

container.addEventListener("click", () => {
  container.classList.toggle("active");
});
