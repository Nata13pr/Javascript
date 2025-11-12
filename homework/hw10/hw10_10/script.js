// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let array = [];
for (let i = 0; i < 100; i++) {
    array.push({id: i + 1, name: 'Kolja'});
}

let mainDiv = document.createElement('div');

let currentPage = 1;
let start = 0;

function circle(start, page) {
    for (let j = start; j < 10 * page; j++) {
        div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerText = array[j].name;
        let p = document.createElement("p");
        p.innerText = array[j].id;
        mainDiv.append(h2, p);
    }
}

let firstButton = document.createElement('button');
firstButton.innerText = 'Previous'
let secondButton = document.createElement('button');
secondButton.innerText = 'Next'

circle(start, currentPage)

document.body.append(mainDiv, firstButton, secondButton);
secondButton.addEventListener('click', function () {

    if (array.length > start + 10) {
        currentPage += 1;
        start += 10;
        mainDiv.innerText = '';
        circle(start, currentPage)
    }
})
firstButton.addEventListener('click', function () {
    if (start !== 0 && currentPage !== 1) {
        currentPage -= 1;
        start -= 10;
        mainDiv.innerText = '';
        circle(start, currentPage)
    }
})
