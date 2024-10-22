let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("#result");
let currInput = "";
let prevInput = "";
let operator = "";
let result = null;

function updateDisplay(value){
    display.innerText=value;

};

buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const btnValue = btn.innerText; 

        if(btnValue === "AC"){
            currInput = "";
            prevInput = "";
            operator = "";
            result = null;
            updateDisplay(0);
        } else if(btnValue === "+/-"){
            currInput = (parseFloat(currInput) * -1).toString();
            updateDisplay(currInput);
        } else if(btnValue === "%"){
            currInput = (parseFloat(currInput) / 100).toString();
            updateDisplay(currInput);
        } else if(["+","-","x","/"].includes(btnValue)){
            if(currInput && operator){
                result = calculate(result || prevInput, currInput,operator);
                updateDisplay(result);
                prevInput = result.toString();
            } else{
                prevInput = currInput;
            }
           operator = btnValue;
           currInput = ""; 
        } else if(btnValue === "="){
            if(operator && prevInput){
                result = calculate(result || prevInput, currInput,operator);
                updateDisplay(result);
                currInput=result.toString();
                operator = "";
                prevInput = "";
            }
        } else{
            currInput += btnValue;
            updateDisplay(currInput);
        }
    });
});
function calculate(num1,num2,operator){
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch(operator){
        case "+": 
          return a+b;
        case "-": 
          return a-b;
        case "x": 
          return a*b;
        case "/": 
          return a/b;
       default:
         return b;

    }
}