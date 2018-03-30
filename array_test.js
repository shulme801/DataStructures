var test = [[1,2,3],[4,5,8],10];
var test2 = [];

/* console.log("Values of test2 in loop");
for (var i=0; i < test.length; i++) {

	test2[i] = test[i];
	console.log("test2 [",i,"]=",test2[i]);
}

*/

test2 = test; // Shallow Copy
test[1][2] = 6;
test[2] = 20;

console.log("Here is test2 ",test2);
console.log("Here is test ",test);
