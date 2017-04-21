/*
You have a sequence of positive numbers starting with 1, but one number is missing!

Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.

In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.

Note that the input may be with random order.

E.g.

findMissingNumber("1 3 2 5") // returns 4, because 4 is missing
findMissingNumber("1 2 3 4") // returns 0, because the sequence isn't broken
findMissingNumber("1 5") // returns 2, because the sequence is missing more than one number and 2 is the lowest between 2, 3 and 4
findMissingNumber("2 1 4 3 a") // returns 1, because it's an invalid sequence. in this case, it's invalid because contain a non numerical character
*/
function findMissingNumber(sequence){
    if(sequence === ""){
        return 0;
    }
    sequence=sequence.split(" ");
    var leng = sequence.length,
        result=[];
    console.log(sequence)
    for(var i = 0; i < leng; i++){
        console.log(sequence[i], i+1)
        var temp = i+1
        console.log(temp == sequence[i], i)
        if( sequence[i] === "a" || sequence[i] < temp || sequence[i] >temp){
            result.push[1];
        
        } 
        if(temp == sequence[i]){
            continue;
        } 
        else {result.push(temp);}
    }
    console.log(result, "= result")
    if(result[0]>1){
        return result[0]
    }
    else {return 1;}
    
}

console.log("Answer", findMissingNumber("1 4 2 6 a 8 7 9"),"==1");
//console.log("Answer", findMissingNumber("1 2 3 4 5"))