const form = document.querySelector("#contactForm");
form.addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    console.log("Submitted");

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInput(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}

function checkInput(value) {
   
    const trimmedValue = value.trim();
 
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}