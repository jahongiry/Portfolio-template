const burgerButton = document.querySelector('.menu-button');
const responsiveMenu = document.querySelector('.responsive');
const closeIcon = document.querySelector('.close-icon');
const links = document.querySelectorAll('.main-nav-link2');
const mobilePop = document.querySelector('.mobile-popup');
const mobilePopX = document.querySelector('.x-button');
const seeProject = document.querySelectorAll('.see-button, .see-button-full');

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
  });
}

burgerButton.addEventListener('click', () => {
  responsiveMenu.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
  responsiveMenu.style.display = 'none';
});

for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    mobilePop.style.display = 'inline-block';
  });
}

mobilePopX.addEventListener('click', () => {
  mobilePop.style.display = 'none';
});

// POP Up
 const project1 = {
   name: "Multi Post Stories",
   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
   image: "img/mobile-popup.png",
   alt: "Number 10 with red background",
   technologies: ["html", "Css", "Bootsrap"],
   links: ["#", "#"]
 }
