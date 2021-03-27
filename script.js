/*dataset property allows you to quite easily set and get the values of custom data attributes 
that you have on your html elements => https://www.youtube.com/watch?v=Pt8RyyUWCtM */
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector(".calculator__display");


function calculate(firstNumber, operator, secondNumber){
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    
    //do calculator
    let result = ''
    switch(operator){
        case 'plus' : result = firstNumber + secondNumber; break;
        case'times' : result = firstNumber * secondNumber; break;
        case 'divide' : result = firstNumber / secondNumber; break;
        case 'minus' : result = firstNumber - secondNumber; break;
    }
    return result;
}

function mainCalculator(event){

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const type = key.dataset.type;
    const previousKeyType = calculator.dataset.previousKeyType;
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');

    // Is this a number key?
    //if(key.classList.contains('number')){
    //if(key.dataset.type == 'number'){
    if(type == 'number'){
        if(displayValue ==  0 || previousKeyType == "operator"){
            display.textContent = keyValue;   
        } 

        else{
            display.textContent = displayValue + keyValue;
        }
        //calculator.dataset.previousKeyType = "number";
    }


    // Is this an operator key?
    // if(key.classList.contains('operator'))
    //if(key.dataset.type == 'operator'){
    if(type == 'operator'){
        //calculator.dataset.previousKeyType = "operator";
        //key.classList.add("selectedOperator");

        //Operator color
        operatorKeys.forEach(element => { element.dataset.state = "" });
        key.dataset.state = "selectedOperator";

        //set the firset number and the operator in .calculator
        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.classList  ;
    }

    // Is this an equal key?
    if(type == 'equal'){
        //perform a calulator
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;
        
        display.textContent = calculate(firstNumber, operator, secondNumber);
        //remove operator color
        operatorKeys.forEach(element => { element.dataset.state = "" });
    }

    // Is this an clear key?
    if(type == "clear"){
        display.textContent = 0;
    }

    calculator.dataset.previousKeyType = type;
    
}

//Add event
keys.addEventListener('click', mainCalculator)




/**
 * when my app function
 * if the user press number or opration it detect the key.dataset.type from html tjbd chnehya and put it in
    previousKeyType bech el lmara jeya tfkrou alech nzel if he press operator it will be clear the display value
 * after that rakahna el color of operator when we click on it o ytnaha when user press equal
 */