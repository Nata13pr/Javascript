// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//
//     Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
console.log(hello);

let owu = 'owu';
console.log(owu);

let comString = 'com';
console.log(comString);

let ua = 'ua';
console.log(ua);

let numberOne = 1;
console.log(numberOne);

let numberTen = 10;
console.log(numberTen);

let bigNegativeNumber = -999;
console.log(bigNegativeNumber);

let bigPositiveNumber = 123;
console.log(bigPositiveNumber);

let pi = 3.14;
console.log(pi);

let floatNumber = 2.7;
console.log(floatNumber);

let sixteen = 16;
console.log(sixteen);

let booleonPositive = true;
console.log(booleonPositive);

let booleonNegative = false;
console.log(booleonNegative);

// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)
let firstName = 'Наталія';
let middleName = 'Михайлівна';
let lastName = 'Вардінська';

let person = `${firstName} ${middleName} ${lastName}`;

console.log(person);

// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
//     let a = 100; let b = ‘100’; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль
let name = prompt("Ім'я");
let middle = prompt('По-батькові');
let age = prompt('Скільки вам років?');
console.log(`Мене звати ${name} ${middle}.Мені ${age} років.`);