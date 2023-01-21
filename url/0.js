var s0=location.search;
var s,content="";
s=s0.charAt(1);
for (var i = 2; i < s0.length; i++) {
	s+=s0.charAt(i);
}
console.log(s);
switch (version){
	case 1:
		s=to10(s.toString());
		for (var i=0;i<s.length;i=i+5){
			content+=String.fromCharCode(`${s[i]}${s[i+1]}${s[i+2]}${s[i+3]}${s[i+4]}`);
		}
		document.getElementById("p").innerHTML=content;
		break;
	case 2:
		break;
	case 3:
		break;
	case 4:
		break;
	case 5:
		break;
	case 6:
		break;
	case 7:
		break;
	default:
		break;
}