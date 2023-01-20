
var mode="de";
chMode("en");
function amode(a){
	if (mode=="de"&&a==1) {
		chMode("en");
	}
	if (mode=="en"&&a==2){
		chMode("de");
	}
}
function chMode(a){
	if (a=="en") {
		mode="en";
		console.log("en")
		document.getElementById("pcli1").style.backgroundColor="#ff0000";
		document.getElementById("pcli2").style.backgroundColor="#ff000000";
		document.getElementById("encrypt").style.display="block";
		document.getElementById("decrypt").style.display="none";
	}
	if (a=="de") {
		mode="de";
		console.log("de")
		document.getElementById("pcli1").style.backgroundColor="#ff000000";
		document.getElementById("pcli2").style.backgroundColor="#ff0000";
		document.getElementById("encrypt").style.display="none";
		document.getElementById("decrypt").style.display="block";
	}
}
function pcCopy1() {
  var copyText = document.getElementById("pcPubKeyCopy");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
}
// function toUnicode(theString) {
//   var unicodeString = '';
//   for (var i = 0; i < theString.length; i++) {
//     var theUnicode = theString.charCodeAt(i).toString(16);
//     while (theUnicode.length < 4) {
//       theUnicode = '0' + theUnicode;
//     }
//     unicodeString += theUnicode;
//   }
//   return unicodeString;
// }
function randomNum(min,max){ 
	return Math.floor(Math.random() * (max - min + 1)) + min;
} 
var p,q,n,n2,e,d;
function generatePrivateKey(a){
	switch (a) {
		case 1://*******************************************************************************
			var i=randomNum(100,500);
			while ((i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(100,500);
			}
			p=i;
			var i=randomNum(100,500);
			while (i==p||(i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(100,500);
			}
			q=i;
			n=p*q;
			n2=(p-1)*(q-1);
			var i=randomNum(300,500);
			while ((n2/i)%1===0||(i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(300,500);
			}
			e=i;
			i=1;
			while ((e*i)%n2!=1){
				i++;
			}
			d=i;
			
			console.log(`p:"${p}",q:"${q}",n:${n},φn:${n2},e:${e},d:${d};`);
			break;
		case 2://*******************************************************************************
			var i=randomNum(1000,10000);
			while ((i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(1000,10000);
			}
			p=i;
			var i=randomNum(1000,10000);
			while (i==p||(i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(1000,10000);
			}
			q=i;
			n=p*q;
			n2=(p-1)*(q-1);
			var i=randomNum(300000,5000000);
			while ((n2/i)%1===0||(i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(300000,5000000);
			}
			e=i;
			i=1;
			while ((e*i)%n2!=1){
				i++;
			}
			d=i;
			var xxxx=prompt("aaa");
			var bia=BigInt(xxxx),bib=BigInt(e),bic=BigInt(n);bid=BigInt(d);
			console.log((((bia**bib)%bic)**bid)%bic);
			console.log((bia**bib)%bic);
			
			console.log(`p:"${p}",q:"${q}",n:${n},φn:${n2},e:${e},d:${d};`);
			break;
		case 3://*******************************************************************************
			var i=randomNum(1000,5000);
			while ((i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(1000,5000);
			}
			p=i;
			var i=randomNum(1000,5000);
			while (i==p||(i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(1000,5000);
			}
			q=i;
			n=p*q;
			n2=(p-1)*(q-1);
			var i=randomNum(3000,5000);
			while ((n2/i)%1===0||(i/2)%1===0||(i/3)%1===0||(i/5)%1===0||(i/7)%1===0||(i/11)%1===0||(i/13)%1===0||(i/17)%1===0||(i/19)%1===0||(i/23)%1===0||(i/29)%1===0||(i/31)%1===0||(i/37)%1===0||(i/41)%1===0||(i/43)%1===0||(i/47)%1===0||(i/53)%1===0||(i/59)%1===0||(i/61)%1===0||(i/67)%1===0||(i/71)%1===0||(i/73)%1===0||(i/79)%1===0||(i/83)%1===0||(i/89)%1===0||(i/87)%1===0){
				i=randomNum(3000,5000);
			}
			e=i;
			i=1;
			while ((e*i)%n2!=1){
				i++;
			}
			d=i;
			
			console.log(`p:"${p}",q:"${q}",n:${n},φn:${n2},e:${e},d:${d};`);
			break;
		default://*******************************************************************************
			break;
	}

	return d;
}
// var xxxx=prompt("aaa");
// var bia=BigInt(xxxx),bib=BigInt(e),bic=BigInt(n);bid=BigInt(d);
// console.log((((bia**bib)%bic)**bid)%bic);
// console.log((bia**bib)%bic);
new QRCode (document.getElementById("decrypt"),"https://www.baidu.com")



































































// var a2=0;
// function generatePrivateKey_nonono(){
// 	var ua=navigator.userAgent;
// 	var a1=toUnicode(ua);
// 	// if (a1.length>=188){
// 	// 	a1=a1.substring(60,188);
// 	// }
// 	// else{
// 	// 	while (a1.length<188) {
// 	// 		a1=a1+a1;
// 	// 	}
// 	// 	a1=a1.substring(60,188);
// 	// }
// 	a2=0;
// 	while (a2==0){
// 		a2=Math.floor((new Date().getTime()*new Date().getSeconds()+Math.sqrt(new Date().getSeconds()*new Date().getMinutes()))*100);
// 	}
// 	console.log(a2.length);
// 	for (var i = 0; i < a2.length; i++) {
// 		console.log(a2[i]);
// 	}
	// 
	// 
	// 
	// 
	// 
	// 
	// 
	// 
// 	console.log(a1);
// 	document.getElementById("pcPubKeyCopy").value=a1;
// }

