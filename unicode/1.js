var aHTML;
for (var i = 0; i < 65635; i++) {
	// document.write(i.toString(16)+":\""+String.fromCharCode(i)+"\"");
	document.write("<li class=\"b\">"+"\\hex:"+i.toString(16)+"&nbsp;&nbsp;&nbsp;&nbsp;\""+String.fromCharCode(i)+"\"&nbsp;&nbsp;&nbsp;&nbsp;</li>");
}

// document.write(aHTML);