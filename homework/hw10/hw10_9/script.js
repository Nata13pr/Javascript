// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


let div = document.getElementById("div");
div.innerText = localStorage.getItem('money') || '100грн';

let milliseconds = Date.now();
let time = localStorage.getItem('time') || milliseconds;

if (milliseconds - Number(time) >= 10000) {
    localStorage.setItem('money', `${parseInt(div.innerText) + 10}грн`);
    div.innerText = `${parseInt(div.innerText) + 10}грн`
}
localStorage.setItem('money', div.innerText);
localStorage.setItem('time', milliseconds.toString())

