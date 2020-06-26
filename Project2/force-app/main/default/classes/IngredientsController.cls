public class IngredientsController {
    @AuraEnabled
    public static List<Ingredient__c> getDrinks(){
        return [SELECT Id, Name, idIngredient__c, strDescription__c,strType__c FROM Ingredient__c];
    }
}