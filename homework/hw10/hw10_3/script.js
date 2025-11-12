// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let form = document.createElement('form');
let inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'name');

let inputSurname = document.createElement('input');
inputSurname.setAttribute('type', 'text');
inputSurname.setAttribute('name', 'surname');

let inputAge = document.createElement('input');
inputAge.setAttribute('type', 'number');
inputAge.setAttribute('name', 'age');

let inputSubmit = document.createElement('input');
inputSubmit.setAttribute('type', 'submit');
inputSubmit.setAttribute('name', 'submit');
inputSubmit.setAttribute('value', 'submit');


form.append(inputName, inputSurname, inputAge, inputSubmit)
document.body.appendChild(form);

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    let user = {name: this.name.value, surname: this.surname.value, age: this.age.value};
    let mainDivFromBrowser = document.getElementById('mainDiv')

    if (mainDivFromBrowser) {
        mainDivFromBrowser.remove()
    }
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    for (let item in user) {
        console.log(user[item]);
        let p = document.createElement("p");
        p.innerText = `${item} - ${user[item]} `;
        mainDiv.appendChild(p);
    }
    document.body.appendChild(mainDiv);
})
