$(document).ready( onReady );

// onReady function
function onReady(){
    // need one for calculateEquation
    $('#calculateEquationButton').on('click', calculateEquation);
    getEquation();
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

} // end calculateEquation

function getEquation(){
    // get numbers from server
    // use AJAX
    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then( function( response){
        console.log(response);
        // need to loop thru responses
        // display each on the DOM
        // empty output elements
        const numeroEl = $('#calculationOut');
        numeroEl.empty();
        for (let i=0; i < response.length; i++){
            // append elements to DOM
            numeroEl.append(`<li> ${response.firstNum} ${response.operator} ${response.secondNum} </li>`);
        } // end for loop
    }) // end AJAX GET
} // end getEquation