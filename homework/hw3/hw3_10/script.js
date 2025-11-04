// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
//
//     2. перебрати його циклом for
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// 7. замінити кожне число, кратне 3, на слово “okten”
//
// 8. вивести масив у зворотньому порядку.
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

console.log(`------------Перебір цикл while-------------`)
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i += 1;
}

console.log(`------------Перебір цикл for-------------`)
for (h = 0; h < array.length; h += 1) {
    console.log(array[h]);
}

console.log(`------------числа тільки з непарним індексом  цикл while-------------`)
let j = 0;

while (j < array.length) {

    if (j % 2) {
        console.log(`${array[j]}-індекс ${j}`);
    }
    j += 1;
}

console.log(`------------числа тільки з непарним індексом  цикл for-------------`)
for (z = 0; z < array.length; z += 1) {

    if (z % 2) {
        console.log(`${array[z]}-індекс ${z}`);
    }
}

console.log(`------------числа тільки парні  значення  цикл while-------------`)
let w = 0;

while (w < array.length) {
    if (!(array[w] % 2)) {
        console.log(`${array[w]} - індекс ${w}`);
    }
    w += 1;
}

console.log(`------------числа тільки парні  значення  цикл for-------------`)
for (m = 0; m < array.length; m += 1) {
    if (!(array[m] % 2)) {
        console.log(`${array[m]} - індекс ${m}`)
    }
}

console.log(`------------замінити кожне число, кратне 3, на слово “okten”-------------`)
for (s = 0; s < array.length; s += 1) {

    if (!(array[s] % 3)) {
        console.log(`Число кратне 3-${array[s]} - індекс-${s}`);
        array[s] = 'okten';

    }
}
console.log(array)

console.log(`------------вивести масив у зворотньому порядку.-------------`)
array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (f = array.length - 1; f >= 0; f -= 1) {
    console.log(array[f]);
}

console.log(`------------перебрати циклом while-задом наперед-------------`)
let a = array.length - 1;

while (a >= 0) {
    console.log(array[a]);
    a -= 1
}

console.log(`------------перебрати циклом for-задом наперед-------------`)
for (l = array.length - 1; l >= 0; l -= 1) {
    console.log(array[l]);
}

console.log(`------------числа тільки з непарним індексом  цикл while-задом наперед-------------`)
let t = array.length - 1;

while (t >= 0) {
    if (t % 2) {
        console.log(`індекс - ${t}`);
    }
    t -= 1;
}

console.log(`------------числа тільки з непарним індексом  цикл for-задом наперед-------------`)
for (p = array.length - 1; p >= 0; p -= 1) {
    if (p % 2) {
        console.log(`індекс - ${p}`);
    }
}

console.log(`------------числа тільки парні  значення  цикл while-задом наперед-------------`)
let k = array.length - 1;

while (k >= 0) {
    if (!(array[k] % 2)) {
        console.log(`${array[k]}-індекс ${k}`);
    }
    k -= 1;
}

console.log(`------------числа тільки парні  значення  цикл for-задом наперед-------------`)
for (d = array.length - 1; d >= 0; d -= 1) {
    if (!(array[d] % 2)) {
        console.log(`${array[d]}-індекс ${d}`)
    }
}

console.log(`------------замінити кожне число, кратне 3, на слово “okten”-задом наперед-------------`)
for (n = array.length - 1; n >= 0; n -= 1) {
    if (!(array[n] % 3)) {
        array[n] = 'okten'
    }
    console.log(`${array[n]} - ${n}`);
}

