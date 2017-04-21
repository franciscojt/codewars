/*Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num){
	var n = (""+num).split(""),
		ans =""
	for(var i = 0; i<n.length; i++){
		n[i]*=n[i]
		ans += n[i].toString()
	}
	return ans*1
}
console.log(squareDigits(456987));