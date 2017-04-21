/*
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function towerBuilder(nFloors){
	var space = " ",
		floor = "*",
		building = [];
	for(var i = 1; i <= nFloors; i++){
		building.push(floor);
		floor+="**";
	}
	for(var i = building.length-2; i>=0; i--){
		building[i] = space + building[i] + space;
		space+= " ";
	}
	return building;
}
console.log(towerBuilder(38));