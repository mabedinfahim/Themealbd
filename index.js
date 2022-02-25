document.getElementById("search-btn").addEventListener("click", function() {
    const spinner = document.getElementById("spinner-border")
    spinner.style.display = "block"
    const input = document.getElementById("search-input");
    const inputValue = input.value;
    const p = document.getElementById("p");
    const div = document.getElementById("row");
    if (isNaN(inputValue)) {
        div.textContent = "";
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.meals === null) {
                    p.innerText = "No items are found!"
                    const spinner = document.getElementById("spinner-border")
                    spinner.style.display = "none"
                } else {
                    loadMeal(data.meals)
                }
            });
        const loadMeal = (meals) => {
            for (const meal of meals) {
                const spinner = document.getElementById("spinner-border")
                spinner.style.display = "none"
                const creatDiv = document.createElement("div");
                creatDiv.classList.add("col-12");
                creatDiv.classList.add("col-md-6");
                creatDiv.classList.add("col-lg-4");
                const p = meal.strInstructions;
                const pSlice = p.slice(0, 190)
                const title = meal.strMeal;
                const sTitle = title.slice(0, 20)
                creatDiv.innerHTML = ` <div class="card mb-5">
                            <img width="100px" height="200px"class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${sTitle}</h5>
                                <p class="card-text">${pSlice}</p>
                                <button onClick="loadDetails()" type="button" class="btn btn-outline-primary">Learn more</button>
                            </div>
                        </div>
                        `
                div.appendChild(creatDiv);
            }
        }
        input.value = "";
        p.innerText = "";
    } else {
        const spinner = document.getElementById("spinner-border")
        spinner.style.display = "none"
        p.innerText = "Please enter a string!";
        div.innerHTML = '';
        input.value = "";
    }
})


const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
fetch(url)
    .then(res => res.json())
    .then(data => defaultFunction(data.meals));
const defaultFunction = (meals) => {
    for (const meal of meals) {
        const div = document.getElementById("row");
        const creatDiv = document.createElement("div");
        creatDiv.classList.add("col-12");
        creatDiv.classList.add("col-md-6");
        creatDiv.classList.add("col-lg-4");
        const p = meal.strInstructions;
        const pSlice = p.slice(0, 190)
        const title = meal.strMeal;
        const sTitle = title.slice(0, 20)
        creatDiv.innerHTML = ` <div class="card mb-5">
                <img width="100px" height="200px"class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${sTitle}</h5>
                    <p class="card-text">${pSlice}</p>
                    <button type="button" class="btn btn-outline-primary">Learn more</button>
                </div>
            </div>
            `
        div.appendChild(creatDiv);
    }
}

const spinner = document.getElementById("spinner-border")
const loading = () => {
    spinner.style.display = "none"
}