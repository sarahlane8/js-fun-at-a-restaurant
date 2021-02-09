class Chef {
  constructor(name, restaurant) {
      this.name = name;
      this.restaurant = restaurant;
      this.isMorning = true;
  }
  changeName(newName) {
    this.name = newName;
  }
  greetCustomer(customer, isMorning) {
    if (isMorning){
    return `Good morning, ${customer}!`
  } else {
    return `Hello, ${customer}!`
  }
  }
}






module.exports = Chef;
