//CALLCULATOR PROGRAM

// document refers to the html document
const display  = document.getElementById("display");
function appendToDisplay(input){
    display.value += input; //accessing the value attribute
}

function clearDisplay(input){
    display.value="";
}
function calculate(input){
    try{
        display.value = eval(display.value)   //eval is a built in calculator, we pass in the input expression here
    }
    catch(e){
        display.value = "Error";
    }
}
