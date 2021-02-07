function takeOrder(order1, deliveryOrders) {
  if (deliveryOrders.length < 3) {
  deliveryOrders.push(order1);
};
}


function refundOrder(num, deliveryOrders) {
  deliveryOrders.splice(num-1, 1);
}


function listItems(deliveryOrders) {
   var str = "";
  for (var i = 0; i < deliveryOrders.length; i++) {
    str = str + ", " + deliveryOrders[i].item;
  }
  newStr = str.slice(2);
  return newStr;
}


// Full disclosure, I could not get a for loop to work for me with this function.
//I ended up hard coding it and then working with my mentor on this.  He helped
//me see the error in my ways! The return placement is very important!!

function searchOrder(deliveryOrders, menuItemName) {
  for (var i =0; i < deliveryOrders.length; i++) {
    var itemName = deliveryOrders[i].item;
    if (itemName === menuItemName) {
      return true;
    }
  }
  return false;
}











module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
