//using  iife  budget controller



 var  budgetController = (function(){
// some code
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

    var  DOM = UICtrl.getDOMstring();


document.querySelector(DOM.inputBtn).addEventListener('click', function(){

// 1. get the field input data

var input  = UICtrl.getInput();
console.log(input);



//2. add the item to  the  budget   controller




//  3.  add  the   item  to  the  UI



///  4.  calculate   the  budget




///  5.  display  the  budget  on  the  UI












});

document.addEventListener('keypress', function(event){
if( event.keyCode ===13 || event.which===13){
    console.log('Enter   was  pressed. ');

}

});



 })(budgetController,  UIController);






