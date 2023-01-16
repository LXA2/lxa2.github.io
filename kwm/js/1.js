var textRange = "";
var len = 10;
var time = new Date();
var ms = time.getTime();
var previousTime;
var keyW1, keyW2, keyW3, keyW4, keyW5, keyW6, keyW7, keyW8, keyW9, keyW10, keyW11, keyW12, keyW13, keyW14, keyW15, keyW16, keyW17, keyW18, keyW19, keyW20;
var ha = "fuck";
var x = 0;
var b = 0;
var i1 = 0,
	i2 = 0,
	i3 = 0,
	i4 = 0,
	i5 = 0,
	i6 = 0,
	i7 = 0,
	i8 = 0,
	i9 = 0,
	i10 = 0,
	i11 = 0,
	i12 = 0,
	i13 = 0,
	i14 = 0,
	i15 = 0,
	i16 = 0,
	i17 = 0,
	i18 = 0,
	i19 = 0,
	i20 = 0;
var i1f = 0,
	i2f = 0,
	i3f = 0,
	i4f = 0,
	i5f = 0,
	i6f = 0,
	i7f = 0,
	i8f = 0,
	i9f = 0,
	i10f = 0,
	i11f = 0,
	i12f = 0,
	i13f = 0,
	i14f = 0,
	i15f = 0,
	i16f = 0,
	i17f = 0,
	i18f = 0,
	i19f = 0,
	i20f = 0;
