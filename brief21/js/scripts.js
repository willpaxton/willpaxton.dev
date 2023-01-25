// This code is used to validate an email in the footer email box
var emailTrue = false;

function showConfirmationEmail() {
    emailTrue = validateEmail(document.getElementById('footer-email').value);
    console.log("The current value of emailTrue is " + emailTrue);
    switch (emailTrue) {
        case true:
            console.log('this is true');
            footerEmailSuccess.style.display = "block";
            footerEmailFailure.style.display = "none";
            document.getElementById('footer-email').value = "";
            break;
        case false:
            console.log('this is false');
            footerEmailFailure.style.display = "block";
            footerEmailSuccess.style.display = "none";
            // document.getElementById('footer-email').value = "";
            break;
        default:
            console.log("error");
            break;    
    }
}

function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}
// Validate Email function can be found here: https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html





