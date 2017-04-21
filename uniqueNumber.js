/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains 3 or more numbers.

*/
function findUniq(arr) {
	var temp = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(temp !== arr[i]){
			return arr[i];
		}
	}
	return false;
}
console.log(findUniq([ 0, 1, 0 ]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0 ]));