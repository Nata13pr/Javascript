// 1. Створити пустий масив та :
console.log(`--------------------a. заповнити його 50 парними числами за допомоги цикл------------------------`)
let evenArray = [];

for (let i = 0; i < 50; i += 1) {
    evenArray[i] = i * 2;
}

console.log(evenArray);
console.log(`----2. Вивести за допомогою console.log кожен третій елемент----`)

for (let i = 0; i < evenArray.length; i++) {
    if (!(i % 3)) {
        console.log(`Елемент ${evenArray[i]} - індекс${i}`)
    }
}
console.log(`---3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.--`)
for (let i = 0; i < evenArray.length; i++) {
    if (!(i % 3) && !(evenArray[i]%2)) {
        console.log(`Парний елемент ${evenArray[i]} - індекс${i}`)
    }
}

console.log(`---------- Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив---------`)
let newEvenArray=[];

for (let i = 0; i < evenArray.length; i++) {
    if (!(i % 3) && !(evenArray[i]%2)) {
      newEvenArray[newEvenArray.length]= evenArray[i];
    }
}
console.log(newEvenArray)
console.log(`============================================================================================`)

console.log(`---------------------------- b. заповнити його 50 непарними числами за допомоги циклу.--------------------`)
let oddArray = [];

for (let i = 0; i < 50; i += 1) {
    oddArray[i] = (i * 2) + 1;
}

console.log(oddArray);

console.log(`----2. Вивести за допомогою console.log кожен третій елемент----`)
for (let i = 0; i < oddArray.length; i++) {
    if (!(i % 3)) {
        console.log(`Елемент ${oddArray[i]} - індекс${i}`)
    }
}

console.log(`---3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.--`)

for (let i = 0; i < oddArray.length; i += 1) {

    if(!(i % 3) && !(oddArray[i]%2)) {
        console.log(`Елемент ${oddArray[i]} - індекс${i}`)
    }else{
        console.log(`Немає парний елементів.`)
    }
}

console.log(`---------- Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив---------`)
let newOddArray=[];

for (let i = 0; i < oddArray.length; i++) {
    if (!(i % 3) && !(oddArray[i]%2)) {
        newOddArray[newOddArray.length]= oddArray[i];
    }
}
console.log(newOddArray)
console.log(`============================================================================================`)



console.log(`------------------- c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)-------------------------`)
let randomNumbersArray = [];

for (let i = 0; i < 20; i += 1) {
    randomNumbersArray[i] = Math.round(Math.random() * 100)
}
console.log(randomNumbersArray);

console.log(`----2. Вивести за допомогою console.log кожен третій елемент----`)
for (let i = 0; i < randomNumbersArray.length; i++) {
    if (!(i % 3)) {
        console.log(`Елемент ${randomNumbersArray[i]} - індекс${i}`)
    }
}

console.log(`---3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.--`)
for (let i = 0; i < randomNumbersArray.length; i++) {
    if (!(i % 3) && !(randomNumbersArray[i]%2)) {
        console.log(`Парний елемент ${randomNumbersArray[i]} - індекс${i}`)
    }
}
console.log(`---------- Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив---------`)
let newRandomNumbersArray=[];

for (let i = 0; i < randomNumbersArray.length; i++) {
    if (!(i % 3) && !(randomNumbersArray[i]%2)) {
        newRandomNumbersArray[newRandomNumbersArray.length]= randomNumbersArray[i];
    }
}
console.log(newRandomNumbersArray)

console.log(`============================================================================================`)
console.log(`--d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)---`)
let randomNumbersWithMinMaxValueArray = [];

let min = 8;
let max = 732;

for (let i = 0; i < 20; i += 1) {
    randomNumbersWithMinMaxValueArray[i] = Math.floor((Math.random()) * (max - min) + min);
}

console.log(randomNumbersWithMinMaxValueArray);

console.log(`----2. Вивести за допомогою console.log кожен третій елемент----`)
for (let i = 0; i < randomNumbersWithMinMaxValueArray.length; i++) {
    if(!(i%3)){
        console.log(`Елемент ${randomNumbersWithMinMaxValueArray[i]} - індекс${i}`)
    }
}

console.log(`---3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.--`)
for (let i = 0; i < randomNumbersWithMinMaxValueArray.length; i++) {
    if (!(i % 3) && !(randomNumbersWithMinMaxValueArray[i]%2)) {
        console.log(`Парний елемент ${randomNumbersWithMinMaxValueArray[i]} - індекс${i}`)
    }
}

console.log(`---------- Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив---------`)
let newRandomNumbersWithMinMaxValueArray=[];

for (let i = 0; i < randomNumbersWithMinMaxValueArray.length; i++) {
    if (!(i % 3) && !(randomNumbersWithMinMaxValueArray[i]%2)) {
        newRandomNumbersWithMinMaxValueArray[newRandomNumbersWithMinMaxValueArray.length]= randomNumbersWithMinMaxValueArray[i];
    }
}
console.log(newRandomNumbersWithMinMaxValueArray)