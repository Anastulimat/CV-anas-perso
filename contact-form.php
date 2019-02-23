<?php

session_start();

$array = array("name" => "", "email" => "", "subject" => "", "message" => "", "nameError" => "", "emailError" => "", "subjectError" => "", "messageError" => "", "isSuccess" => false);
$emailTo = "anas.touliemat@gmail.com";

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    $array["name"] = test_input($_POST["name"]);
    $array["email"] = test_input($_POST["email"]);
    $array["subject"] = test_input($_POST["subject"]);
    $array["message"] = test_input($_POST["message"]);
    $array["isSuccess"] = true;
    $emailText = "";

    if (empty($array["name"]))
    {
        $_SESSION['flash']['nameError'] = 'Nom est requis !';
        $array["nameError"] = "Nom est requis !";
        $array["isSuccess"] = false;
    }
    else
    {
        $emailText .= "Name: {$array['name']}\n";
    }

    if(!isEmail($array["email"]))
    {
        $_SESSION['flash']['emailError'] = 'Vueillez entrer un mail valide!';
        $array["emailError"] = "Vueillez entrer un mail valide!";
        $array["isSuccess"] = false;
    }
    else
    {
        $emailText .= "Email: {$array['email']}\n";
    }

    if (empty($array["subject"]))
    {
        $_SESSION['flash']['subjectError'] = 'Vueillez entrer un sujet valide!';
        $array["subjectError"] = "Vueillez entrer un sujet valide!";
        $array["isSuccess"] = false;
    }
    else
    {
        $emailText .= "Sujet: {$array['subject']}\n";
    }

    if (empty($array["message"]))
    {
        $_SESSION['flash']['messageError'] = 'Qu\'est-ce que vous voulez me dire ?';
        $array["messageError"] = "Qu'est-ce que vous voulez me dire ?";
        $array["isSuccess"] = false;
    }
    else
    {
        $emailText .= "Message: {$array['message']}\n";
    }

    if($array["isSuccess"])
    {
        $headers = "From: {$array['name']} <{$array['email']}>\r\nReply-To: {$array['email']}";
        mail($emailTo, "Un message de votre site", $emailText, $headers);
        $_SESSION['done']['success'] = 'Votre message a bien été envoyé. Merci de m\'avoir contacté.';
        header('Location: index.php#contact');
    }
    else {
        header('Location: index.php#contact');
    }
}

function isEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}


function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>


