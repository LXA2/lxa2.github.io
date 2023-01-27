console.log("0.js");
var s0=location.search;
var s="",content="";
// var edit="true";
var edit="false";
// for (var i = 2; i < s0.length; i++) {
// 	s+=s0.charAt(i);
// }
// console.log(s);
var verify="",method="";
var version=Number(to10(s0.charAt(4)));
var method1,method2,method3;
var start_time="",end_time="";
if (s0!="") {
	console.log(`version:${version}`);
	switch (version){
		case 1://--------------------1--------------------1--------------------1--------------------1--------------------1
			// var verify="",method="";
			for (var i = 1; i < 4; i++) {
				verify+=s0.charAt(i);
			}
			method=to10(s0.charAt(5));
			if (Number(method)<=10||Number(method)>68){
				console.log(`---ERROR---[method:${method}]`);
				// error("^^^^^^^^^");
				break;
			}
			console.log(`method:${method}`);
			method1=Number(method.toString().charAt(0));
			if (method1==1||method1==2||method1==5){
				show3();
			} else if(method1==3||method1==4||method1==6){
				show2();
			} else{
				error("method1");
			}
			switch (method.toString().charAt(1)) {//是否有time或password
				case "1":
					method2=1;
					method3=1;
					break;
				case "2":
					method2=2;
					method3=1;
					break;
				case "3":
					method2=3;
					method3=1;
					break;
				case "4":
					method2=4;
					method3=1;
					break;
				case "5":
					method2=1;
					method3=2;
					break;
				case "6":
					method2=2;
					method3=2;
					break;
				case "7":
					method2=3;
					method3=2;
					break;
				case "8":
					method2=4;
					method3=2;
					break;
				default:
					break;
			}
			switch (method2){//判断time+截取内容
				case 1:
					for (let index = 6; index <= 13; index++) {
						start_time+=s0[index];
					}
					judgeTime("start",to10(start_time));
					for (var i = 14; i < s0.length; i++) {
						s+=s0.charAt(i);
					}
					break;
				case 2:
					for (let index = 6; index <= 13; index++) {
						end_time+=s0[index];
					}
					judgeTime("ZYNBA!!!!!",to10(end_time));//判断ZY是否牛逼(必须是的)-(∩_∩)--{u_u}-
					for (var i = 14; i < s0.length; i++) {
						s+=s0.charAt(i);
					}
					break;
				case 3:
					for (let index = 6; index <= 13; index++) {
						start_time+=s0[index];
					}
					console.log(start_time);
					judgeTime("start",to10(start_time));
					for (let index = 14; index <= 21; index++) {
						end_time+=s0[index];
					}
					judgeTime("KHLNB!!!!!",to10(end_time));//判断KHL是否牛逼(必须是的) -[o_o]-   :)
					for (var i = 22; i < s0.length; i++) {
						s+=s0.charAt(i);
					}
					break;
				case 4://没有时间限制
					
					break;
				default:
					error("method");
					break;
			}
			console.log(`-----------s:"${s}"`);
			s=to10(s.toString());
			if (method3==1){
				
			} else if (method==2){
				
			} else {
				error("method3");
			}
			var zero=0;
			// if ((s0.toString.length%5)!=0){
			// 	zero=4-s0.toString.length%5;
			// }
			for (var i=0;i<s.length;i=i+5){
				content+=String.fromCharCode(`${s[i]}${s[i+1]}${s[i+2]}${s[i+3]}${s[i+4]}`);
			}
			console.log(content);
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
	show1();
}

setInterval(function(){if(javascript!==edit){window.close();};},500);