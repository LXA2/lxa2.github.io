var aHTML;
var a,b,c;
for (var i = 0; i < 16; i++) {
	a=i.toString(16);
	for (var ia = 0; ia < 16; ia++) {
		b=ia.toString(16);
		for (var ib = 0; ib < 16; ib++) {
			c=ib.toString(16);
			for (var ic = 0; ic < 16; ic++) {
				d=ic.toString(16);
				// console.log(a+","+b+","+c+","+d);
				document.write(String.fromCharCode(a+b+c+d));
				// aHTML=aHTML+String.fromCharCode(a+b+c+d);
				// aHTML=aHTML+`<span class="b">${String.fromCharCode(a+b+c+d)}<span>`
			}
			
			// document.getElementById("a").innerText=aHTML;
		}
		console.log(String.fromCharCode(a+b+c+d));
	}
}

// document.write(aHTML);