function basicOp(operation, value1, value2) {
    var sol
    switch(operation){
        case '+': 
            sol = value1 + value2;
            break;
        case '-': 
            sol = value1 - value2;
            break;
        case '*': 
            sol = value1 * value2;
            break;
        case '/': 
            sol = value1 / value2;
            break;
        default : return "Missing Operation"
    }
    switch(sol){
        case NaN: return "Missing Values";
        case Infinity: return "Value 2 is Zero";
        default: return sol;
    }
}
console.log(basicOp('+',1,20))
console.log(basicOp('-',1,0))
console.log(basicOp('*',1,0))
console.log(basicOp('/',1,0))
console.log(basicOp(''))