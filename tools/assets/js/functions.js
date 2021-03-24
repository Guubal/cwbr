function searchCampaign() {
    var idcam = document.getElementById("idCam").value;

    document.getElementById("qdlci").href = "https://my.pampanetwork.com/merchants/index.php#campaign;%7B%22id%22:%22" + idcam + "%22,%20%22type%22:%22I%22%7D";
};

function searchBanner() {
    var idmat = document.getElementById("idMat").value;
    var type = document.getElementById("Type").value;
    var linkpampa = "https://my.pampanetwork.com/merchants/index.php#bannerView;%7B%22id%22:%22"
    var linkimg = "%22,%20%22type%22:%22I%22,%20%22od%22:%22false%22%7D";
    var linknews = "%22,%20%22type%22:%22E%22,%20%22od%22:%22false%22%7D";
    var linklink = "%22,%20%22type%22:%22A%22,%20%22od%22:%22false%22%7D";
    var linkcupom = "%22,%20%22type%22:%22T%22,%20%22od%22:%22false%22%7D";
    var linkFinal;
    var pixelURL;
    var sepador = idmat.split(" ");
    console.log(sepador);
    var test = sepador[0];
    var i;
    var id = "";
    var n = 1;
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

    if (idmat != "" && idmat != " ") {

        for (i = 0; i < sepador.length; i++) {
            id += '<div class="list-group"><a href="' + linkpampa + sepador[i] + linkFinal + '" target="_blank" class="list-group-item list-group-item-action">' + sepador[i] + ': Ctrl + Click' + n++ + '</a>'
            document.getElementById("ttest").innerHTML = id;
        }
    } else {
        $('#AlertaLinkTest').modal(focus)
    }
};

function searchCampaign() {
    var idcam = document.getElementById("idCam").value;

    document.getElementById("qdlci").href = "https://my.pampanetwork.com/merchants/index.php#campaign;%7B%22id%22:%22" + idcam + "%22,%20%22type%22:%22I%22%7D";
};

function makePixel() {
    $(document).ready(function() {
        var totalcost = document.getElementById("TotalCost").value;
        var orderid = document.getElementById("OrderID").value;
        var actioncode = document.getElementById("ActionCode").value;
        var campaignid = document.getElementById("CampaignID").value;
        var currency = document.getElementById("Currency").value;
        if (actioncode == 'lead') {
            pixel_img = '<!-- Pixel Integration ClickWise -->\n<img width="1" height="1" src="https://r.clickwise.net/t/' + campaignid + '/' + actioncode + '/' + orderid + '&amp;currency=' + currency + '" />\n<!-- End Pixel Integration ClickWise -->';
            pixel_gtm = 'https://r.clickwise.net/t/' + campaignid + '/' + actioncode + '/{' + orderid + '}&amp;currency=' + currency;
        } else {
            pixel_img = '<!-- Pixel Integration ClickWise -->\n<img width="1" height="1" src="https://r.clickwise.net/t/' + campaignid + '/' + actioncode + '/' + orderid + '?total-cost=' + totalcost + '&amp;currency=' + currency + '" />\n<!-- End Pixel Integration ClickWise -->';
            pixel_gtm = 'https://r.clickwise.net/t/' + campaignid + '/' + actioncode + '/{' + orderid + '}?total-cost={' + totalcost + '}&amp;currency=' + currency;
        };
        document.getElementById("textarea").innerHTML = pixel_gtm;


        var validador = $('#validador');
        validador.on('click', function() {
            if (validador.is(':checked')) {
                pixel = pixel_gtm;
            } else {
                pixel = pixel_img;
            }
            document.getElementById("textarea").innerHTML = pixel;
        });
    });

};


function copyPixel() {
    var copyText = document.getElementById("textarea");
    copyText.select();
    document.execCommand("copy");
}

function savePixel() {
    var textToWrite = document.getElementById("textarea").value;
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    var fileNameToSaveAs = document.getElementById("nameFile").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
};

