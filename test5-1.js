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

// ======================= #16===========================
// Выполни рефакторинг класса Car.Добавь публичное статическое свойство
//  MAX_PRICE со значением 50000 - максимально допустимая цена
// автомобиля.

// Добавь сеттеру price проверку передаваемого значения
//  параметра newPrice.Если оно больше чем MAX_PRICE, сеттер ничего не делает,
//     а если меньше или равно, то перезаписывает цену автомобиля.
//  class Car {
//   // Change code 
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice > Car.MAX_PRICE)return;
      
    
//     this.#price = newPrice;
//   }
//   // Change code 
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
//  ======================= #17===========================
// Добавь классу Car публичный статический метод checkPrice(price),
//     принимающий цену автомобиля.Метод должен сравнить значения
// параметра  price и приватного статического свойства MAX_PRICE.
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code 
  

//   static checkPrice(price) {
    
//       if( price > Car.#MAX_PRICE ){
//         return `Error! Price exceeds the maximum`;
//       }
//       return  `Success! Price is within acceptable limits`;
    
//   }
//   // Change code 
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// =======================#20=====================================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code
//   blacklistedEmails =[];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//     blacklist(email) {
//       return this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//       return this.blacklistedEmails.includes(email);
//     }

//   // Change code 
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// ===============================================================
// кратность 3 и 5
// Если мы перечислим все натуральные числа до 10, кратные 3 или 5,
// мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.

// Завершите решение так, чтобы оно возвращало сумму всех чисел,
//  кратных 3 или 5 , меньше переданного числа. Кроме того,
//   если число отрицательное,
// верните 0 (для языков, в которых они есть).

// let total = 0;

// function solution(number){
  
   
//   for(let i=0; i < number; i+=1){
//     if(i % 3 === 0 || i % 5 === 0){
//        total +=i;
//     }   
//   }
//     return total;
//   }
// console.log(total);
// Map + Reduce======================================
// function solution(number) {
//     return number < 3 ? 0 : Array.from({ length: number },
//         (_, i) => i++).map(i => i % 3 === 0 || i % 5 === 0 ? i : 0)
//         .reduce((acc, cur) => acc + cur, 0)
// }
//  Filter + Reduce=========================================
// function solution(number) {
//     return number < 3 ? 0 : [...Array(number).keys()]
//         .filter(i => i % 3 === 0 || i % 5 === 0)
//         .reduce((acc, sum) => acc + sum, 0)
// }
