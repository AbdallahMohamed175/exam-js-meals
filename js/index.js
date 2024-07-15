var menu = document.querySelector('.menuIcon')
var items


menu.addEventListener('click', function () {
    var menuElements = document.querySelector('.menuElements')
    menuElements.classList.replace('d-none', 'd-flex')
})
var recipes = []
var rowData = document.querySelector('.rowData')
async function getmeal() {
    var result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
    var finalResult = await result.json();
    recipes = finalResult.meals;
    console.log(recipes[0].idMeal)
    display()

}
getmeal()

function display() {
    var cartona = ``;

    for (var i = 0; i < 19; i++) {
        cartona += `  <div onclick="getallmealsdetails(${recipes[i].idMeal})" class="col-md-3 position-relative meal overflow-hidden gy-5 d-flex start-0 align-items-center">
                            <img src="${recipes[i].strMealThumb}" class="w-100 rounded-3" alt="">
                            <div class="title ${i} text-black d-flex fw-bold fs-3  ">${recipes[i].strMeal}</div>
                        </div>`
    }

    rowData.innerHTML = cartona;

}
var itemMeal=document.querySelector('.itemMeal')
var details = []
var recipeselements
var recipesMeasures
var tags
var tags1 = ``
var gradiant = ``
var  cartona1 = ``;
var x = 0
var test
async function getallmealsdetails(id) {
   
    console.log(id)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let info = await response.json()
    display1(info.meals)
}
var carry
function display1(details) {

   
    rowData.classList.replace('rowData', 'd-none')

    var mealContainer = document.querySelector('.mealItem')
   itemMeal.classList.add('d-none')

    rowing.classList.add('d-none')
    for (var i = 0; i < details.length; i++) {
        recipeselements = [details[i].strIngredient1, details[i].strIngredient2, details[i].strIngredient3, details[i].strIngredient4, details[i].strIngredient5, details[i].strIngredient6, details[i].strIngredient7, details[i].strIngredient8, details[i].strIngredient9, details[i].strIngredient10, details[i].strIngredient11, details[i].strIngredient12, details[i].strIngredient13, details[i].strIngredient14, details[i].strIngredient15, details[i].strIngredient16, details[i].strIngredient17, details[i].strIngredient18, details[i].strIngredient19, details[i].strIngredient20]
        recipesMeasures = [details[i].strMeasure1, details[i].strMeasure2, details[i].strMeasure3, details[i].strMeasure4, details[i].strMeasure5, details[i].strMeasure6, details[i].strMeasure7, details[i].strMeasure8, details[i].strMeasure9, details[i].strMeasure10, details[i].strMeasure11, details[i].strMeasure12, details[i].strMeasure13, details[i].strMeasure14, details[i].strMeasure15, details[i].strMeasure16, details[i].strMeasure17, details[i].strMeasure18, details[i].strMeasure19, details[i].strMeasure20]

        test = 0
        for (var x = 1; x < 20; x++) {
            if (recipeselements[x].length === 0) {
                var test = x
            }

            console.log(test)
            if (test != 0)
                break
        }

        for (var y = 0; y < test; y++) {
            gradiant += `<li class="alert alert-info m-2 p-1">${recipesMeasures[y]} ${recipeselements[y]} </li>`
        }
        tags = details[i].strTags
        console.log(tags)
        if (tags != null)
            x = tags.split(',')
        console.log(x)

        if (tags != null) {

            for (var z = 0; z <= x.length; z++) {
                if (x[z] != undefined) {
                    tags1 += `  <li class="alert alert-danger m-2 p-1">${x[z]}</li>
`}
            }
        }

        cartona1 += `<div class="mealpic col-4">
                   <img src="${details[i].strMealThumb}" class="w-100 rounded-3" alt="">
                   <span class="fw-bold fs-2">${details[i].strMeal}</span>
               </div>
               <div class="mealInfo col-8">
                   <span class="fw-bold fs-2">instructions</span>
                   <p class="py-2">${details[i].strInstructions}</p>

                   <div class="py-2"><span>Area:</span> ${details[i].strArea} </div>
                   <div class="py-2"><span>Category:</span> ${details[i].strCategory} </div>
                   <span>Recipies: </span>
                   
                      <ul class="list-unstyled d-flex g-3 flex-wrap">
${gradiant}
 </ul>
  <span>Tags:</span>
                     <ul class="list-unstyled d-flex g-3 flex-wrap">
                   ${tags1}
                   </ul>
             <a target="_blank" href="${details[i].strSource}" class="btn btn-success">Source</a>
             <a target="_blank" href="${details[i].strYoutube}" class="btn btn-danger">Youtube</a>                   `
    }
    mealContainer.innerHTML=cartona1

}
var rowing =document.querySelector('.rowing')
var menuElements1 = document.querySelector('.menuElements')
var categoriesContainer = document.querySelector('.categories')
var category = document.querySelector('.category')
category.addEventListener('click', function () {
    
  
    async function categories() {
        var result1 = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        var finalResult1 = await result1.json();
        console.log(finalResult1)
      var  categoryItem = finalResult1.categories
      console.log(categoryItem[0].strCategory)

        displayCategories(categoryItem)

    }
    categories()
    var cartona = ``;
    var o
    function displayCategories(categoryItem1) {
        itemMeal.classList.add('d-none')

        rowData.classList.replace('rowData', 'd-none')
        menuElements1.classList.replace('d-flex', 'd-none')
        rowing.classList.add('d-none')
        // console.log(categoryItem1[0].strCategory)

        for (o = 0; o <13; o++) {
                cartona += `  <div id="click" onclick="getallmealsCategories(${categoryItem1[o].strCategory})" class="col-md-3 position-relative meal overflow-hidden gy-5 d-flex start-0 align-items-center">
                                <img src="${categoryItem1[o].strCategoryThumb}" class="w-100 rounded-3" alt="">
                                <div class="title1  text-black d-flex flex-column fw-bold fs-6   "> <h2>${categoryItem1[o].strCategory}</h2>
                                <p>${categoryItem1[o].strCategoryDescription}</p>

                            </div>
                            </div>`
                            carry=categoryItem1[0].strCategory
        }
        categoriesContainer.innerHTML=cartona
        }
       
    }
)
console.log(carry)
async function getallmealsCategories(carry ){
    console.log(tis)
//     let response1 = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${categoryName}`)
//     let info1 = await response1.json()
// console.log(info1)
}
















