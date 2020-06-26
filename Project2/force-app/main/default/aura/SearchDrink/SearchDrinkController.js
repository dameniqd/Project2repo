({
    
    buttonPress : function(component, event, helper) {
        var data = null;
        var url = component.get("v.url");
        var value = component.get("v.value");
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                var myobj = JSON.parse(this.responseText);
                console.log(myobj.drinks);
                component.set("{!v.listDrink}", myobj.drinks);
            }
        });
        
        xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/"+url+value);
        xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "cd7699328fmsh742b70ffe6b535ep15a011jsndb5c55170c9a");
        
        xhr.send(data);
    }
})