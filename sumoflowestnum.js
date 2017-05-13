/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

Hint: Do not modify the original array
*/

function minimum(array, skip=false){
    var min = skip === 0? [array[1],1]:[array[0],0]

    for(var i= 0; i < array.length; i++){
        if(i === skip){
            continue;
        }
        array[i]
        if(array[i]<min[0]){
            min[0]=array[i];
            min[1]=i;
        }
    }
    return min
}
function sumTwoSmallestNumbers(numbers) {  
    var smallest = minimum(numbers),
    smaller = minimum(numbers, smallest[1]);
    return smallest[0] + smaller[0]
}
//from other developer as sample
function sumTwoSmallestNumbers2(numbers){
    numbers = numbers.sort(function(a,b){
        return a-b;
    })
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers2([-2,1,96,99, 10,-1]));
console.log(sumTwoSmallestNumbers([10,343445353,3453445,3453545353453]))