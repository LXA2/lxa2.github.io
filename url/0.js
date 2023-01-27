var s0=location.search;
var s="",content="";
var edit=true;
// var edit=false;
// for (var i = 2; i < s0.length; i++) {
// 	s+=s0.charAt(i);
// }
// console.log(s);
var version=Number(to10(s0.charAt(4)));
var method1,method2,method3;
var start_time="",end_time="";
if (s0!="") {
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
				break;
			}
			console.log(`method:${method}`);
			method1=Number(method.toString().charAt(0));
			switch (method.toString().charAt(1)) {
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
			switch (method2){
				case 1:
					for (let index = 6; index < 13; index++) {
						start_time+=s0[index];
					}
					start_time=to10(start_time);
					if (Number(`${start_time[6]+start_time[7]+start_time[8]+start_time[9]}`)>=new Date().getFullYear) {
						if (Number(`${start_time[6]+start_time[7]+start_time[8]+start_time[9]}`)>=new Date().getFullYear) {
						
						} else {
							error();
						}
					} else {
						error();
					}
					break;
				case 2:
					for (let index = 6; index < 13; index++) {
						end_time+=s0[index];
					}
					end_time=to10(end_time);
					break;
				case 3:
					for (let index = 6; index < 13; index++) {
						start_time+=s0[index];
					}
					start_time=to10(start_time);
					for (let index = 14; index < 21; index++) {
						end_time+=s0[index];
					}
					end_time=to10(end_time);
					break;
				case 4:
					
					break;
				default:
					break;
			}
			s=to10(s.toString());
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
