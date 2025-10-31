// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'month', 'year', 'age'];

for (let i = 0; i < array.length; i += 1) {
    document.write(`<div>${array[i]}</div>`)
}
