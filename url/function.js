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
    	window.location.replace("https://lxa2.github.io/404");
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
		window.location.replace("https://lxa2.github.io/404");
	}
}
if (location.href[0]=="f"||location.href[0]=="l"||location.href[0]=="1") {
	if (edit!=="true") {
		window.location.replace("https://lxa2.github.io/404");
	}
}
function decrypt(a){
	var key="",key0="";
	while (key.length<(s.length-zero)){//zero为内容（base87）的第一位0的个数
		key+=a;
	}
	for (var i = 0; i < (s.length-zero); i++) {
		key0+=key[i];
	}
	key=key0;//把输入的key制成与内容等长
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
		// debugger;
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
function ch(){
	u.blank=document.getElementById("blankpage").checked;
	u.auto=document.getElementById("auto").checked;

	u.startTime=document.getElementById("starttime").checked;
	u.t1.year=document.getElementById("year").value;
	u.t1.month=document.getElementById("month").value;
	u.t1.date=document.getElementById("date").value;
	u.t1.hour=document.getElementById("hour").value;
	u.t1.minute=document.getElementById("minute").value;
	u.t1.second=document.getElementById("second").value;

	u.endTime=document.getElementById("endtime").checked;
	u.t2.year=document.getElementById("eyear").value;
	u.t2.month=document.getElementById("emonth").value;
	u.t2.date=document.getElementById("edate").value;
	u.t2.hour=document.getElementById("ehour").value;
	u.t2.minute=document.getElementById("eminute").value;
	u.t2.second=document.getElementById("esecond").value;

	u.key=document.getElementById("password").checked;
	t.blank=document.getElementById("blankpage2").checked;

	t.startTime=document.getElementById("starttime2").checked;
	t.t1.year=document.getElementById("year").value;
	t.t1.month=document.getElementById("month").value;
	t.t1.date=document.getElementById("date").value;
	t.t1.hour=document.getElementById("hour").value;
	t.t1.minute=document.getElementById("minute").value;
	t.t1.second=document.getElementById("second").value;

	t.endTime=document.getElementById("endtime2").checked;
	t.t2.year=document.getElementById("eyear2").value;
	t.t2.month=document.getElementById("emonth2").value;
	t.t2.date=document.getElementById("edate2").value;
	t.t2.hour=document.getElementById("ehour2").value;
	t.t2.minute=document.getElementById("eminute2").value;
	t.t2.second=document.getElementById("esecond2").value;

	t.key=document.getElementById("password2").checked;
	while (u.t1.year.length<4) {
		u.t1.year="0"+u.t1.year;
	}
	while (u.t1.month.length<2) {
		u.t1.month="0"+u.t1.month;
	}
	while (u.t1.date.length<2) {
		u.t1.date="0"+u.t1.date;
	}
	while (u.t1.hour.length<2) {
		u.t1.hour="0"+u.t1.hour;
	}
	while (u.t1.minute.length<2) {
		u.t1.minute="0"+u.t1.minute;
	}
	while (u.t1.second.length<2) {
		u.t1.second="0"+u.t1.second;
	}
	while (u.t2.year.length<4) {
		u.t2.year="0"+u.t2.year;
	}
	while (u.t2.month.length<2) {
		u.t2.month="0"+u.t2.month;
	}
	while (u.t2.date.length<2) {
		u.t2.date="0"+u.t2.date;
	}
	while (u.t2.hour.length<2) {
		u.t2.hour="0"+u.t2.hour;
	}
	while (u.t2.minute.length<2) {
		u.t2.minute="0"+u.t2.minute;
	}
	while (u.t2.second.length<2) {
		u.t2.second="0"+u.t2.second;
	}

	while (t.t1.year.length<4) {
		t.t1.year="0"+t.t1.year;
	}
	while (t.t1.month.length<2) {
		t.t1.month="0"+t.t1.month;
	}
	while (t.t1.date.length<2) {
		t.t1.date="0"+t.t1.date;
	}
	while (t.t1.hour.length<2) {
		t.t1.hour="0"+t.t1.hour;
	}
	while (t.t1.minute.length<2) {
		t.t1.minute="0"+t.t1.minute;
	}
	while (t.t1.second.length<2) {
		t.t1.second="0"+t.t1.second;
	}
	while (t.t2.year.length<4) {
		t.t2.year="0"+t.t2.year;
	}
	while (t.t2.month.length<2) {
		t.t2.month="0"+t.t2.month;
	}
	while (t.t2.date.length<2) {
		t.t2.date="0"+t.t2.date;
	}
	while (t.t2.hour.length<2) {
		t.t2.hour="0"+t.t2.hour;
	}
	while (t.t2.minute.length<2) {
		t.t2.minute="0"+t.t2.minute;
	}
	while (t.t2.second.length<2) {
		t.t2.second="0"+t.t2.second;
	}
}
function verify(base87){
	var a=(BigInt(to10(base87.toString()))*2n),b=0n,c="";
	for (let i = 0; i < a.length; i++) {
		b+=BigInt(a[i]);
		
	}
	while (b.length<10) {
		b+=b;
	}
	for (let index = b.length-5; index < b.length; index++) {
		c+=b[index];
	}
	console.log(`b:${b};c:${c}`);
	return c;
}
	