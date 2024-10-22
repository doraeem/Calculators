let display = document.querySelector("#result");

function appendToDisplay(value){
    if(display.innerText === ""){
        display.innerText = value;
    } else{
        display.innerText += value;
    }
};

function clearDisplay(){
    display.innerText = "";
};

function calculateResult(){
    try{
        const expression = display.innerText.replace('x','*');
        display.innerText = eval(expression);
    } catch(err){
        display.innerText = "Eror";
    }
};