function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;

}

function createUrl() {
    var actioncodeurl = document.getElementById("ActionCodeURL").value;
    var totalcosturl = document.getElementById("TotalCostURL").value;
    var orderidurl = document.getElementById("OrderIDURL").value;
    var campaignidurl = document.getElementById("CampaignIDURL").value;
    // var referralidurl = document.getElementById("RefIDURL").value;
    var tid = document.getElementById("tid").value;
    // var dateurl = document.getElementById("DateURL").value;
    var currencyurl = document.getElementById("CurrencyURL").value;
    var url = "";
    // if (dateurl == '') {
    //     var dateurl = new Date();
    //     var dd = dateurl.getDate();
    //     var mm = dateurl.getMonth() + 1;
    //     var yyyy = dateurl.getFullYear();
    //     dd = addZero(dd);
    //     mm = addZero(mm);
    //     dateurl = yyyy + '-' + mm + '-' + dd;
    // }
    switch (actioncodeurl) {
        case 'lead':
        case 'lead1':
        case 'lead2':
        case 'lead3':
            url = 'https://r.clickwise.net/t/' + campaignidurl + '/' + actioncodeurl + '/' + orderidurl + '?tid=' + tid + '&amp;currency=' + currencyurl;

            break;
        default:
            url = 'https://r.clickwise.net/t/' + campaignidurl + '/' + actioncodeurl + '/' + orderidurl + '?total-cost=' + totalcosturl + '&tid=' + tid + '&amp;currency=' + currencyurl;

    }

    var posturl = document.getElementById("textareaurl").innerHTML = url;
};

function copyS2S() {
    var copyText = document.getElementById("textareaurl");
    copyText.select();
    document.execCommand("copy");
}

function saveURL() {
    var textToWrite = document.getElementById("textareaurl").value;
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    var fileNameToSaveAs = document.getElementById("nameFileURL").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
};

// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// };

// function makeGIT() {
//     var campaignname = document.getElementById("CampaignName").value;
//     var currencyadded = document.getElementById("CurrencyAdded").value;
//     var typecommis = document.getElementById("TypeCommis").value;
//     var actioncodeurl = document.getElementById("ActionCodeURL").value;
//     var campaignidurl = document.getElementById("CampaignIDURL").value;
//     var commis = document.getElementById("Commis").value;
//     var added = "";
//     var addedcommis = "";



//     if (typecommis == '%') {
//         added = campaignidurl + ";" + campaignname + ";" + makeid(40) + ";";
//     } else {
//         added = campaignidurl + ";" + campaignname + ";" + makeid(40) + ";";

//     }

//     document.getElementById("textareacampaign").innerHTML = added;


//     if (typecommis == '%') {
//         addedcommis = campaignidurl + ";" + actioncodeurl + ";" + typecommis + ";" + commis + ";" + currencyadded + ";";
//     } else {
//         addedcommis = campaignidurl + ";" + actioncodeurl + ";" + typecommis + ";" + commis + ";" + currencyadded + ";";
//     }

//     document.getElementById("textareacommis").innerHTML = addedcommis;

// };

// function copyCampaign() {
//     var copyText = document.getElementById("textareacampaign");
//     copyText.select();
//     document.execCommand("copy");
// };

// function copyCommis() {
//     var copyText = document.getElementById("textareacommis");
//     copyText.select();
//     document.execCommand("copy");
// };

function createTestLink() {
    var affiliateid = document.getElementById("AffiliateID").value;
    var bannerid = document.getElementById("BannerID").value;
    var extradata = document.getElementById("ExtraData").value;
    var extradata1 = document.getElementById("ExtraData1").value;
    var testurl = "";
    if (bannerid != '') {
        if (extradata == '') {
            testurl = 'http://my.pampanetwork.com/scripts/click.php?a_aid=' + affiliateid + '&a_bid=' + bannerid;
        } else if (extradata1 == '') {
            testurl = 'http://my.pampanetwork.com/scripts/click.php?a_aid=' + affiliateid + '&a_bid=' + bannerid + '&data1=' + extradata;
        } else {
            testurl = 'http://my.pampanetwork.com/scripts/click.php?a_aid=' + affiliateid + '&a_bid=' + bannerid + '&data1=' + extradata + '&data2=' + extradata1;
        }

    } else {
        $('#Alerta').modal(focus)
    }
    document.getElementById("textareateste").innerHTML = testurl


};

