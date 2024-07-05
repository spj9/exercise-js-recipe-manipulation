const logoTextElements = document.querySelectorAll('.logo-text');

logoTextElements.forEach(element => {
  element.style.color = '#384241';
});

// justify-content & border color
const headerElement = document.querySelector('header');
headerElement.style.justifyContent = 'flex-start';
headerElement.style.borderBottomColor = 'lightgray';

// change recipe name
const recipeNameElement = document.getElementById('recipe-name');
recipeNameElement.textContent = 'Frozen Cheesecake';

// timer image
const timerSpan = document.querySelector('.time-container span:first-child');
timerSpan.classList.add('material-icons');

// recipe time
const timeSpan = document.getElementsByClassName('time-container')[0].getElementsByTagName('span')[1];
timeSpan.textContent = '60+ min';

// correct the image
const image = document.querySelector('img');
image.src = 'assets/frozen-cheesecake-slice.jpg';

// ingredients bg-color
const ingredientsContainer = document.querySelector('.ingredients-container');
ingredientsContainer.style.backgroundColor = '#f9f9f9';

// ingredients for "botten"
const bottomIngredientsList = document.querySelector('.ingredients-list-bottom');
const textNode = bottomIngredientsList.querySelector('p');
textNode.parentNode.removeChild(textNode);

const listItem1 = document.createElement('li');
listItem1.textContent = '15st digistivetex';
bottomIngredientsList.appendChild(listItem1);

const listItem2 = document.createElement('li');
listItem2.textContent = 'Lite smör';
bottomIngredientsList.appendChild(listItem2);

// fix the ingredients for "smeten"
const pasteIngredientsList = document.querySelector('.ingredients-list-paste');
const thirdIngredient = pasteIngredientsList.children[2];
thirdIngredient.textContent = '3tsk vaniljsocker';

const newIngredient = document.createElement('li');
newIngredient.textContent = '400g naturell philadelphiaost';
pasteIngredientsList.appendChild(newIngredient);

// remove shadow on instructions title
const instructionsElement = document.querySelector('.instructions.shadow');
instructionsElement.classList.remove('shadow');

// correct instructions
const instructionsList = document.querySelector('.instructions-list');
const incorrectElements = [instructionsList.children[8], instructionsList.children[9]];

incorrectElements[0].textContent = "Ställ in i frysen över natten.";
incorrectElements[1].textContent = "Servera och toppa med det du känner för.";