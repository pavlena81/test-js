// Напиши скрипт, который выводит в консоль округленные вверх / вниз и т.д.значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round(). 
// Проверь что будет в консоли при значениях 27.3 и 27.9.
const value = 27.9;
 console.log(Math.floor(value)); 
console.log(Math.ceil(value));
console.log(Math.round(value));
 
// Напиши скрипт который рассчитывает индекс массы тела человека. 
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// // Вес и высота хранятся в переменных weight и height, 
// но не как числа, а в виде строк(специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7,
//     то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

let weight = '88,3';
let height = '1.75';
weight = weight.replace(',', '.');
height = height.replace(',', '.');
Number.parseFloat(weight);
Number.parseFloat(height);

const bmi = (weight / (height ** 2)).toFixed(1);
 
console.log(bmi);
console.log(bmi); // 28.8

// interesting task
console.log(3 > 2 > 1); // false;


console.log(12 / "6"); // 2;
console.log(true + false); // 1;

console.log(!!"false" == !!"true"); //true;


// true + false
// 12 / "6"
// "number" + 15 + 3
console.log("number" + 15 + 3);// number153;

// 15 + 3 + "number"
console.log(15 + 3 + "number"); // 18number;
// [1] > null
console.log([1] > null);//true;

// "foo" + + "bar"
// 'true' == true
// false == 'false'
// null == ''
// !!"false" == !!"true"
// [‘x’] == ‘x’
// [] + null + 1
// 0 || "0" && {}
// [1,2,3] == [1,2,3]
// {}+[]+{}+[1]
// !+[]+[]+![]
// new Date(0) - 0
// new Date(0) + 0

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

const fruit = "apples";
console.log(fruit.split("")); // ['a', 'p', 'p', 'l', 'e', 's']

const frase = ["it`s", "a", "nice", "day"];
console.log(frase.join("-")); // it`s, a, nice, day
console.log(frase.join(" "));

const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join("-")); // "JavaScript-это-интересно"
// ////////////////////////
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
 for (let i = 0; i < order.length; i += 1){
   total += order[i];
 }
  // Change code above this line
  return total;
}

// ///////////////////////
function findLongestWord(string) {
  
  const stringSplit = string.split(' ');
  let longestWord = " ";
  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
    longestWord = word;
}
}
  return longestWord; 
  
}
// ///////////////////////

function filterArray(numbers, value) {
  
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  
}
//   or
// function filterArray(numbers, value) {
  
//   const filteredNumbers = [];

//   for (const number of numbers) {   

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;  
// }

// ///////////////////////
function getEvenNumbers(start, end) {
   
  let numbers = [];
  for (i = start; i<= end; i +=1){
    if(i % 2 === 0){
       numbers.push(i);
    }
  }
  return numbers;   
}
  // ///////////////////////
//   function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// /////////////////////////////////
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// /////////////////////////
const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смешного человека",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480
// ////////////////////////////////
// const a = {};
 // const b = {};
 // const c ={ // d:1,
 // e:4 // };
 // c[a] = 3;
// c[b] = 4; //
// console.log(c);
//////////////////////////
// const result1 = 'hello' ?? 'world'; // console.log(result1); // const result2 = 0 ?? 5; // console.log(result2); // const result3 = '' ?? 'javascript'; // console.log(result3); // const result4 = false ?? true; // console.log(result4); // const result5 = null ?? 'not null'; // console.log(result5); // const result6 = undefined ?? 'defined'; // console.log(result6); // let message = null; // const hello = 'Hi JavaScript'; // const result7 = message ?? hello; // console.log(result7);
 // const result6 = null ?? NaN;
 // console.log(result6);
// ////////////////////////////////////////////////////////
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${item.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    // const { potions } = this;
    // for (let i = 0; i < potions.length; i += 1) {
    //   const { name } = potions[i];
    //   if (potionName === name) {
    //     potions.splice(i, 1);
    //   }
    // }


    const {potions} = this;
    for (let i = 0; i < potions.length; i += 1) {

      if (potionName === potions[i].name) {

        potions.splice(i, 1)
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1){
      if (oldName === this.potions[i].name){
     this.potions[i].name = newName;
     return}
    }
      return `Potion ${oldName} is not in inventory!`;
   
  },
  // Change code above this line
};

// let audi = { wheels: 4 };
// let tesla = audi;
// delete audi.wheels;
// console.log(audi.wheels, tesla.wheels);
// //undefined undefined

(function (i) {
  console.log(i);
})(25)
console.log(window.i)
///////////////////////
const findLogin = function (allLogins, loginsToFind) {
  const message = allLogins.includes(loginsToFind)
    ? `user ${loginToFind} find`
    : `user ${loginToFind} don't find`;
  return message
}
