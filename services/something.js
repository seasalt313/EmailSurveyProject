var y;
function modifyVariables(x) {
	var z = 5;
	x += 2;
	y += x + z;
}

var x = 1;
var y = 2;
var z = 3;
modifyVariables(x);
document.writeln(x);
document.writeln(y);
document.writeln(z);
