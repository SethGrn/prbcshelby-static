<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

    ini_set('SMTP', 'smtp.gmail.com');
    ini_set('smtp_port', 587);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "PRBC contact form";
    $message = "Name: $name\n" . "Email: $email\n\n" . $_POST['message'];
    $to = "sethandrewg@gmail.com";

    // Mail Headers
    $headers = "Organization: KarimEzzedine\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "From: yottadev@gmail.com" . "\r\n";
    $headers .= "Reply-To: ".$to."\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n";

    if(mail($to, $subject, $message, $headers)) {
        $response = (object)[
            'success' => true
        ];
    } else {
        $response = (object)[
            'success' => false
        ];
    }

    $jsonres = array (
        'data' => $response
    );

    echo json_encode($jsonres, JSON_PRETTY_PRINT);
?>
