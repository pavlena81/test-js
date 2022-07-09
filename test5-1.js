// 
// ============#1================
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ==================================#2=================================
// правильно расставив this в методах объекта historyService,
// чтобы методы начали работать правильно.
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code 
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
// //     const uniqueEmails = new Set(emails);
// //     return [...uniqueEmails];
// //   },
// //   getOrdersByEmail(email) {
// //     return this.orders.filter(order => order.email === email);
// //   },
// //   // Change code 
// // };
// ====== Метод Object.create(obj)
//  создаёт и возвращает новый объект,
//     связывая его с объектом obj=========================
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// =========#4==================================================
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code 

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// =====================#5===================================
// Напиши класс Storage, который будет создавать объекты для
//  управления складом товаров.Класс ожидает только один аргумент
//     - начальный массив товаров,
//     который записывается на создаваемый объект в свойство items.

// class Storage {
//     constructor(items){
//         this.items = items;
//     }

//     getItems(){
//         return this.items;
//     }

//     addItem(newItem){
//         this.items.push(newItem);
        
//     }

//     removeItem(itemToRemove){
//          this.items = this.items.filter(item => item !== itemToRemove);
        
//     }
// }

// // Change code above 
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ========================#11=======================================
// class StringBuilder{
    
//     constructor(value){
//         this.value = value;
//     }
//     getValue(){
//         return this.value;
//     }

//     padEnd(str){
//       this.value +=  str;
//     }
//     padStart(str){
//      this.value = str + this.value;
//     }

//     padBoth(str){
//      this.value = str + this.value + str;
//     }

// }

// // Change code above 
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// ========================================#14==============================
  
// Выполни рефакторинг класса StringBuilder,
//     сделав свойство value приватным.

//   class StringBuilder {
//    // Change code below
//       #value;
//    constructor(initialValue) {
//      this.#value = initialValue;
//    }

//    getValue() {
//     return this.#value;
//    }

//   padEnd(str) {
//      this.#value += str;
//    }

//    padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//          this.padStart(str);
//      this.padEnd(str);
//    }
//  }

// // // Change code 
//  const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