function inp(a) {
	var q = document.getElementById("body");
	var w = document.getElementById("c2");
	q.style.backgroundColor = "black";
	w.style.backgroundColor = "white";
	w.style.color = "black";
	for(var i = len, textRange = ""; i >= 0; i--) {
		textRange = textRange + a.charAt(a.length - i);
	}
	previousTime = new Date().getTime();
	var str = textRange; //+"";
	var n = str.lastIndexOf(keyW1);
	if(keyW1 != "" && n != -1) {
		if(i1 == 0) {
			x = x + 20;
			console.log("keyW1" + "[" + keyW1 + "]");
		}
		i1++;
	}
	var n = str.lastIndexOf(keyW2);
	if(keyW2 != "" && n != -1) {
		if(i2 == 0) {
			x = x + 20;
			console.log("keyW2" + "[" + keyW2 + "]");
		}
		i2++;
	}
	var n = str.lastIndexOf(keyW3);
	if(keyW3 != "" && n != -1) {
		if(i3 == 0) {
			x = x + 10;
			console.log("keyW3" + "[" + keyW3 + "]");
		}
		i3++;
	}
	var n = str.lastIndexOf(keyW4);
	if(keyW4 != "" && n != -1) {
		if(i4 == 0) {
			x = x + 10;
			console.log("keyW4" + "[" + keyW4 + "]");
		}
		i4++;
	}
	var n = str.lastIndexOf(keyW5);
	if(keyW5 != "" && n != -1) {
		if(i5 == 0) {
			x = x + 10;
			console.log("keyW5" + "[" + keyW5 + "]");
		}
		i5++;
	}
	var n = str.lastIndexOf(keyW6);
	if(keyW6 != "" && n != -1) {
		if(i6 == 0) {
			x = x + 10;
			console.log("keyW6" + "[" + keyW6 + "]");
		}
		i6++;
	}
	var n = str.lastIndexOf(keyW7);
	if(keyW7 != "" && n != -1) {
		if(i7 == 0) {
			x = x + 10;
			console.log("keyW7" + "[" + keyW7 + "]");
		}
		i7++;
	}
	var n = str.lastIndexOf(keyW8);
	if(keyW8 != "" && n != -1) {
		if(i8 == 0) {
			x = x + 10;
			console.log("keyW8" + "[" + keyW8 + "]");
		}
		i8++;
	}
	var n = str.lastIndexOf(keyW9);
	if(keyW9 != "" && n != -1) {
		if(i9 == 0) {
			x = x + 10;
			console.log("keyW9" + "[" + keyW9 + "]");
		}
		i9++;
	}
	var n = str.lastIndexOf(keyW10);
	if(keyW10 != "" && n != -1) {
		if(i10 == 0) {
			x = x + 10;
			console.log("keyW10" + "[" + keyW10 + "]");
		}
		i10++;
	}

	var n = str.lastIndexOf(keyW11);
	if(keyW11 != "" && n != -1) {
		if(i11 == 0) {
			x = x + 4;
			console.log("keyW11" + "[" + keyW11 + "]");
		}
		i11++;
	}
	var n = str.lastIndexOf(keyW12);
	if(keyW12 != "" && n != -1) {
		if(i12 == 0) {
			x = x + 4;
			console.log("keyW12" + "[" + keyW12 + "]");
		}
		i12++;
	}
	var n = str.lastIndexOf(keyW13);
	if(keyW13 != "" && n != -1) {
		if(i13 == 0) {
			x = x + 4;
			console.log("keyW13" + "[" + keyW13 + "]");
		}
		i13++;
	}
	var n = str.lastIndexOf(keyW14);
	if(keyW14 != "" && n != -1) {
		if(i14 == 0) {
			x = x + 4;
			console.log("keyW14" + "[" + keyW14 + "]");
		}
		i14++;
	}
	var n = str.lastIndexOf(keyW15);
	if(keyW15 != "" && n != -1) {
		if(i15 == 0) {
			x = x + 4;
			console.log("keyW15" + "[" + keyW15 + "]");
		}
		i15++;
	}
	var n = str.lastIndexOf(keyW16);
	if(keyW16 != "" && n != -1) {
		if(i16 == 0) {
			x = x + 4;
			console.log("keyW16" + "[" + keyW16 + "]");
		}
		i16++;
	}
	var n = str.lastIndexOf(keyW17);
	if(keyW17 != "" && n != -1) {
		if(i17 == 0) {
			x = x + 4;
			console.log("keyW17" + "[" + keyW17 + "]");
		}
		i17++;
	}
	var n = str.lastIndexOf(keyW18);
	if(keyW18 != "" && n != -1) {
		if(i18 == 0) {
			x = x + 4;
			console.log("keyW18" + "[" + keyW18 + "]");
		}
		i18++;
	}
	var n = str.lastIndexOf(keyW19);
	if(keyW19 != "" && n != -1) {
		if(i19 == 0) {
			x = x + 4;
			console.log("keyW19" + "[" + keyW19 + "]");
		}
		i19++;
	}
	var n = str.lastIndexOf(keyW20);
	if(keyW20 != "" && n != -1) {
		if(i20 == 0) {
			x = x + 4;
			console.log("keyW20" + "[" + keyW20 + "]");
		}
		i20++;
	}
	if (i1==i1f&&i2==i2f&&i3==i3f&&i4==i4f&&i5==i5f&&i6==i6f&&i7==i7f&&i8==i8f&&i9==i9f&&i10==i10f&&i11==i11f&&i12==i12f&&i13==i13f&&i14==i14f&&i15==i15f&&i16==i16f&&i17==i17f&&i18==i18f&&i19==i19f&&i20==i20f) {
		x=0;
	}
	if(x >= 20) {
		alA();
		x = 0;
	}
	if(i1f == i1) {
		i1 = 0;
	}
	if(i2f == i2) {
		i2 = 0;
	}
	if(i3f == i3) {
		i3 = 0;
	}
	if(i4f == i4) {
		i4 = 0;
	}
	if(i5f == i5) {
		i5 = 0;
	}
	if(i6f == i6) {
		i6 = 0;
	}
	if(i7f == i7) {
		i7 = 0;
	}
	if(i8f == i8) {
		i8 = 0;
	}
	if(i9f == i9) {
		i9 = 0;
	}
	if(i10f == i10) {
		i10 = 0;
	}
	if(i11f == i11) {
		i11 = 0;
	}
	if(i12f == i12) {
		i12 = 0;
	}
	if(i13f == i13) {
		i13 = 0;
	}
	if(i14f == i14) {
		i14 = 0;
	}
	if(i15f == i15) {
		i15 = 0;
	}
	if(i16f == i16) {
		i16 = 0;
	}
	if(i17f == i17) {
		i17 = 0;
	}
	if(i18f == i18) {
		i18 = 0;
	}
	if(i19f == i19) {
		i19 = 0;
	}
	if(i20f == i20) {
		i20 = 0;
	}
	i1f = i1;
	i2f = i2;
	i3f = i3;
	i4f = i4;
	i5f = i5;
	i6f = i6;
	i7f = i7;
	i8f = i8;
	i9f = i9;
	i10f = i10;
	i11f = i11;
	i12f = i12;
	i13f = i13;
	i14f = i14;
	i15f = i15;
	i16f = i16;
	i17f = i17;
	i18f = i18;
	i19f = i19;
	i20f = i20;
}
function alA() {
	var q = document.getElementById("body");
	var w = document.getElementById("c2");
	q.style.backgroundColor = "white";
	setTimeout(function() {
		q.style.backgroundColor = "black";
		w.style.backgroundColor = "black";
	}, 200);
	setTimeout(function() {
		q.style.backgroundColor = "red";
		w.style.backgroundColor = "red";
	}, 400);
	setTimeout(function() {
		q.style.backgroundColor = "lawngreen";
		w.style.backgroundColor = "lawngreen";
	}, 600);
	setTimeout(function() {
		q.style.backgroundColor = "blue";
		w.style.backgroundColor = "blue";
	}, 800);
	setTimeout(function() {
		q.style.backgroundColor = "black";
		w.style.backgroundColor = "white";
	}, 1000);
}
setInterval(function() {
	if(new Date().getTime() - previousTime > 30000) {
		alB();
	}
}, 1000);

function alB() {
	var q = document.getElementById("body");
	var w = document.getElementById("c2");
	if(b == 0) {
		b = 1
		q.style.backgroundColor = "black";
		w.style.backgroundColor = "black";
		w.style.color = "white";
	} else {
		b = 0
		q.style.backgroundColor = "white";
		w.style.backgroundColor = "white";
		w.style.color = "black";
	}
}