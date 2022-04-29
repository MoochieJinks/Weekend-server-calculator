$(document).ready( onReady );

// onReady function
function onReady(){
    // need one for calculateEquation
    $('#calculateEquationButton').on('click', addEquation);
    getEquation();
}

// global variables
let ourEquation = {
    firstNum: $('#firstNumIn').val(),
    operator: $('#equationTypeIn').val(),
    secondNum: $('#secondNumIn').val(),
}

// functions

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
        // append elements to DOM
        for (const calculation of response){
            numeroEl.append(`<li> ${calculation.firstNum} ${calculation.operator} ${calculation.secondNum} = ${calculation.result}</li>`);
        console.log('GET request successful!');
        }
    }) // end AJAX GET
} // end getEquation

function addEquation(){
    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: {
            firstNum: $('#firstNumIn').val(),
            operator: $('#equationTypeIn').val(),
            secondNum: $('#secondNumIn').val(),
        }
    }).then( function (response){
        getEquation();
    })
}