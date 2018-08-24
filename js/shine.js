var signUpSubmitButton = document.getElementById("requestInviteButton");
var emailInput = document.getElementById("drip-email");

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
        regSuccessAlert.className = 'alert alert-success alert-dismissable collapse mx-2';
        regSuccessAlert.style.zIndex = 1;
        regSuccessAlert.innerHTML = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span>Thank you for signing up!</span>';
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

$(signUpSubmitButton).hover(function ()
{
    if(  (!(emailInput.value.indexOf('@') > -1)) || (emailInput.value == null) || (emailInput.value == ""))
    {
        $(emailInput).popover({content: "Please enter a valid email", placement: "right"}).popover('show');
    }
});

/*$(emailInput).change(function () {
    if($(emailInput).val().indexOf("@") > -1) {
        $(signUpSubmitButton).removeClass("invisible").hide().fadeIn();
    }
    else
    {
        $(emailInput).popover({content: "Please enter a valid email", placement: "right"}).popover('show');
    }
});*/

