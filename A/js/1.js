var textRange="";
var len=10;
var time=new Date();
var ms=time.getTime();
var previousTime;
var keyW1,keyW2,keyW3,keyW4,keyW5,keyW6,keyW7,keyW8,keyW9="回答一下问题",keyW10="回答问题",keyW11="回答",keyW12="问题",keyW13,keyW14,keyW15,keyW16,keyW17,keyW18,keyW19,keyW20;
var ha="fuck";
var x=0;
var b=0;
function inp (a){
	var q=document.getElementById("body");
	var w=document.getElementById("c2");
	q.style.backgroundColor="black";
	w.style.backgroundColor="white";
	w.style.color="black";
	for (var i=len,textRange="";i>=0;i--) {
		textRange=textRange+a.charAt(a.length-i);
	}
	previousTime=new Date().getTime();
	console.log(textRange);
	console.log(typeof(textRange));
	var str=""+textRange;
	var n=str.lastIndexOf(keyW1);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW2);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW13);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW4);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW5);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW6);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW7);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW8);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW19);
	if (n!=-1){
		x=x+10;
	}
	var n=str.lastIndexOf(keyW10);
	if (n!=-1){
		x=x+10;
	}
	
	var n=str.lastIndexOf(keyW11);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW12);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW13);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW14);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW15);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW16);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW17);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW18);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW19);
	if (n!=-1){
		x=x+5;
	}
	var n=str.lastIndexOf(keyW20);
	if (n!=-1){
		x=x+5;
	}
	if (x>=20){
		alA();
		x=0;
	}
	
}

function alA (){
	var q=document.getElementById("body");
	var w=document.getElementById("c2");
	q.style.backgroundColor="white";
	setTimeout(function(){
		q.style.backgroundColor="black";
		w.style.backgroundColor="black";
	},200);
	setTimeout(function(){
		q.style.backgroundColor="red";
		w.style.backgroundColor="red";
	},400);
	setTimeout(function(){
		q.style.backgroundColor="lawngreen";
		w.style.backgroundColor="lawngreen";
	},600);
	setTimeout(function(){
		q.style.backgroundColor="blue";
		w.style.backgroundColor="blue";
	},800);
	setTimeout(function(){
		q.style.backgroundColor="black";
		w.style.backgroundColor="white";
	},1000);
}
setInterval(function(){
	if (new Date().getTime()-previousTime>30000) {
		alB();
	}
},1000);
function alB (){
	var q=document.getElementById("body");
	var w=document.getElementById("c2");
	if (b==0) {
		b=1
		q.style.backgroundColor="black";
		w.style.backgroundColor="black";
		w.style.color="white";
	} else{
		b=0
		q.style.backgroundColor="white";
		w.style.backgroundColor="white";
		w.style.color="black";
	}
}
