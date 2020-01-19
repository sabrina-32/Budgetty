//using  iife  budget controller



 var  budgetController = (function(){
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;};
    
    
        Expense.prototype.calcPercentage = function(totalIncome) {
            if (totalIncome > 0) {
                this.percentage = Math.round((this.value / totalIncome) * 100);
            } else {
                this.percentage = -1;
            }
        };

        Expense.prototype.getPercentage = function() {
            return this.percentage;
        };
    
    })();



 // ui controller

 var  UIController = (function(){

    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn:  '.add__btn'
    };


    return{
        getInput:  function(){

            return{
                  type : document.querySelector('.add__type').value, //  will  be  either  income or  expence

                  description : document.querySelector('.add__description').value,
    
                 value : document.querySelector('.add__value').value
    
            };
           
        },

        getDOMstring: function(){
            return DOMstring;

        }
    };


 })();





 // global app controller


 var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners  = function(){
        document.addEventListener('keypress', function(event){

            if( event.keyCode ===13 || event.which===13){
            ctrlAddItem();
            
            }
            
            });
              
    };

    var  DOM = UICtrl.getDOMstring();


var ctrlAddItem = function(){

// 1. get the field input data

var input  = UICtrl.getInput();
console.log(input);



//2. add the item to  the  budget   controller




//  3.  add  the   item  to  the  UI



///  4.  calculate   the  budget




///  5.  display  the  budget  on  the  UI




}
document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

document.addEventListener('keypress', function(event){




 })(budgetController,  UIController)
}

