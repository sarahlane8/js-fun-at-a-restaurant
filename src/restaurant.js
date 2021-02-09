
function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
      }
    }
};





function addMenuItem(restaurant, item) {
  var menuType = item.type;
  var hasMenuType = restaurant.menus[menuType];

  if (hasMenuType && !restaurant.menus[menuType].includes(item)) {
    restaurant.menus[menuType].push(item);
    return;
  }

  restaurant.menus[menuType] = [item];
}


// function addMenuItem(restaurant, item) {
//   var menu = restaurant.menus[item.type];
//   if (!menu) {
//     menu = [item];
//   }
//   var isOnMenu = menu.includes(item);
//   if (!isOnMenu) {
//     menu.push(item);
//   }
// }





function removeMenuItem(restaurant, menuItem, menuType) {
  var menu = restaurant.menus[menuType];
  var message = `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
  var errorMessage = `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;

  if (!menu) {
    return errorMessage
  };

  var deleteCount = 0;

  for (var i = 0; i < menu.length; i++) {
    var item = menu[i].name;
    var shouldDelete = item === menuItem;

    if (shouldDelete) {
      deleteCount++
      menu.splice(i, 1);
    }
  }

  if (deleteCount === 0) {
      return errorMessage;
    }
  return message;
}



//
// function removeMenuItem(restaurant, menuItem, menuType) {
//   var menu = restaurant.menus[menuType];
//   var successMessage = `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
//   var errorMessage = `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
//   if (!menu) {
//     return errorMessage;
//   }
//   for (var i = 0; i < menu.length; i++) {
//     var itemName = menu[i].name;
//     var shouldDeleteItem = itemName === menuItem;
//     if (shouldDeleteItem) {
//       menu.splice(i, 1);
//       return successMessage;
//     }
//   }
// }





module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
