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
