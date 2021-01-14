import { HashStorage } from './HashStorage.js';
const addButton = document.getElementById('add-cocktail');
const getButton = document.getElementById('get-cocktail');
const deleteButton = document.getElementById('delete-cocktail');
const allButton = document.getElementById('all-cocktails');

const cocktailsStorage = new HashStorage();

addButton.addEventListener('click', () => {
    const name = window.prompt('Введите название коктейля');
    const isAlcohol = window.prompt('Напиток алкогольный?');
    const ingredients = window.prompt('Введите необходимые ингридиенты');

    cocktailsStorage.addValue(name, {name, isAlcohol, ingredients});
    console.log('Cocktail was added', cocktailsStorage.getValue(name));
})



