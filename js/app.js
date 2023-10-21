const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("hashib");
  nav.classList.toggle("left-[-9.5rem]");
  nav.classList.toggle("left-2");
});
