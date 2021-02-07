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



function searchOrder(deliveryOrders, menuItemName) {
  if (deliveryOrders[0].item || deliveryOrders[1].item === menuItemName) {
    return true;
  } else {
    return false;
  };
}






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
