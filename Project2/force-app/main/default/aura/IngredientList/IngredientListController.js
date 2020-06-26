({
    buttonPress : function(component, event, helper) {
        var data = null;
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                var myobj = JSON.parse(this.responseText);;
                console.log(myobj.drinks);
                component.set("{!v.ingredients}", myobj.drinks);
            }
        });
        
        xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/list.php?i=list");
        xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "cd7699328fmsh742b70ffe6b535ep15a011jsndb5c55170c9a");
        
        xhr.send(data);
        
        
    }
})