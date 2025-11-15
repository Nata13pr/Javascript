// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let mainDiv = document.createElement("div");
let h1 = document.createElement("h1");
h1.innerText = 'Кошик замовлень';

mainDiv.appendChild(h1);

const orderFunction = (carts, parentTag, description) => {
    console.log(description);
    if (!Array.isArray(carts)) {
        throw new Error(`It's not an array`);
    } else {
        let mainUl = document.createElement("ol");

        carts.forEach(cart => {
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            h2.innerText = description;
            li.appendChild(h2);

            for (let element in cart) {
                if (!Array.isArray(cart[element])) {

                    if (element === 'thumbnail') {
                        let img = document.createElement("img");
                        img.src = cart[element];
                        li.appendChild(img);
                    } else {
                        let p = document.createElement("p");
                        p.innerText = `${element} - ${cart[element]}`;
                        li.appendChild(p);
                    }

                } else {
                    orderFunction(cart[element], li, 'Деталі');
                }
            }
            mainUl.appendChild(li);
        })
        parentTag.appendChild(mainUl)
    }
}

document.body.appendChild(mainDiv);

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(responseObj =>

        orderFunction(responseObj.carts, mainDiv, 'Замовлення')
    )
