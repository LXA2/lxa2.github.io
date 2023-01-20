//document.getElementById("body").innerHTML=``;
var version=1;
function copy1(){
    var copyText = document.getElementById("res1");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
}
function copy2(){
    var copyText = document.getElementById("res2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
}
function url(a){
    var b,c;
	b=a.charCodeAt(0).toString();
    for (var i = 1; i < (a.length-1); i++) {
		c=a.charCodeAt(i);
		while (c.length<6){
			c="0"+c.toString();
		}
		console.log(i);
    	b=b+c;
    }
	b=BigInt(b);
	console.log(b);
	var v=version.toBase();
	while (v.length<2){
		console.log()
	}
	b=b.toString(36);
	document.getElementById("res1").value=`https://lxa2.github.io/url/index.html?${b}`;
}
function text(a){
    a;
}








const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ben = base.length;

function toBase(num) {
    let arr = [];
    while (num > 0) {
        arr.push(base[num % ben]);
        num = Math.floor(num / ben);
    }
    return arr.reverse().join('');
}
function to10(baseNum) {
    baseNum = baseNum.split('').reverse().join('');
    let val = 0;
    for (let i = 0; i < baseNum.length; i++) {
        let c = baseNum[i];
        val += (base.indexOf(c) * Math.pow(ben, i));
    }
    return val;
}