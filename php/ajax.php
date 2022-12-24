<?php
$name=htmlspecialchars($_POST['name']);
$email=htmlspecialchars($_POST['email']);
$phone=htmlspecialchars($_POST['phone']);
 
    if($name =="||$email=="|| $phone ==""){
        echo 'Fill in all the fields'/*Заполните все поля*/;
        exit;
    }


    //ОТПРАВКА 
    $subject = "Order a call";
    $headers = "From: \r\n \r\n  Имя: $name \r\n 
     
    Почта: $email\r\n 
    Телефон: $phone\r\n ";
    if(mail("ychoba.boec92.92@yandex.ru", $subject,
    $headers))
    echo "<text style='color: rgb(0, 255, 30);'>Message sent</text>"/*Сообщение отправлено*/;
    else
    echo "Message not sent!"/*Сообщение не отправлено*/;
