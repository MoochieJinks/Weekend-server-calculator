$(document).ready( onReady );

// onReady function
function onReady(){
    // need one for calculateEquation
    $('#calculateEquationButton').on('click', calculateEquation)
}

// global variables

// functions
function calculateEquation(){
    console.log ('in calculateEquation'); // received in console
    let ourEquation = {
        firstNum: $('#firstNumIn').val(),
        operator: $('#equationTypeIn').val(),
        secondNum: $('#secondNumIn').val(),
    }
    
}