function defaults() {
    document.getElementById("lastName").disabled = "true";
    document.getElementById("mobile").disabled = "true";
    document.getElementById("submit").disabled = "true";
}
function validateFirstName() {
    const firstName = document.getElementById("firstName");
    if (firstName.value.length < 3) {
        document.getElementById("lastName").disabled = "true";
        var id = document.getElementById("firstNameError");
        if (!id) {
            const para = document.createElement("p");
            const node = document.createTextNode("minimum 3 letters required");
            para.appendChild(node);
            para.setAttribute("id", "firstNameError");
            document.getElementById("firstName").after(para);
        }
    } else {
        const element = document.getElementById("firstNameError");
        element.remove();
        document.getElementById("lastName").removeAttribute("disabled");
    }
}

function validateLastName() {
    const lastName = document.getElementById("lastName");

    if (lastName.value.length < 3) {
        document.getElementById("mobile").disabled = "true";
        var id = document.getElementById("lastNameError");
        if (!id) {
            const para = document.createElement("p");
            const node = document.createTextNode("minimum 3 letters required");
            para.appendChild(node);
            para.setAttribute("id", "lastNameError");
            document.getElementById("lastName").after(para);
        }
    } else {
        const element = document.getElementById("lastNameError");
        element.remove();
        document.getElementById("mobile").removeAttribute("disabled");
    }
}
function validateMobile() {
    const mobile = document.getElementById("mobile");
    if (mobile.value.length < 10) {
        document.getElementById("submit").disabled = "true";
        var id = document.getElementById("mobileError");
        if (!id) {
            const para = document.createElement("p");
            const node = document.createTextNode("minimum 10 numbers required");
            para.appendChild(node);
            para.setAttribute("id", "mobileError");
            document.getElementById("mobile").after(para);
        }
    } else {
        const element = document.getElementById("mobileError");
        element.remove();
        document.getElementById("submit").removeAttribute("disabled");
    }
}