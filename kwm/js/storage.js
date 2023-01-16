if(typeof(Storage) !== "undefined") {
	console.log("Storage Available");
	localStorage.setItem("s", "y");
	if(localStorage.getItem("s") == "y") {
		console.log(localStorage);
		keyW1 = localStorage.getItem("k1");
		keyW2 = localStorage.getItem("k2");
		keyW3 = localStorage.getItem("k3");
		keyW4 = localStorage.getItem("k4");
		keyW5 = localStorage.getItem("k5");
		keyW6 = localStorage.getItem("k6");
		keyW7 = localStorage.getItem("k7");
		keyW8 = localStorage.getItem("k8");
		keyW9 = localStorage.getItem("k9");
		keyW10 = localStorage.getItem("k10");
		keyW11 = localStorage.getItem("k11");
		keyW12 = localStorage.getItem("k12");
		keyW13 = localStorage.getItem("k13");
		keyW14 = localStorage.getItem("k14");
		keyW15 = localStorage.getItem("k15");
		keyW16 = localStorage.getItem("k16");
		keyW17 = localStorage.getItem("k17");
		keyW18 = localStorage.getItem("k18");
		keyW19 = localStorage.getItem("k19");
		keyW20 = localStorage.getItem("k20");
		document.getElementById("k1").value = keyW1;
		document.getElementById("k2").value = keyW2;
		document.getElementById("k3").value = keyW3;
		document.getElementById("k4").value = keyW4;
		document.getElementById("k5").value = keyW5;
		document.getElementById("k6").value = keyW6;
		document.getElementById("k7").value = keyW7;
		document.getElementById("k8").value = keyW8;
		document.getElementById("k9").value = keyW9;
		document.getElementById("k10").value = keyW10;
		document.getElementById("k11").value = keyW11;
		document.getElementById("k12").value = keyW12;
		document.getElementById("k13").value = keyW13;
		document.getElementById("k14").value = keyW14;
		document.getElementById("k15").value = keyW15;
		document.getElementById("k16").value = keyW16;
		document.getElementById("k17").value = keyW17;
		document.getElementById("k18").value = keyW18;
		document.getElementById("k19").value = keyW19;
		document.getElementById("k20").value = keyW20;

	}
}

function store(a, b) {
	switch(a) {
		case "1":
			localStorage.setItem("k1", b);
			break;
		case "2":
			localStorage.setItem("k2", b);
			break;
		case "3":
			localStorage.setItem("k3", b);
			break;
		case "4":
			localStorage.setItem("k4", b);
			break;
		case "5":
			localStorage.setItem("k5", b);
			break;
		case "6":
			localStorage.setItem("k6", b);
			break;
		case "7":
			localStorage.setItem("k7", b);
			break;
		case "8":
			localStorage.setItem("k8", b);
			break;
		case "9":
			localStorage.setItem("k9", b);
			break;
		case "10":
			localStorage.setItem("k10", b);
			break;
		case "11":
			localStorage.setItem("k11", b);
			break;
		case "12":
			localStorage.setItem("k12", b);
			break;
		case "13":
			localStorage.setItem("k13", b);
			break;
		case "14":
			localStorage.setItem("k14", b);
			break;
		case "15":
			localStorage.setItem("k15", b);
			break;
		case "16":
			localStorage.setItem("k16", b);
			break;
		case "17":
			localStorage.setItem("k17", b);
			break;
		case "18":
			localStorage.setItem("k18", b);
			break;
		case "19":
			localStorage.setItem("k19", b);
			break;
		case "20":
			localStorage.setItem("k20", b);
			break;
	}
}