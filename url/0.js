var s0=location.search;
if (s0!="") {
	var s="",content="";
	// var edit=true;
	var edit=false;
	// for (var i = 2; i < s0.length; i++) {
	// 	s+=s0.charAt(i);
	// }
	// console.log(s);
	var version=Number(to10(s0.charAt(4)));
	console.log(`version:${version}`);
	switch (version){
		case 1://--------------------1--------------------1--------------------1--------------------1--------------------1
			// for (var i = 2; i < s0.length; i++) {
			// 	s+=s0.charAt(i);
			// }
			var veryfy="",method="";
			for (var i = 0; i < 2; i++) {
				veryfy+=s0.charAt(i);
			}
			method=to10(s0.charAt(5));
			if (Number(method)<=10||Number(method)>68){
				console.log(`---ERROR---[method:${method}]`);
				if (edit==false) {
					window.location.replace("https://lxa2.github.io/404.html");
				}
			}
			console.log(`method:${method}`);
			s=to10(s.toString());
			for (var i=0;i<s.length;i=i+5){
				content+=String.fromCharCode(`${s[i]}${s[i+1]}${s[i+2]}${s[i+3]}${s[i+4]}`);
			}
			document.getElementById("p").innerHTML=content;
			
			
			break;
		case 2://--------------------2--------------------2--------------------2--------------------2--------------------2
			break;
		case 3://--------------------3--------------------3--------------------3--------------------3--------------------3
			break;
		case 4://--------------------4--------------------4--------------------4--------------------4--------------------4
			break;
		case 5://--------------------5--------------------5--------------------5--------------------5--------------------5
			break;
		case 6://--------------------6--------------------6--------------------6--------------------6--------------------6
			break;
		case 7:
			break;
		default:
			if (edit==false) {
				window.location.replace("https://lxa2.github.io/404.html");
			}
			break;
	}
} else{
	document.getElementById("body").innerHTML="	<div class="main">
		<p id="p"></p>
	</div>
    <div class="main">
        <h2>此处输入URL:</h2>
        <textarea id="textarea" class="textarea" rows="2" oninput="url(this.value);"></textarea>
        <div class="result">
            <h3>结果：</h3>
            <textarea id="res1" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
            <button onclick="copy1();">点击复制</button>
            <h3>二维码：</h3>
            <div id="qr1"></div>
        </div>
    </div>
    <hr style="margin-top: 3em;">
    <div class="main">
        <h2 style="margin-top: 3em;">此处输入文本:</h2>
        <textarea id="textarea2" class="textarea2" rows="5" oninput="text(this.value);"></textarea>
        <div class="result2">
            <h3>结果：</h3>
            <textarea id="res2" rows="1" style="width: 50%;cursor: text;" disabled></textarea>
            <button onclick="copy2();">点击复制</button>
            <h3>二维码：</h3>
            <div id="qr2"></div>
        </div>
    </div>";
}