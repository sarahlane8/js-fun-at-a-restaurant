
function createRestaurant(restaurantName, menus) {
  pizzaRestaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
      }
    }
  return pizzaRestaurant;
};


function addMenuItem(name, foodItem) {
  if (foodItem.type === "breakfast" && !name.menus.breakfast.includes(foodItem)) {
 name.menus.breakfast.push(foodItem);
} else if (foodItem.type === "lunch" && !name.menus.lunch.includes(foodItem)){
name.menus.lunch.push(foodItem);
} else if (foodItem.type === "dinner" && !name.menus.dinner.includes(foodItem)){
name.menus.dinner.push(foodItem);
};
}


function removeMenuItem(restaurant, menuItem, menuType) {
console.log(restaurant.menus[menuType].includes(restaurant.menus[menuType]);

}


























//line 206
// // removeMenuItem(pizzaRestaurant, "Veggie Pizza", "dinner");
//
// function removeMenuItem(restName, menuItem, menuType) {
//   // console.log("1", restName.menus.breakfast);
//   // console.log("2", restName.menus.lunch);
//   // console.log("3", restName.menus.dinner);
// if (restName.menus.breakfast[0].name === menuItem &&
// (restName.menus.breakfast[0].type) === menuType) {
//   restName.menus.breakfast.pop();
//   return "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!";
// } else if (restName.menus.dinner[0].name === "Veggie Pizza") {
//   restName.menus.dinner.pop();
//   return "No one is eating our Veggie Pizza - it has been removed from the dinner menu!";
// } else if (!restName.menus.dinner.includes(menuItem)) {
//    return "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!";
// }
// };



//   var arepaRestaurant = createRestaurant("Quiero Arepas");
//   var error = removeMenuItem(arepaRestaurant, "Mom's Spaghetti", "lunch");
//
//   assert.equal(error, "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!");



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
