const burger_button = document.querySelector(".menu-button");
const responsive_menu = document.querySelector(".responsive");
const close_icon = document.querySelector(".close-icon");
const links = document.querySelectorAll(".main-nav-link2");

for (let i=0; i<links.length; i++) {
  links[i].addEventListener('click', function (e) {
    responsive_menu.style.display = "none";
  }) 
}

burger_button.addEventListener("click", function () {
  responsive_menu.style.display = "flex"
});

close_icon.addEventListener("click", function () {
  responsive_menu.style.display = "none"
});
