// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'month', 'year', 'age'];

for (let i = 0; i < array.length; i += 1) {
    document.write(`<div>${array[i]}</div>`)
}


// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let arrayWithId = [
    {id: 1, name: 'Monday'},
    {id: 2, name: 'Tuesday'},
    {id: 3, name: 'Wednesday'},
    {id: 4, name: 'Thursday'},
    {id: 5, name: 'Friday'},
    {id: 6, name: 'Saturday'},
    {id: 7, name: 'Sunday'},
    {id: 8, name: 'month'},
    {id: 9, name: 'year'},
    {id: 10, name: 'age'}
]
for (let i = 0; i < arrayWithId.length; i += 1) {
    document.write(
        `<div><h2>Name-${arrayWithId[i].name}</h2>
         <p>id-${arrayWithId[i].id}</p>
         </div>`
    )
}

// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let myStringArray = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git_Version_Control",
    "Flexbox_Layout",
    "Grid_System",
    "Responsive_Design",
    "Frontend_Development",
    "Backend_Development",
    "Vue_Js_Framework",
    "React_Js_Library",
    "Tailwind_CSS",
    "Web_Performance",
    "Accessibility_A11y",
    "Testing_Unit",
    "Debugging_Console",
    "Ternary_Operator",
    "Post_Increment",
    "Pre_Increment",
    "Falsy_Values"
];

let m = 0;

while (m < myStringArray.length) {
    document.write(
        `<h1>${myStringArray[m]}</h1>`
    )
    m += 1
}

// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let months = [
    {id: 1, text: 'січень'},
    {id: 2, text: 'лютий'},
    {id: 3, text: 'березень'},
    {id: 4, text: 'квітень'},
    {id: 5, text: 'травень'},
    {id: 6, text: 'червень'},
    {id: 7, text: 'липень'},
    {id: 8, text: 'серпень'},
    {id: 9, text: 'вересень'},
    {id: 10, text: 'жовтень'},
    {id: 11, text: 'листопад'},
    {id: 12, text: 'грудень'},
    {id: 13, text: 'перше'},
    {id: 14, text: 'друге'},
    {id: 15, text: 'третє'},
    {id: 16, text: 'четверте'},
    {id: 17, text: "п'яте"},
    {id: 18, text: 'шосте'},
    {id: 19, text: 'сьоме'},
    {id: 20, text: 'восьме'}
]
let i = 0;
while (i < months.length) {
    document.write(
        `<h1>id-${months[i].id}-${months[i].text}</h1>`
    )
    i += 1;
}
// – Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру за шаблоном
//
// Масив:
//
//
//
//     let listOfItems = [‘html’, ‘css’, ‘javascript’, ‘mysql’, ‘mongodb’, ‘react’, ‘angular’, ‘node.js’];
//
//
//
// ШАБЛОН:
//
//     <ul>
//
//         <li>ITEM OF ARRAY</li>
//
//         <!–
//
//         і тд інші об’єкти масиву
//
//         …
//
//         …
//
//         …
//
//         –>
//
//     </ul>
//
//
//
// замість ‘ITEM OF ARRAY’ підставити елемент з масиву, щоб вийшов цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(
    `<ul>
       <li>ITEM OF ARRAY</li>
     </ul>`)
for (let i = 0; i < listOfItems.length; i++) {


}