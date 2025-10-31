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
