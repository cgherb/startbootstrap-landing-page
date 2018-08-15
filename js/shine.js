function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/*When doc loads, check if url parameter is present from getDrip Campaign*/
$(document).ready(function () {
    var submission = getUrlParameter('submitted');
    if(submission == 1)
    {
        console.log("successful post");
        var regSuccessAlert = document.createElement('div');
        regSuccessAlert.className = 'alert alert-success alert-dismissable collapse';
        regSuccessAlert.innerHTML = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span>We have received your invitation request.  Share on facebook to have your invitation request expedited </span>';
        document.getElementById("headerSection").insertBefore(regSuccessAlert,document.getElementById("main"));
        $(regSuccessAlert).fadeIn();
        window.setTimeout(function () {
            $(regSuccessAlert).fadeOut();
        }, 10000);
    }
    else
    {
        console.log("nada");
    }
});
