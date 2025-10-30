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

