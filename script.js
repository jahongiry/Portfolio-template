const burgerButton = document.querySelector('.menu-button');
const responsiveMenu = document.querySelector('.responsive');
const closeIcon = document.querySelector('.close-icon');
const links = document.querySelectorAll('.main-nav-link2');
const mobilePop = document.querySelector('.mobile-popup');

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

const project1 = {
  name: 'See project',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo',
  image: 'img/mobile-popup.png',
  alt: 'Number 10 with red background',
  technologies: ['html', 'Css', 'Bootsrap'],
  links: ['#', '#'],
};

const project2 = {
  name: 'Keeping track of hundreds',
  description: 'Lorem Ipsum is simply dummy text of the printing and dummy of the printing text of the printing and typesetting industry.',
  image: 'img/lady-athlet.png',
  alt: 'Lady athlet project',
  technologies: ['html', 'Css', 'Bootsrap', 'Ruby'],
  links: ['#', '#'],
};

const project3 = {
  name: 'Website Portfolio',
  description: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry standard',
  image: 'img/mobile-popup.png',
  alt: 'Lady athlet project',
  technologies: ['html', 'Css', 'Bootsrap', 'Ruby'],
  links: ['#', '#'],
};

const project4 = {
  name: 'Multi Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: 'img/lady-athlet.png',
  alt: 'Lady athlet showing performance',
  technologies: ['html', 'Css', 'Bootsrap', 'Ruby'],
  links: ['#', '#'],
};

const cardProjectHeading1 = document.createElement('h2');
cardProjectHeading1.textContent = 'My Recent Works';
const cardProjectBox1 = document.querySelector('.first-box');
const cardProjectImage1 = document.createElement('img');
cardProjectImage1.src = project4.image;
cardProjectImage1.alt = project4.alt;
cardProjectBox1.appendChild(cardProjectImage1);
const cardOneDiv = document.createElement('div');
cardOneDiv.className = 'first-box-text';
cardProjectBox1.appendChild(cardOneDiv);
const cardOneHeading = document.createElement('h3');
cardOneHeading.textContent = project4.name;
cardOneDiv.appendChild(cardOneHeading);
const cardOneParagraph = document.createElement('p');
cardOneParagraph.textContent = project4.description;
cardOneDiv.appendChild(cardOneParagraph);
const cardOneTechList = document.createElement('ul');
cardOneTechList.className = 'programming-languages';
cardOneDiv.appendChild(cardOneTechList);

const cardOneFirstTech = document.createElement('li');
const cardOneFirstTecha = document.createElement('a');
cardOneFirstTech.className = 'pr-lang-items';
[cardOneFirstTecha.textContent] = project4.technologies;

const cardOneSecondTech = document.createElement('li');
const cardOneSecondTecha = document.createElement('a');
cardOneSecondTech.className = 'pr-lang-items';
[, cardOneSecondTecha.textContent] = project4.technologies;

const cardOneThirdTech = document.createElement('li');
const cardOneThirdTecha = document.createElement('a');
cardOneThirdTech.className = 'pr-lang-items';
[,, cardOneThirdTecha.textContent] = project2.technologies;

const cardOneFourthTech = document.createElement('li');
const cardOneFourthTecha = document.createElement('a');
cardOneFourthTech.className = 'pr-lang-items';
[,,, cardOneFourthTecha.textContent] = project2.technologies;

cardOneTechList.appendChild(cardOneFirstTech);
cardOneFirstTech.appendChild(cardOneFirstTecha);
cardOneTechList.appendChild(cardOneSecondTech);
cardOneSecondTech.appendChild(cardOneSecondTecha);
cardOneTechList.appendChild(cardOneThirdTech);
cardOneThirdTech.appendChild(cardOneThirdTecha);
cardOneTechList.appendChild(cardOneFourthTech);
cardOneFourthTech.appendChild(cardOneFourthTecha);

const cardOneButton = document.createElement('a');
cardOneButton.className = 'see-button';
cardOneButton.textContent = 'See Project';
[cardOneButton.href] = project4.links;
cardOneDiv.appendChild(cardOneButton);

