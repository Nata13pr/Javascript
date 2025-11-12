// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

window.onload = function () {
    let div = document.getElementById('number');

    let number = JSON.parse(localStorage.getItem('number')) || 0;

    let newNumber = number + 1;
    localStorage.setItem('number', newNumber.toString());
    div.innerText = newNumber;
}