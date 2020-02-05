
let mathOperation = str => {
    let operator = str.charAt(1)
    switch(operator){
        case '+':
            return parseInt(str.charAt(0)) + parseInt(str.charAt(2));
            break;
        case '-':
            return parseInt(str.charAt(0)) - parseInt(str.charAt(2));
            break;
        case '*':
            return parseInt(str.charAt(0)) * parseInt(str.charAt(2));
            break;
        case '/':
            return parseInt(str.charAt(0)) + parseInt(str.charAt(2));
            break;
        case '%':
            return parseInt(str.charAt(0)) % parseInt(str.charAt(2));
            break;
    }
}


const expression = '4+2';
const expression1 = '5*7';
const expression2 = '6-1';
const expression3 = '9/2';
console.log(`${expression} = ${mathOperation(expression)}`)
console.log(`${expression1} = ${mathOperation(expression1)}`)
console.log(`${expression2} = ${mathOperation(expression2)}`)
console.log(`${expression3} = ${mathOperation(expression3)}`)