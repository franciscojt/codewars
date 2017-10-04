/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples: 
validParentheses( "()" ) => returns true 
validParentheses( ")(()))" ) => returns false 
validParentheses( "(" ) => returns false 
validParentheses( "(())((()())())" ) => returns true 

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'*/
function validParentheses(parens){
    const leng = parens.length;
    if(leng % 2 != 0){
        return false;
    }
    if(parens[0]===')'|| parens[leng-1]==='(') return false;
    var open = 0,
        close = 0;
    
    for(let i = 0; i < leng; i++) {
        switch(parens[i]){
            case "(":
                open++
                continue;
            case ")":
                close++
                continue;
            default:
                return false
        }
    }
    return open === close? true : false;
}

console.log(validParentheses(")(" ))