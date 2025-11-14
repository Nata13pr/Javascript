// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
let mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);
const descriptionRecipesFunction = (recipres) => {
    if (!Array.isArray(recipres)) {
        throw new Error('This is not an array');
    } else {
        let mainOl = document.createElement("ol");
        for (let recipe of recipres) {
            let li = document.createElement("li");
            for (let detail in recipe) {
                if (!Array.isArray(recipe[detail])) {
                    if(detail==='image'){
                        let img = document.createElement("img");
                        img.src = recipe[detail];
                        li.appendChild(img);
                    }
                    let p = document.createElement("p");
                    p.innerHTML = `${detail} - ${recipe[detail]}`;
                    li.appendChild(p)
                }else{
                    for (let item of recipe[detail]) {
                        console.log(recipe[detail])
                    }
                }
            }
            mainOl.appendChild(li);
        }
        mainDiv.appendChild(mainOl);
    }

}

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(responseObject => {
            const {recipes} = responseObject;
            descriptionRecipesFunction(recipes)
        }
    );