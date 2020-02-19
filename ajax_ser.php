<?php
  if(!isset($_POST['email'])) die("Hacking attempt");
  $email = htmlspecialchars($_POST['email']);
  // делаем что-то с переменной $email
  echo "Успех";
?>