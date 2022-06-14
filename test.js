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