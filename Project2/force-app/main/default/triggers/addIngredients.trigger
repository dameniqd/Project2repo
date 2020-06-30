trigger addIngredients on Drink__c (after insert, after update) {
    List<Ingredients_list__c> ingreList = new List<Ingredients_list__c>();
    
    Map<Id, Drink__c> drinksWithIngre = new Map<Id, Drink__c>(
        [SELECT Id, (SELECT Id FROM Ingredients__r) FROM Drink__c WHERE Id IN :Trigger.New]);
    for(Drink__c d : Trigger.new){
       System.debug('drinksWithIngre.get(d.Id).Ingredients__r.size() =' +drinksWithIngre.get(d.Id).Ingredients__r.size());
        if(drinksWithIngre.get(d.Id).Ingredients__r.size() == 0){
            ingreList.add(new Ingredients_list__c(Name = 'Vodka',
                                                 Drink__c = d.Id));
        }
 }
    if(ingreList.size() > 0){
        upsert ingreList;
    }
}