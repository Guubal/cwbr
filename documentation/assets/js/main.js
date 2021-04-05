function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
};
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);

        }
    }
};

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

[
    "campaign_id",
    "action_code",
    "name",
    "currency"
]
.forEach(function(inf) {

    if (getUrlParameter(inf) != null) {
        createCookie("Clickwise - " + inf, getUrlParameter(inf), 30);
    }
});
campaignID = getCookie('Clickwise - campaign_id');
actionCode = getCookie('Clickwise - action_code');
currency = getCookie('Clickwise - currency');


if (campaignID != undefined) {
    $('.inf-pixel').removeClass("d-none");
    $(".id_camp").html(campaignID);
    if (actionCode === undefined) {
        $(".action_code").html("sale");
    } else {
        $(".action_code").html(actionCode);
    }
    if (currency === undefined) {
        $(".currency").html("{currency}");
    } else {
        $(".currency").html(currency);
    }
}

// document.body.contentEditable = true;
// document.designMode = 'on';