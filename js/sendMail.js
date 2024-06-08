function sendMail(name, email, message) {
    $.ajax({
        url: "./apis/sendMail.php",
        method: "POST",
        crossDomain: true,
        headers: {
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Credentials': true
        },
        dataType: "JSON",
        data: {
            name: name,
            email: email,
            message: message
        },
        success: function(response) {
            $(".loading").removeClass("d-block");
            if(response.data.success) {
                $(".sent-message").addClass("d-block");
                $("#name, #email, #subject, #message").val("");
            } else {
                console.log("failed")
                $(".error-message").html(response);
                $(".error-message").addClass("d-block");
            }
        }
    });
}

$(() => {
    $("#mailForm").submit(function(e) {
        e.preventDefault();

        $(".loading").addClass("d-block");
        $(".error-message").removeClass("d-block");
        $(".sent-message").removeClass("d-block");

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();

        sendMail(name, email, message);
    });
});