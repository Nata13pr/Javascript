// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
let mainDiv = document.createElement("div");
let h1 = document.createElement("h1");
h1.innerHTML = "Recipes";

mainDiv.appendChild(h1);

const descriptionRecipesFunction = (recipes) => {

    if (!Array.isArray(recipes)) {
        throw new Error('This is not an array');
    } else {
        let mainOl = document.createElement("ol");

        for (let recipe of recipes) {
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            h2.innerHTML = 'Recipe';

            li.appendChild(h2);

            for (let detail in recipe) {

                if (!Array.isArray(recipe[detail])) {

                    if (detail === 'image') {
                        let img = document.createElement("img");
                        img.src = recipe[detail];

                        li.appendChild(img);
                    } else {
                        let p = document.createElement("p");
                        p.innerHTML = `${detail} - ${recipe[detail]}`;

                        li.appendChild(p)
                    }

                } else {
                    let h3 = document.createElement("h3");
                    h3.innerHTML = detail.toUpperCase();
                    let ul = document.createElement("ul");

                    li.append(h3, ul);

                    for (let item of recipe[detail]) {
                        let liList = document.createElement("li");
                        liList.innerText = item;

                        ul.appendChild(liList);
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
document.body.append(mainDiv);