// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i+=1) {
    if(!(i%2)){
        console.log(`Парний крок - ${i}`);
        document.write(`<h1>Парний крок - ${i}</h1>`)
    }
}