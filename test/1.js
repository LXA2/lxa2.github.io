var a=0;
var a0;
a0=a;
let aaa=Object();
aaa.a="1";
console.log(aaa.a);
function b(){
	if (a!=a0) {
		alert("aaa");
	}
	a0=a;
}
setInterval('b()',100)