function copyTest() {
    var copyText = document.getElementById("textareateste");
    copyText.select();
    document.execCommand("copy");
};


function createConfDB() {
    var cssampaigniddb = document.getElementById("CampaignID-DB").value;
    var campaignnameDB = document.getElementById("CampaignName-DB").value;
    var baseurl = document.getElementById("Base_URL").value;
    var BannerIDDB = document.getElementById("BannerID-DB").value;
    var confdb = "";

    if (cssampaigniddb != '') {

        confdb = 'Campaign ID: ' + cssampaigniddb + '\n\n{\n\t"name": "' + campaignnameDB + '",\n\t"base_url": "' + baseurl + '",\n\t"redirects": [\n\t"http://my.pampanetwork.com/scripts/click.php?a_aid={$refid}&a_bid=' + BannerIDDB + '&data1={$extra_data1}&desturl={$url}"\n\t],\n\t"inactive": false\n}';

    }

    document.getElementById("textareaconfdb").innerHTML = confdb;
};

function copyConfDB() {
    var copyText = document.getElementById("textareaconfdb");
    copyText.select();
    document.execCommand("copy");
}

function saveDBConf() {
    var textToWrite = document.getElementById("textareaconfdb").value;
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    var fileNameToSaveAs = document.getElementById("CampaignName-DB").value + ' DB';

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
};

function createlinkDB() {
    var urllink = document.getElementById("URL_link").value;
    var utm_source = document.getElementById("utm_source").value;
    var utm_campaign = document.getElementById("utm_campaign").value;
    var refid_url = document.getElementById("refid_url").value;
    var sepador = urllink.split(" ");
    console.log(sepador);
    var test = sepador[0];
    var id = "";
    console.log(test);

    for (i = 0; i < sepador.length; i++) {
        id += '<div class="list-group"> <span class"list-group-item list-group-item-action">' + sepador[i] + utm_source + '&utm_campaign=' + utm_campaign + '&' + refid_url + '={$refid}</span></div>'
        document.getElementById("ttest1").innerHTML = id;
    }

};

function createConfRakuten() {
    var campaignIdrakuten = document.getElementById("campaignId-rakuten").value;
    var merchantId = document.getElementById("merchantId").value;
    var merchantName = document.getElementById("merchantName").value;
    var confrakuten = "";

    if (campaignIdrakuten != '') {

        confrakuten = ',\n{\n\t"campaignId":"' + campaignIdrakuten + '",\n\t"merchantId":"' + merchantId + '",\n\t"merchantName":"' + merchantName + '",\n\t"zeroFlag":true,\n\t"fixedActionCodes":{\n\n\t},\n\t"affsBonus":{\n\n\t}\n}';
        added = campaignIdrakuten + ";" + merchantName + ";" + makeid(40) + ";"

    }

    document.getElementById("textareaconfrakuten").innerHTML = confrakuten;
    document.getElementById("textareaconfs2s").innerHTML = added;
};

function copyConfRakutenS2s() {
    var copyText = document.getElementById("textareaconfs2s");
    copyText.select();
    document.execCommand("copy");
}

function copyConfRakuten() {
    var copyText = document.getElementById("textareaconfrakuten");
    copyText.select();
    document.execCommand("copy");
}

function saveConfRakuten() {
    var textToWrite = document.getElementById("textareaconfrakuten").value;
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    var fileNameToSaveAs = document.getElementById("textareaconfrakuten").value + ' DB';

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
};

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})