function factorial(number){
    if(number === 0){
        return 1;
    }
    var fact = 1;
    for(var i = number; i>=1; i--){
        fact=fact*i;
    }
    return fact;
}
function zero(n) {
    var number = factorial(n), zeroes = 0;
    number = number.toString();
    for(var i = number.length-1; i >= 0; i--){
        if(number[i]!=="0"){
            break
        }
        zeroes++
    }
    return zeroes
}
console.log(zero(1000));