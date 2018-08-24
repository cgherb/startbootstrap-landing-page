var signUpSubmitButton = document.getElementById("requestInviteButton");
var emailInput = document.getElementById("drip-email");
var nameInput = document.getElementById("drip-name");
var euCheckbox = document.getElementById("drip-eu-consent");

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

$(emailInput).change(function () {
    if(  (emailInput.value.indexOf('@') > -1) )
    {
        console.log("email good");
        gtag('event', 'Email Added',{
            eventCategory: 'Form',
            eventLabel: 'Email Valid'
        });
    }
    else
    {
        gtag('event', 'Email Added',{
            eventCategory: 'Form',
            eventLabel: 'Email NOT Valid'
        });
    }
});

$(nameInput).change(function () {
    if(  (nameInput.value != null))
    {
        console.log("name good");
        gtag('event', 'Name Added',{
            eventCategory: 'Form',
            eventLabel: 'Name Valid'
        });
    }
    else
    {
        gtag('event', 'Name Added',{
            eventCategory: 'Form',
            eventLabel: 'Name NOT Valid'
        });
    }
});

$(signUpSubmitButton).click(function () {
    console.log("submitting");
    gtag('event', 'sign_up',{
        method: 'website'
    });
});

$(euCheckbox).change(function () {
    console.log("consent!")
    if( $(euCheckbox).val() == "granted")
    {
        gtag('event', 'EU-Checkbox',{
            eventCategory: 'Form',
            eventLabel: 'Granted'
        });
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

