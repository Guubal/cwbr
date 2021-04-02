$(document).ready(function() {
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

    var cookie = "";
    var campaing_ID = getUrlParameter('campaign_id');
    createCookie("Campaing", cookie + campaing_ID, 30);
    var action_Code = getUrlParameter('action_code');
    createCookie("ActionCode", cookie + action_Code, 30);

    campaignID = getCookie('Campaing');
    actionCode = getCookie('ActionCode');


    document.getElementById("id_camp").innerHTML = campaignID;
    document.getElementById("action_code").innerHTML = actionCode;

    document.getElementById("id_camp_px").innerHTML = campaing_ID;
    document.getElementById("action_code_px").innerHTML = actionCode;
})

function copyPixel() {
    var copyText = document.getElementById("test");
    copyText.select();
    document.execCommand("copy");
}
//       $('.card').addClass('test');