// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let h1 = document.createElement('h1');
h1.innerText = `Конвертер: кг → фунти (lb)`;

let input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('min', '1');
input.setAttribute('name', 'converter');

let p = document.createElement('p');
document.body.append(h1, input, p);

input.addEventListener('input', function () {
    let sum = Number(this.value) * 2.20462;
    p.innerText = ` ${this.value} кілограм  перевести в фунти дорівнює ${sum.toString()}`;
})