const cardProject = document.querySelectorAll('.fourth-box');
for (let i = 0; i < cardProject.length; i += 1) {
  const cardProjectHeading = document.createElement('h3');
  cardProjectHeading.textContent = project2.name;
  const descriptionNode = document.createElement('p');
  descriptionNode.textContent = project2.description;
  const techList = document.createElement('ul');
  const firstTech = document.createElement('li');
  const firstTecha = document.createElement('a');
  firstTech.className = 'programming-boxes';
  [firstTecha.textContent] = project2.technologies;
  const secondTech = document.createElement('li');
  const secondTecha = document.createElement('a');
  secondTech.className = 'programming-boxes';
  [, secondTecha.textContent] = project2.technologies;
  const thirdTech = document.createElement('li');
  const thirdTecha = document.createElement('a');
  thirdTech.className = 'programming-boxes';
  [,, thirdTecha.textContent] = project2.technologies;
  const fourthTech = document.createElement('li');
  [,,, fourthTech.textContent] = project2.technologies;
  cardProject[i].appendChild(cardProjectHeading);
  cardProject[i].appendChild(descriptionNode);
  techList.appendChild(firstTech);
  firstTech.appendChild(firstTecha);
  techList.appendChild(secondTech);
  secondTech.appendChild(secondTecha);
  techList.appendChild(thirdTech);
  thirdTech.appendChild(thirdTecha);
  cardProject[i].appendChild(techList);
}

const cardProject2 = document.querySelector('.third-box');
cardProject2.style.backgroundImage = "url('img/box1.png')";
const cardProjectHeading2 = document.createElement('a');
cardProjectHeading2.className = 'see-button-full';
[, cardProjectHeading2.href] = project1.links;
cardProjectHeading2.textContent = project1.name;
cardProject2.appendChild(cardProjectHeading2);
const cardProject3 = document.querySelector('.fifth-box');
const cardProjectHeading3 = document.createElement('h3');
cardProjectHeading3.textContent = project3.name;
const descriptionNode3 = document.createElement('p');
descriptionNode3.textContent = project3.description;
const techList3 = document.createElement('ul');
const firstTech3 = document.createElement('li');
const firstTecha3 = document.createElement('a');
firstTech3.className = 'programming-boxes';
[firstTecha3.textContent] = project3.technologies;
const secondTech3 = document.createElement('li');
const secondTecha3 = document.createElement('a');
secondTech3.className = 'programming-boxes';
[, secondTecha3.textContent] = project3.technologies;
const thirdTech3 = document.createElement('li');
const thirdTecha3 = document.createElement('a');
thirdTech3.className = 'programming-boxes';
[,, thirdTecha3.textContent] = project3.technologies;
cardProject3.appendChild(cardProjectHeading3);
cardProject3.appendChild(descriptionNode3);
techList3.appendChild(firstTech3);
firstTech3.appendChild(firstTecha3);
techList3.appendChild(secondTech3);
secondTech3.appendChild(secondTecha3);
techList3.appendChild(thirdTech3);
thirdTech3.appendChild(thirdTecha3);
cardProject3.appendChild(techList3);
const mobilePopX = document.querySelector('.x-button');
const seeProject = document.querySelector('.see-button');
const seeProject2 = document.querySelector('.see-button-full');

const allBody = document.getElementById('container-main');

seeProject.addEventListener('click', () => {
  mobilePop.style.display = 'inline-block';
  const mobileImage = document.querySelector('.pop-img');
  mobileImage.src = project4.image;
  allBody.classList.remove('blur-remove');
  allBody.classList.add('blur-add');
});

seeProject2.addEventListener('click', () => {
  mobilePop.style.display = 'inline-block';
  const mobileImage = document.querySelector('.pop-img');
  mobileImage.src = project3.image;
  allBody.classList.remove('blur-remove');
  allBody.classList.add('blur-add');
});

mobilePopX.addEventListener('click', () => {
  mobilePop.style.display = 'none';
  allBody.classList.remove('blur-add');
  allBody.classList.add('blur-remove');
});

const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMessage = document.querySelector('.error-message');

function checkEmailInput() {
  const emailValue = email.value.trim();
  const regExp = /[A-Z]/;

  if (regExp.test(emailValue)) {
    email.classList.add('email-error');
    errorMessage.style.display = 'inline-block';
    return false;
  }
  email.classList.remove('email-error');
  errorMessage.style.display = 'none';
  return true;
}

const firstName = document.getElementById('name');
const emailStorage = document.getElementById('email');
const textarea = document.getElementById('textarea');

function store() {
  const firstNameV = document.getElementById('name').value;
  const emailStorageV = document.getElementById('email').value;
  const textareaV = document.getElementById('textarea').value;

  const storageObject = {
    name: firstNameV,
    email: emailStorageV,
    textarea: textareaV,
  };
  localStorage.setItem('formObject', JSON.stringify(storageObject));
}


form.addEventListener('submit', (e) => {
  if (!checkEmailInput()) {
    e.preventDefault();
  }
  store();
});