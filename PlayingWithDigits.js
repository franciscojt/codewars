function digPow(n, p){
  if(n<0){
    n *= -1;
  }
	 if(p<0){
    p *= -1;
	 }
  var sum=0,
	  pow = 0,
	  digits = (""+n).split("");
  for(var i = 0; i<digits.length; i++){
	if(p>1){
		pow = 1;
    	for( var j = 1; j <= p; j++){
      	pow *= digits[i];
    	}
	}
		else {pow = digits[i]*1;}
    p++;
    sum += pow;
    }
    var k = sum/n;
    if(k%1 ===0){
      return k;
    }
    return -1;   
}

console.log(digPow(89,1));
console.log(digPow(92,-1));
console.log(digPow(46288,3));
