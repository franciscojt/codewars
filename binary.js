/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/
function addBinary(a,b) {
	var sum = a + b,
		base = 2,
		binary = [2,1],
		result="";
	
	while(sum+1 > binary[0]){
		base*=2;
		console.log(base);
		binary.unshift(base);
		
	}
	console.log(binary);
	for(var i = 0; i <binary.length-1; i++){
		if (binary[i]>sum && binary[i+1]<= sum){
			result+='1';
			sum-=binary[i+1];
		} else {result+='0';}
		
	}
	return result;
}

console.log(addBinary(511,0));
