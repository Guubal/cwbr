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
    var cookie = "";
    var campaing_ID = getUrlParameter('campaign_id');

    createCookie("Campaing", cookie + campaing_ID, 1000);

    var actionCode = getUrlParameter('action_code');

    console.log(actionCode);
    console.log(campaing_ID);

    document.getElementById("id_camp").innerHTML = campaing_ID;
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