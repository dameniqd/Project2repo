({
    doInit : function(component, event, helper){
        helper.fetchAllDrinksUtil(component);
    },
        buttonPress : function(component, event, helper) {
        //Create new request
         var drink = component.get('v.strDrink');
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                var myobj = JSON.parse(this.responseText);
                console.log(myobj.ingredients[0]["idIngredient"]);
                component.set("{!v.Name}",drink);
                component.set("{!v.strDescription}", myobj.ingredients[0]["strDescription"]);
                //component.set("{!v.simpleNewDrink.idIngredient__c}", myobj.ingredients[0]["idIngredient"]);
                component.set("{!v.strIngredient}", myobj.ingredients[0]["strIngredient"]);
            }});
        xhr.open("GET", ("https://the-cocktail-db.p.rapidapi.com/search.php?i="+drink));
        xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "cd7699328fmsh742b70ffe6b535ep15a011jsndb5c55170c9a");
        
        xhr.send(data);
    },
    handleCreate : function(component, event, helper) {
        component.set( 'v.newRec', true);
        component.set( 'v.showList', false);
    },
    handleShowList : function(component, event, helper){
        component.set( 'v.newRec', false);
        component.set( 'v.showList', true);
        helper.fetchAllDrinksUtil(component);
    }
})