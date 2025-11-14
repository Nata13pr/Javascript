// let mainDiv = document.createElement('div');
//
// const createElement = (elementTag, options) => {
//     const element = document.createElement(elementTag);
//
//     const classNames = options?.classNames;
//
//     if (classNames) {
//         if (Array.isArray(classNames)) {
//             element.classList.add(...classNames);
//         } else if (typeof classNames === 'string') {
//
//             element.classList.add(...classNames.trim().split(' '));
//         }
//     }
//
//     return element;
// }
// const sumEl=createElement('div',{classNames:'yyy iii iii'})
// document.body.appendChild(sumEl);
//
// const myFunction = (orderList) => {
//     console.log(orderList)
//     if (!Array.isArray(orderList)) {
//         throw new Error("Array should be an array");
//     }
//     const orderListElement = document.createElement('ul')
//     orderListElement.classList.add('orderList');
//
//     orderList.forEach(order => {
//         // const {discountedTotal, id, products, total, totalProducts, totalQuantity, userId} = order;
//         const orderCardElement = document.createElement('li');
//         orderCardElement.classList.add('orderCard');
//         orderCardElement.dataset.orderId = id;
//
//         const orderCardInfoElement = document.createElement('div');
//         orderCardInfoElement.classList.add('orderCardInfo');
//         // orderCardInfoElement.innerText=`orderId:${id},-------- ${total},`
//         for (const orderKey in order) {
//             if (orderKey !== 'products') {
//                 const element = document.createElement("div");
//
//                 element.classList.add('orderCardInfoElement');
//                 element.innerText = `${orderKey.toUpperCase()}: ${order[orderKey]}`;
//
//                 orderCardInfoElement.appendChild(element);
//             }
//         }
//
//         orderCardElement.append(orderCardInfoElement);
//
//         if (Array.isArray(products)) {
//             const orderCardProductListElement = document.createElement('ul');
//             orderCardProductListElement.classList.add('orderCardProductList');
//
//             products.forEach(product => {
//                 // const {discountPercentage, discountedTotal, id, price, quantity, thumbnail, title, total} = product;
//                 const orderCartProductListItemElement = document.createElement('li');
//                 orderCartProductListItemElement.classList.add('orderCartProductListItem');
//
//                 for (const productKey in product) {
//                     const element = document.createElement("div");
//                     element.classList.add('orderCartProductListItemElement');
//
//                     if (productKey !== 'thumbnail') {
//                         element.innerText = `${productKey.toUpperCase()}: ${product[productKey]}`;
//                     } else {
//                         const imgElement = document.createElement("img");
//
//                         imgElement.classList.add('orderCartProductListItemImage');
//                         imgElement.src = product[productKey];
//
//                         element.appendChild(imgElement);
//                     }
//                     orderCartProductListItemElement.appendChild(element);
//                 }
//                 orderCardProductListElement.appendChild(orderCartProductListItemElement)
//             })
//             orderCardElement.append(orderCardProductListElement);
//         }
//
//         orderListElement.appendChild(orderCardElement)
//     })
//     document.body.appendChild(orderListElement)
// }
// fetch('https://dummyjson.com/carts')
//     .then(value => value.json())
//     .then(({carts}) => {
//             myFunction(carts)

// for (let cart of carts) {
//     let div = document.createElement('div');
//     for (let item in cart) {
//         let products = cart[item];
//         if (Array.isArray(products)) {
//             for (let product of products) {
//                 for (let info in product) {
//                     if((typeof product[info]==="string")){
//                         console.log(product[info])
//                         console.log(product[info].match(/http/gi));
//                     }
//                     // console.log(typeof product[info],product[info])
//
//                     // product[info].match(/http/g)
//                 }
//             }
//         }
//         else
//             {
//                 let p = document.createElement('p');
//                 p.innerHTML = `${item} - ${cart[item]}`;
//                 div.appendChild(p)
//             }
//         }
//         mainDiv.appendChild(div)
//
//     }
//     console.log(carts);
// }
//     }
// )
// document.body.appendChild(mainDiv);