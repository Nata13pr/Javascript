// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = ['name', 34, true, {
    name: 'vasya',
    age: 14
}, false, 'sky', [1, 5, 6, 8, 9], 999, ['sonya', 'leska', 'kolja'], 'super', -1111];
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[array.length - 1])

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
let obj1 = {
    title: 'Batman',
    pageCount: 456,
    genre: 'triller'
}
console.log(obj1)

let obj2 = {
    title: 'Love story',
    pageCount: 800,
    genre: 'drama'
}
console.log(obj2)

let obj3 = {
    title: 'Murder in Alabama',
    pageCount: 317,
    genre: 'horror'
}
console.log(obj3)

// Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Batman',
    pageCount: 456,
    genre: 'triller',
    authors: [
        {name: "Brennon", age: 60},
        {name: 'John', age: 37}
    ]
}
console.log(book1)

let book2 = {
    title: 'Love story',
    pageCount: 800,
    genre: 'drama',
    authors: [
        {name: "James", age: 87},
        {name: 'John', age: 37},
        {name: 'Anna', age: 61},
        {name: 'Veronika', age: 34}
    ]
}
console.log(book2)

let book3 = {
    title: 'Murder in Alabama',
    pageCount: 317,
    genre: 'horror',
    authors: [
        {name: "Archi", age: 24},
    ]
}
console.log(book3);

// Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'vasja', username: 'vasjaK', password: 123456},
    {name: 'olia', username: 'king', password: 33343},
    {name: 'anna', username: 'lion', password: 565675},
    {name: 'kolja', username: 'killer', password: 455464},
    {name: 'nata', username: 'doll', password: 2423234},
    {name: 'oliver', username: 'kitty', password: 3353453},
    {name: 'hanna', username: 'flower', password: 999676},
    {name: 'lev', username: 'dad', password: 456436},
    {name: 'jan', username: 'great', password: 323424},
    {name: 'taras', username: 'kittyKat', password: 54564564}
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[users.length - 1]['password']);

// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
let temperature = [
    {morning: 0, noon: +4, evening: +3},
    {morning: +5, noon: +14, evening: +8},
    {morning: +15, noon: 20, evening: 19},
    {morning: -3, noon: +2, evening: +1},
    {morning: -10, noon: -1, evening: -1},
    {morning: +9, noon: +14, evening: +8},
    {morning: +18, noon: +24, evening: +23}
]
console.log(temperature[4].evening);

// – Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x;
// Перевірка
// x=1;
// x=0;
// x=-3;

if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}

// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).
let time;

if (time <= 15) {
    console.log("Це перша четверть години")
} else if (time > 15 && time <= 30) {
    console.log("Це друга четверть години")
} else if (time > 30 && time <= 45) {
    console.log("Це третя четверть години")
} else if (time > 45 && time <= 59) {
    console.log("Це четверта чверть години")
} else {
    console.log("Година введена не вірно!")
}

// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 318;

switch (true) {
    case day >= 1 && day <= 10:
        console.log("Перша декада місяця");
        break;
    case day > 10 && day <= 20:
        console.log("Друга декада місяця");
        break;
    case day > 20 && day <= 31:
        console.log("Третя декада місяця")
        break;
    default:
        console.log('Не праильно введені данні')

}

if (day >= 1 && day <= 10) {
    console.log("Перша декада місяця");
} else if (day > 10 && day <= 20) {
    console.log("Друга декада місяця");
} else if (day > 20 && day <= 31) {
    console.log("Третя декада місяця")
} else {
    console.log('Не праильно введені данні')
    x
}

// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfTheWeek;

switch (dayOfTheWeek) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Not correct number!')
}

// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.
let numberOne;
let numberTwo;

if (numberOne > numberTwo) {
    console.log(numberOne)
} else if (numberOne < numberTwo) {
    console.log(numberTwo)
} else if (numberOne === numberTwo) {
    console.log(`${numberOne} and ${numberTwo} are equal.`)
} else {
    console.log('Something went wrong!')
}

// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який

// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let variableX = '6';

if (variableX === "" || variableX === -0 || variableX === false || isNaN(variableX) || variableX === 0) {
    variableX = 'default';
    console.log(variableX)
} else {
    console.log(variableX)
}

if (!variableX) {
    variableX = 'default';
    console.log(variableX)
} else {
    console.log(variableX)
}

variableX = !variableX ? 'default' : variableX;
console.log(variableX)

// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray[0].monthDuration} month.`)
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray[0].monthDuration} month.`)
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray[0].monthDuration} month.`)
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray[0].monthDuration} month.`)
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray[0].monthDuration} month.`)
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray[0].monthDuration} month.`)
}


