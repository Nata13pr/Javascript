// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i <= 100; i++) {
    if(i%2){
        console.log(`Непарний крок ${i}`)
        document.write(`<h1>Непарний крок - ${i}</h1>`)
    }
}