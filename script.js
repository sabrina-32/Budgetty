//using  iife  budget controller



 var  budgetController = (function(){

    //Expence
    var  Expence = function(id,  description,  value){
        this.id = id;
        this.description = description;
        this.value = value;

    };




    //Income
    var  Income = function(id,  description,  value){
        this.id = id;
        this.description = description;
        this.value = value;
        
    };
 
    


    var  data = {

        allItems: {
            exp: [],
            inc: []
        },
        totals : {
            exp: 0,
            inc: 0
        }
    }

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
                  type : document.querySelector(DOMstring.inputType).value, //  will  be  either  income or  expence

                  description : document.querySelector(DOMstring.inputDescription).value,
    
                 value : document.querySelector(DOMstring.inputValue).value
    
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



//2. add the item to  the  budget   controller




//  3.  add  the   item  to  the  UI



///  4.  calculate   the  budget




///  5.  display  the  budget  on  the  UI




};

return {
    init:  function(){
        console.log('application  has  started');
        setupEventListeners();

    }
};

 })(budgetController,  UIController);
 
controller.init();
