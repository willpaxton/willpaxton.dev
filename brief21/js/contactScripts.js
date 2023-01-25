// These scripts are only used on the Contact page of the website
var contactEmailTrue = false;
var firstNameTrue = false 
var lastNameTrue = false
var messageTrue = false

function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}
// Validate Email function can be found here: https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html



// These functions validate specific form sections
function validateFirstName(firstName) {
    if (firstName != "") {
        return true;
    } else {
        return false;
    }
}

function validateLastName(lastName) {
    if (lastName != "") {
        return true;
    } else {
        return false;
    }
}

function validateMessage(message) {
    if (message != "") {
        return true;
    } else {
        return false;
    }
}

// This script runs when the form is submitted.
function formSubmit() {
    firstNameTrue = validateFirstName(document.getElementById('firstName').value);
    lastNameTrue = validateLastName(document.getElementById('lastName').value);
    contactEmailTrue = validateEmail(document.getElementById('emailInput').value);
    messageTrue = validateMessage(document.getElementById('contact-message-input').value);

    console.log(firstNameTrue);
    console.log(lastNameTrue);
    console.log(contactEmailTrue);
    console.log(messageTrue);

    switch (contactEmailTrue) {
        case true:
            if (firstNameTrue==true && lastNameTrue==true && messageTrue==true) {
                alert("The form has been submitted.");
                document.getElementById('contactForm').submit();
            } else if (firstNameTrue==false || lastNameTrue==false || messageTrue==false) {
                alert("Please fill in all required sections of the form.")
            }
            break;
        case false:
            alert("Please enter a valid email address or fill in any required sections.");
            break;
        default:
            console.log("error");
            break;    
    }    
}