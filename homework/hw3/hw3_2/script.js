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

