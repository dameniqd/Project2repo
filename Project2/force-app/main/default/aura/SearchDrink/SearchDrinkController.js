({
    handleCreate : function(component, event, helper) {
        component.set( 'v.newRec', true);
        component.set( 'v.showList', false);
        var selectedItem = event.currentTarget;
        var recId = selectedItem.dataset.record;
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                var myobj = JSON.parse(this.responseText);
                console.log(myobj.drinks[0]["strAlcoholic"]);
                component.set("{!v.strDrink}", myobj.drinks[0]["strDrink"]);
                component.set("{!v.idDrink}", myobj.drinks[0]["idDrink"]);
                component.set("{!v.strCategory}", myobj.drinks[0]["strCategory"]);
                component.set("{!v.strDrinkThumb}", myobj.drinks[0]["strDrinkThumb"]);
                component.set("{!v.strAlcoholic}", myobj.drinks[0]["strAlcoholic"]);
                component.set("{!v.strGlass}", myobj.drinks[0]["strGlass"]);
                component.set("{!v.strInstructions}", myobj.drinks[0]["strInstructions"]);
                var list = [myobj.drinks[0]["strIngredient1"],myobj.drinks[0]["strIngredient2"],myobj.drinks[0]["strIngredient3"]
                            ,myobj.drinks[0]["strIngredient4"],myobj.drinks[0]["strIngredient5"],myobj.drinks[0]["strIngredient6"],myobj.drinks[0]["strIngredient7"]
                            ,myobj.drinks[0]["strIngredient8"],myobj.drinks[0]["strIngredient9"],myobj.drinks[0]["strIngredient10"],myobj.drinks[0]["strIngredient11"]
                            ,myobj.drinks[0]["strIngredient12"],myobj.drinks[0]["strIngredient13"],myobj.drinks[0]["strIngredient14"],myobj.drinks[0]["strIngredient15"]];
                var list2 = [myobj.drinks[0]["strMeasure1"],myobj.drinks[0]["strMeasure2"],myobj.drinks[0]["strMeasure3"]
                             ,myobj.drinks[0]["strMeasure4"],myobj.drinks[0]["strMeasure5"],myobj.drinks[0]["strMeasure6"],myobj.drinks[0]["strMeasure7"]
                             ,myobj.drinks[0]["strMeasure8"],myobj.drinks[0]["strMeasure9"],myobj.drinks[0]["strMeasure10"],myobj.drinks[0]["strMeasure11"]
                             ,myobj.drinks[0]["strMeasure12"],myobj.drinks[0]["strMeasure13"],myobj.drinks[0]["strMeasure14"],myobj.drinks[0]["strMeasure15"]];
                var txt = "";
                var map = [list,list2];
                map.forEach(myFunction);
                function myFunction(value, index, array) {
                    if((value[0] != (null && "")) &&(value[1] != (null && ""))){
                        //console.log(value[0] + " " + value[1])
                        txt = txt + value[0] +","+ value[1] + ",";
                    }
                }
                component.set("{!v.IngreMeas}", txt);
            }
        });
        xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/lookup.php?i="+recId);
        xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "cd7699328fmsh742b70ffe6b535ep15a011jsndb5c55170c9a");
        xhr.send(data);
    },
    buttonPress : function(component, event, helper) {
        var data = null;
        var url = component.get("v.url");
        var value = component.get("v.value");
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                var myobj = JSON.parse(this.responseText);
                component.set("{!v.listDrink}", myobj.drinks);
            }
        });
        xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/"+url+value);
        xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "cd7699328fmsh742b70ffe6b535ep15a011jsndb5c55170c9a");
        xhr.send(data);
    },
    handleShowList : function(component, event, helper){
        component.set( 'v.newRec', false);
        component.set( 'v.showList', true);
    },
})