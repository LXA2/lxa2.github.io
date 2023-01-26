var s0=location.search;
var s="",content="";
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
			console.log(`---ERROR---[method:${method}]`)
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
		break;
}