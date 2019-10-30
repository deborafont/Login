<?php
include 'classes.php';

$execute = new LoginVerify();
echo json_encode($execute->emailVerify($_POST), JSON_UNESCAPED_UNICODE);

?>