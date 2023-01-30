console.log("1.js");
let u=Object();
let t=Object();
u.blank="";u.auto="";u.startTime="";u.endTime="";u.key="";
t.blank="";t.startTime="";t.endTime="";t.key="";
// u.startTime=Object();u.endTime=Object();u.key=Object();
// u.startTime.year="";u.startTime.month="";u.startTime.year=""
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
    console.log("url","color:red");/*
    if (a==""||a==undefined||a==null) {
        a=document.getElementById("textarea").value;
    }
    ch();
    var b,c;//zero=0;
	if (edit==true) {
		console.log(a);
	}
	b=a.charCodeAt(0).toString();
	// if (b.length<5){
	// 	zero+=5-b.length;
	// }
    for (var i = 1; i < (a.length); i++) {
		c=a.charCodeAt(i);
		while (c.toString().length<5){
			c="0"+c.toString();
		}
    	b=b+c;
    }//转为unicode（str）
	if (edit==true) {
		console.log(b);
	}
    if (u.key==true) {
        
    } else {
        
    }
	b=toBase(BigInt(b));

	document.getElementById("res1").value=`https://lxa2.github.io/url/index.html?${b}`;
	document.getElementById("qr1").innerHTML="";
	new QRCode(document.getElementById("qr1"),`https://lxa2.github.io/url/index.html?${b}`);
    */
}
function text(a){
    ch();
    console.log("text","color:red");
}

const base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@$^&*()-=_+[]{}|;:,./?';
const ben = 87n;
// const base="0123456789ABCDEF"
// const ben=16n;

function toBase(bint) {
	var num=bint;
    let arr = [];
    while (num > 0n) {
        arr.push(base[num % ben]);
        num = (num-(num%ben)) / ben;
    }
    return arr.reverse().join('');
}
function to10(str) {
	var baseNum=str;
    baseNum = baseNum.split('').reverse().join('');
    let val = 0n;
    for (let i = 0n; i < BigInt(baseNum.length); i++) {
        let c = baseNum[i];
        val += (BigInt(base.indexOf(c)) * (ben**i));
    }
    return val.toString();
}