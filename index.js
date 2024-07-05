
const recipeNameElement = document.getElementById('recipe-name');
const recipeName = recipeNameElement.textContent;
const recipeNameTag = recipeNameElement.tagName;

const descriptionParagraph = document.querySelector('p.description');
const fontSize = window.getComputedStyle(descriptionParagraph).fontSize;

const image = document.querySelector('img');
const altAttribute = image.alt;

const imageUrl = image.src;
const imageWidth = image.naturalWidth;
const imageHeight = image.naturalHeight;

const imageData = {
  url: imageUrl,
  height: imageHeight,
  width: imageWidth,
};

// Log the results to the console
console.log(`Recipe name: ${recipeName}`);
console.log(`HTML tag used to display recipe name: ${recipeNameTag}`);
console.log(`Font size of description paragraph: ${fontSize}`);
console.log(`Alt attribute of image: ${altAttribute}`);
console.log(imageData);

// Get the section with the ingredients
const initialSection = document.querySelector('h4');
const tillSmetenHeader = Array.prototype.filter.call(document.querySelectorAll('h4'), function(h4) {
  return h4.textContent.trim() === 'Till smeten';
})[0];
const tillSmetenSection = tillSmetenHeader.nextElementSibling;

const ingredients = tillSmetenSection.querySelectorAll('li');
console.log(`Found ${ingredients.length} ingredients:`);

ingredients.forEach((ingredient, index) => {
  console.log(`Ingredient #${index + 1}: ${ingredient.textContent.trim()}`);
});

// Get the forth ingredient
const fourthIngredient = ingredients[3];
console.log(`The fourth ingredient is: ${fourthIngredient.textContent.trim()}`);

// Create an array of objects from the instructions
const instructionsSection = document.querySelector('ol');
const instructions = instructionsSection.querySelectorAll('li');

const instructionArray = Array.from(instructions).map((instruction, index) => {
  return {
    order: index + 1,
    text: instruction.textContent.trim()
  };
});

console.log(instructionArray);