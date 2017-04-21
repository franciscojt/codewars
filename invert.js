/*Invert a given list of integer values.

Python/JS/PHP:

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers.*/

function invert(array) {
    var leng = array.length;

    for(var i = 0; i<leng; i++) {
        array[i]*=1
        console.log(array[i])
        array[i] = array[i] == 0 ? 0 : array [i] * -1;
        console.log(array[i])
    }
    return array;
}

console.log(invert([1,2,3,4,5]))
console.log(invert([-1,-8,-4,-5,2,8,9]))
console.log(invert([0]))
console.log(invert([]))
console.log(invert([-53, 48, -71, 12, -60, 44, 66]))
console.log(invert(['77', -31, 86, 26, 82, -9, 81, -46, -86, 82, 99, 95, 17, 69, 23, -21, 62, -91, -8, -4, 2, -49]))
console.log(invert([-34, -71, 53, -20, -4, -86, -47, -6, -80, -44, 2, -63, 47, -9, 23, 63, 19, -78, -18, 46, 22, -5, -35, 76, 49, 86, -86, 98, -34, -75, -69, -87, -41, 60, -21, 11, -92, -95, 60, -32, -90, 70, -96, -77, 48, -91, -41, -85, 27, -14, -65, 30, -86, -3, 50, 60, -25, -73, -56, -33, 60, -23, -52, 4, -26, -7, 41, -32, -58, 93, 17, 70, -34, 56, 85, 22, -35, -9, 12, 3, 40, -47, -19, -88, -25, 87, 0, -11, -48, 52]))