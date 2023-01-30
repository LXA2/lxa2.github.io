console.log("function.js");
var edit="true";
// var edit="false";
function error(error){
	console.log(`error:[${error}]`);
    if (edit=="false") {
        window.location.replace("https://lxa2.github.io/404.html");
    }else if (edit=="true") {
    	
    } else{
    	window.location.replace("https://lxa2.github.io/404.html");
    }
	// window.location.replace("https://lxa2.github.io/404.html");
}
function judgeTime(start_end,time){
	console.log(start_end+"<>"+time)
	if (start_end=="start") {
		start_time=time.toString();
		if (Number(`${start_time[0]+start_time[1]+start_time[2]+start_time[3]}`)==new Date().getFullYear()) {
			if (Number(`${start_time[4]+start_time[5]}`)==(new Date().getMonth()+1)) {
				if (Number(`${start_time[6]+start_time[7]}`)==new Date().getDate()) {
					if (Number(`${start_time[8]+start_time[9]}`)==new Date().getHours()) {
						if (Number(`${start_time[10]+start_time[11]}`)==new Date().getMinutes()) {
							if (Number(`${start_time[12]+start_time[13]}`)>new Date().getSeconds()) {
								error("start_seconds");
							} else{
								return true;
							}
						} else if (Number(`${start_time[10]+start_time[11]}`)<new Date().getMinutes()) {
							return true;
						} else{
							error("start_minutes");
						}
					} else if (Number(`${start_time[8]+start_time[9]}`)<new Date().getHours()) {
						return true;
					} else{
						error("start_hours");
					}
				} else if (Number(`${start_time[6]+start_time[7]}`)<new Date().getDate()) {
					return true;
				} else{
					error("start_date");
				}
			} else if(Number(`${start_time[4]+start_time[5]}`)<(new Date().getMonth()+1)){
				return true;
			} else{
				error("start_month");
			}
		}else if (Number(`${start_time[0]+start_time[1]+start_time[2]+start_time[3]}`)<new Date().getFullYear()) {
			return true;
		} else{
			error("start_year");
		}
	} else{
		start_time=time.toString();
		if (Number(`${start_time[0]+start_time[1]+start_time[2]+start_time[3]}`)==new Date().getFullYear()) {
			if (Number(`${start_time[4]+start_time[5]}`)==(new Date().getMonth()+1)) {
				if (Number(`${start_time[6]+start_time[7]}`)==new Date().getDate()) {
					if (Number(`${start_time[8]+start_time[9]}`)==new Date().getHours()) {
						if (Number(`${start_time[10]+start_time[11]}`)==new Date().getMinutes()) {
							if (Number(`${start_time[12]+start_time[13]}`)<new Date().getSeconds()) {
								error();
							} else{
								return true;
							}
						} else if (Number(`${start_time[10]+start_time[11]}`)>new Date().getMinutes()) {
							return true;
						} else{
							error();
						}
					} else if (Number(`${start_time[8]+start_time[9]}`)>new Date().getHours()) {
						return true;
					} else{
						error();
					}
				} else if (Number(`${start_time[6]+start_time[7]}`)>new Date().getDate()) {
					return true;
				} else{
					error();
				}
			} else if(Number(`${start_time[4]+start_time[5]}`)>(new Date().getMonth()+1)){
				return true;
			} else{
				error();
			}
		}else if (Number(`${start_time[0]+start_time[1]+start_time[2]+start_time[3]}`)>new Date().getFullYear()) {
			return true;
		} else{
			error();
		}
	}
}
function checkTime(){
    if (edit!=="true") {
    	window.location.replace("https://lxa2.github.io/fuckyoufuckyoufuckyou");
		error();
    }
    return "";
}
 !function () {
    let foo = /./;
    console.log(foo);
    foo.toString = checkTime;
}()
if (location.hostname!="lxa2.github.io") {
	if (edit!=="true") {
		window.location.replace("https://lxa2.github.io/fuckyoufuckyoufuckyou");
	}
}
if (location.href[0]=="f"||location.href[0]=="l"||location.href[0]=="1") {
	if (edit!=="true") {
		window.location.replace("https://lxa2.github.io/fuckyoufuckyoufuckyou");
	}
}
function decrypt(a){
	var key="",key0="";
	while (key.length<(s.length-zero)){
		key+=a;
	}
	for (var i = 0; i < (s.length-zero); i++) {
		key0+=key[i];
	}
	key=key0;
	s=s-to10(key.toString());//--------------------------------------------------------
	if ((s.toString.length%5)!=0){
		zero=5-s.toString.length%5;
	}
	while (zero>0){
		s="0"+s.toString();
		zero--;
	}
	for (var i=0;i<s.length;i=i+5){
		content+=String.fromCharCode(`${s[i]}${s[i+1]}${s[i+2]}${s[i+3]}${s[i+4]}`);
	}
	console.log(content);
	if (method1==1||method1==3) {
		debugger;
		window.location.replace(content);
	} else if(method1==2||method1==4){
		document.getElementById("p").innerHTML=`<a href="${content}" style="text-align:center;">点击跳转</a>`;
	}else {
		if(method1==5||method1==6){
			document.getElementById("p").innerHTML=content;
		}else{
		error("method1");
		}
	}
}
	