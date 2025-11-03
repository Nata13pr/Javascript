console.log('Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.')
let array = [];

array[0] = '97';
array[1] = false;
array[2] = 'fall';
array[3] = 94
array[4] = 'dog'
array[5] = true
array[6] = 'doll'
array[7] = 12
array[8] = false
array[9] = 33

for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
}
