// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


// let div = document.getElementById("div");
// div.innerText = localStorage.getItem('money') || '100грн';
//
// let milliseconds = Date.now();
// let time = localStorage.getItem('time') || milliseconds;
//
// if (milliseconds - Number(time) >= 10000) {
//     localStorage.setItem('money', `${parseInt(div.innerText) + 10}грн`);
//     div.innerText = `${parseInt(div.innerText) + 10}грн`
// }
// localStorage.setItem('money', div.innerText);
// localStorage.setItem('time', milliseconds.toString())

// Колін варіантг
const cuurentTime = Date.now();

const storagedMoney = localStorage.getItem('money') || 100;
const storagedTime = localStorage.getItem('time') || cuurentTime;

let money = Number(storagedMoney)

console.log(cuurentTime-storagedTime)
if (cuurentTime - storagedTime >= 10000) {
    money = money+ 10;
}
let div = document.getElementById("div");
div.innerText = `${money} грн `;
document.body.appendChild(div);
localStorage.setItem('money', money);
localStorage.setItem('time', cuurentTime)


console.log(storagedMoney)
