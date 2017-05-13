/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    var x = 0, o=0;
    str = str.toLowerCase();
    for(var i = 0; i < str.length; i++){
        switch(str[i]){
            case 'x':
                x++;
                continue;
            case 'o':
                o++;
                continue;
        }        
    }
    return x===o? true : false    
}

console.log(XO('zaz'))