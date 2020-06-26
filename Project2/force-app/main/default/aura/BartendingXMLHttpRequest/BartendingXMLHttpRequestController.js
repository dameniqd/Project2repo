({
    buttonPress : function(component, event, helper) {
        //Generate URL for request to Cocktail APIs
        var url = 'https://the-cocktail-db.p.rapidapi.com/search.php?i=' + component.get('v.strDrink');
        //Make Ajax request
        helper.makeAjaxRequest(component, url);
    }
})