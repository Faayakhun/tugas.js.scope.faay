let catYear = (catAge) => {
	if (catAge == 1) {
		document.getElementById("humanAge").innerHTML = "in Human Age = " + 15 + " Years Old";
	} else if (catAge == 2) {
		document.getElementById("humanAge").innerHTML = "in Human Age = " + 24+ " Years Old";
	} else if (catAge < 24) {
		document.getElementById("humanAge").innerHTML = "in Human Age = " + ((catAge - 3 + 1)*4+24)+ " Years Old";
	} else {
        document.getElementById("humanAge").innerHTML = "The Cat Already in Heaven"
    }
}

