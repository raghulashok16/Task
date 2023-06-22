$(document).ready(function () {
    $("#lastName").prop("disabled", true);
    $("#mobile").prop("disabled", true);
    $("#submit").prop("disabled", true);

    $("#firstName").keyup(function () {
        if ($("#firstName").val().length < 3) {
            $("#lastName").prop("disabled", true);
            if ($("#firstNameError").length == 0) {
                console.log($("#firstNameError").length);
                $("#firstName").after("<p id='firstNameError'>minimum 3 letters needed</p>");
            }

        } else {
            $("#firstNameError").remove();
            $("#lastName").prop("disabled", false);

        }
    });
    $("#lastName").keyup(function () {
        if ($("#lastName").val().length < 3) {
            $("#mobile").prop("disabled", true);
            if ($("#lastNameError").length == 0) {
                console.log($("#firstNameError").length);
                $("#lastName").after("<p id='lastNameError'>minimum 3 letters needed</p>");
            }

        } else {
            $("#lastNameError").remove();
            $("#mobile").prop("disabled", false);

        }
    });
    $("#mobile").keyup(function () {
        if ($("#mobile").val().length < 10) {
            $("#mobileError").show();
            $("#submit").prop("disabled", true);
        } else {
            $("#mobileError").hide();
            $("#submit").prop("disabled", false);
        }
        if ($("#mobile").val().length < 10) {
            $("#submit").prop("disabled", true);
            if ($("#mobileError").length == 0) {
                console.log($("#firstNameError").length);
                $("#lastName").after("<p id='mobileError'>minimum 10 numbers needed</p>");
            }

        } else {
            $("#mobileError").remove();
            $("#submit").prop("disabled", false);

        }
    });

})