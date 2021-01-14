const addButton = document.getElementById('add-cocktail');
const getButton = document.getElementById('get-cocktail');
const deleteButton = document.getElementById('delete-cocktail');
const allButton = document.getElementById('all-cocktails');

class HashStorage {

    constructor() {
        this.storage = {}
    }

    addValue(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        console.log(this.storage);
        return this.storage[key];
    }

    deleteValue(key) {
        if(!(key in this.storage)) {
            return false;
        } else {
            
            return delete this.storage[key]
        }
        
    }

    getKeys() {
        return Object.keys(this.storage)
    }
}

function cocktailCard(name, isAlcohol, ingredients, recipe) {
    const newCard = document.createElement('div');
    newCard.classList.add('new-card');
    const cocktailsContainer = document.querySelector('cocktails-container');
    cocktailsContainer.append(newCard)
    const title = document.createElement('h3');
    title.classList.add('name');
    title.innerHTML = name;
    newCard.append(title);
    const alcohol = document.createElement('h4');
    alcohol.classList.add('alcohol');
    alcohol.innerHTML = `Алкогольный: ${isAlcohol}`;
    newCard.append(alcohol);
    const params = document.createElement('h4');
    params.innerHTML = 'Ингредиенты: ';
    params.innerHTML = ingredients;
    newCard.append(params);
    const sheme = document.createElement('p');
    sheme.innerHTML = recipe;
    newCard.append(sheme);
}

const cocktailsStorage = new HashStorage();

addButton.addEventListener('click', () => {
    const name = window.prompt('Введите название коктейля');
    const isAlcohol = window.prompt('Напиток алкогольный?');
    const ingredients = window.prompt('Введите необходимые ингридиенты');
    const recipe = window.prompt('Введите рецепт приготовления');

    cocktailsStorage.addValue(name, {name, isAlcohol, ingredients, recipe});
})

getButton.addEventListener('click', () => {
    const name = window.prompt('Введите название коктейля');
    console.log('Cocktail was added', cocktailsStorage.getValue(name));
    let res = cocktailsStorage.getValue(name);
    cocktailCard(res['name'], res['isAlcohol'], res['ingredients'], res['recipe']);
})

deleteButton.addEventListener('click', () => {
    const name = window.prompt('Введите название коктейля');
    cocktailsStorage.deleteValue(name);
    window.alert(`Коктейль ${name} удален`)
    cocktailsStorage.getValue(name);
})

allButton.addEventListener('click', () => {
    console.log(cocktailsStorage.getKeys());
})
