function searchBanner() {
	var idmat = document.getElementById("idMat").value;
	var type = document.getElementById("Type").value;
	var linkpampa = "https://my.pampanetwork.com/merchants/index.php#bannerView;%7B%22id%22:%22"
	var linkimg = "%22,%20%22type%22:%22I%22,%20%22od%22:%22false%22%7D";
	var linknews ="%22,%20%22type%22:%22E%22,%20%22od%22:%22false%22%7D";
	var linklink ="%22,%20%22type%22:%22A%22,%20%22od%22:%22false%22%7D";
	var linkcupom ="%22,%20%22type%22:%22T%22,%20%22od%22:%22false%22%7D";
	var linkFinal;
	var pixelURL;
	var sepador = idmat.split(" ");
	console.log(sepador);
	var test = sepador[0];
	var i;
	var id = "";
	console.log(test);
	
	switch (type) {
		case "1":
			linkFinal = linkimg;
			break;
		case "2":
			linkFinal = linknews;
			break;
		case "3":
			linkFinal = linklink;
			break;
		case "4":
			linkFinal = linkcupom;
			break;
	}
	
	
	for (i = 0; i <  sepador.length;  i++) {
		id += '<div class="list-group"><a href="'+ linkpampa + sepador[i] + linkFinal +'" target="_blank" class="list-group-item list-group-item-action">' + sepador[i] +'</a>'
		document.getElementById("ttest").innerHTML = id;	
	}
	
};