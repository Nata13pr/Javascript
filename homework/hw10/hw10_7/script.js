// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void

addToLocalStorage = (arrayName, objToAdd) => {
    let array = JSON.parse(localStorage.getItem(arrayName));
    if (array) {
        array.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(array));
    } else {
        throw new Error(`There is no array with name ${arrayName}`);
    }
}

addToLocalStorage('buklja', {})
addToLocalStorage('sessionsList', {})

