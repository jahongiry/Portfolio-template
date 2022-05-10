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
   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo",
   image: "img/mobile-popup.png",
   alt: "Number 10 with red background",
   technologies: ["html", "Css", "Bootsrap"],
   links: ["#", "#"]
 }

 const project2 = {
  name: "Keeping track of hundreds  of components website",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  image: "img/lady-athlet.png",
  alt: "Lady athlet project",
  technologies: ["html", "Css", "Bootsrap", "Ruby"],
  links: ["#", "#"]
}

const cardProject = document.querySelector('.fourth-box');
const cardProjectHeading = document.createElement('h3');
cardProjectHeading.textContent = project1.name;
const descriptionNode = document.createElement('p');
descriptionNode.textContent = project1.description;
const techList = document.createElement('ul');
const firstTech = document.createElement('li');
firstTech.className = 'programming-boxes';
firstTech.textContent = project1.technologies[0];
const secondTech = document.createElement('li');
secondTech.textContent = project1.technologies[1];
const thirdTech = document.createElement('li');
thirdTech.textContent = project1.technologies[1];
const fourthTech = document.createElement('li');
fourthTech.textContent = project1.technologies[3];

cardProject.appendChild(cardProjectHeading);
cardProject.appendChild(descriptionNode);
techList.appendChild(firstTech);
techList.appendChild(secondTech);
techList.appendChild(thirdTech);
techList.appendChild(fourthTech);
cardProject.appendChild(techList);
