var aHTML;

// for (var i = 0; i < 65635; i++) {
// 	document.write("<li class=\"b\">"+"\\hex:"+i.toString(16)+"&nbsp;&nbsp;&nbsp;&nbsp;\""+String.fromCharCode(i)+"\"&nbsp;&nbsp;&nbsp;&nbsp;</li>");
// }

// document.write(aHTML);
function utos (a) {
	console.log(a);
	var b=a.toString();
	var c="",d="";
	console.log(a.length);
	for (var i = 0; i < a.length; i++) {
		c=c+"\\u"+b.charCodeAt(i);
		d=d+"\\u"+b.charCodeAt(i).toString(16);
	}
	document.getElementById("res1").value=c;
	document.getElementById("res2").value=d;
}