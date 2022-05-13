// These scripts are only used on the Contact page of the website
var contactEmailTrue = false;
var firstNameTrue = false 
var lastNameTrue = false
var phoneTrue = false
var dropdownTrue = false
var radioTrue = false

// https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html
function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

// https://www.abstractapi.com/guides/validate-phone-number-javascript#:~:text=Validate%20a%20Phone%20Number%20Using%20a%20JavaScript%20Regex%20and%20HTML&text=Add%20these%20lines%3A-,function%20validatePhoneNumber(input_str)%20%7B%20var%20re%20%3D%20%2F%5E%5C,getElementById('myform_phone').
function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
}

// These functions validate specific form sections

function validateNotBlank(firstName) {
    if (firstName != "") {
        return true;
    } else {
        return false;
    }
}

function validateAffiliation(affiliation) {
    if (affiliation == 0) {
        return true
    } else {
        return false
    }
}

function radioChecked(radioA, radioB) {
    if (radioA == true || radioB == true) {
        return true 
    } else {
        return false
    }
}


// This script runs when the form is submitted.
function formSubmit() {
    firstNameTrue = validateNotBlank(document.getElementById('firstName').value);
    lastNameTrue = validateNotBlank(document.getElementById('lastName').value);
    contactEmailTrue = validateEmail(document.getElementById('emailInput').value);
    phoneTrue = validatePhoneNumber(document.getElementById('phoneNumber').value)
    dropdownTrue = validateAffiliation(document.getElementById("affiliationQuestion").value)
    radioTrue = radioChecked(document.getElementById('radio1').checked, document.getElementById('radio2').checked);

    console.log(firstNameTrue);
    console.log(lastNameTrue);
    console.log(contactEmailTrue);
    console.log(phoneTrue);
    console.log(dropdownTrue);
    console.log(radioTrue);

    switch (contactEmailTrue) {
        case true:
            switch(phoneTrue) {
                case true:
                    if (firstNameTrue==true && lastNameTrue==true && dropdownTrue==true && radioTrue == true) {
                        alert("The form has been submitted.");
                        document.getElementById('registrationForm').submit();
                    } else if (firstNameTrue==false || lastNameTrue==false || dropdownTrue==false || radioTrue == false) {
                        alert("Please fill in all required sections of the form.")
                    }
                    break;
                case false:
                    alert("Please enter a valid phone number or fill in any required sections.");
                    break;
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