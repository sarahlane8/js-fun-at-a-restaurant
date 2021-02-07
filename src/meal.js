function nameMenuItem(foodName) {
  return (`Delicious ${foodName}`);
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    return ingredients;
  } else {
    ingredients = ingredients.push(food);
    return ingredients;
  }
};

function formatPrice(price) {
  return ("$" + price);
}

function decreasePrice(price) {
  return (price - (price * .1));
}

function createRecipe(nameOfDish, foodItems, typeOfDish) {
    recipe = {
      title: nameOfDish,
      ingredients: foodItems,
      type: typeOfDish,
    };
    return recipe;
};





















module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
