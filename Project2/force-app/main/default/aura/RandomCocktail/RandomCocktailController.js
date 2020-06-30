({
     getCocktail : function(component, event, helper) {
        var data = null;
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                var myobj = JSON.parse(this.responseText);
                component.set("v.Name", myobj.drinks[0]["strDrink"]);
                component.set("v.Category", myobj.drinks[0]["strCategory"]);
                component.set("v.Alcoholic", myobj.drinks[0]["strAlcoholic"]);
                component.set("v.Glass", myobj.drinks[0]["strGlass"]);
                component.set("v.Instructions", myobj.drinks[0]['strInstructions']);
                component.set("v.Thumbnail", myobj.drinks[0]["strDrinkThumb"]);
                var list = [myobj.drinks[0]["strIngredient1"],myobj.drinks[0]["strIngredient2"],myobj.drinks[0]["strIngredient3"]
                ,myobj.drinks[0]["strIngredient4"],myobj.drinks[0]["strIngredient5"],myobj.drinks[0]["strIngredient6"],myobj.drinks[0]["strIngredient7"]
                ,myobj.drinks[0]["strIngredient8"],myobj.drinks[0]["strIngredient9"],myobj.drinks[0]["strIngredient10"],myobj.drinks[0]["strIngredient11"]
                ,myobj.drinks[0]["strIngredient12"],myobj.drinks[0]["strIngredient13"],myobj.drinks[0]["strIngredient14"],myobj.drinks[0]["strIngredient15"]];
                var list2 = [myobj.drinks[0]["strMeasure1"],myobj.drinks[0]["strMeasure2"],myobj.drinks[0]["strMeasure3"]
                ,myobj.drinks[0]["strMeasure4"],myobj.drinks[0]["strMeasure5"],myobj.drinks[0]["strMeasure6"],myobj.drinks[0]["strMeasure7"]
                ,myobj.drinks[0]["strMeasure8"],myobj.drinks[0]["strMeasure9"],myobj.drinks[0]["strMeasure10"],myobj.drinks[0]["strMeasure11"]
                ,myobj.drinks[0]["strMeasure12"],myobj.drinks[0]["strMeasure13"],myobj.drinks[0]["strMeasure14"],myobj.drinks[0]["strMeasure15"]];
                component.set("v.Ingredients", list);
                component.set("v.Measures", list2);
           
            }
        });
        
        xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/random.php");
        xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "cd7699328fmsh742b70ffe6b535ep15a011jsndb5c55170c9a");
        
        xhr.send(data);
    }
})