const burger_button = document.querySelector(".menu-button");
const responsive_menu = document.querySelector(".responsive");
const close_icon = document.querySelector(".close-icon");
const links = document.querySelector(".child1");
const links2 = document.querySelector(".child2");
const links3 = document.querySelector(".child3");

burger_button.addEventListener("click", function () {
  responsive_menu.style.display = "flex"
});

close_icon.addEventListener("click", function () {
  responsive_menu.style.display = "none"
});

links.addEventListener("click", function () {
  responsive_menu.style.display = "none"
});

links2.addEventListener("click", function () {
  responsive_menu.style.display = "none"
});

links3.addEventListener("click", function () {
  responsive_menu.style.display = "none"
});
