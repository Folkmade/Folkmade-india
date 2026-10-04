<?php

include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $role = $_POST["role"];

    $sql = "INSERT INTO user_account (Name, Email, Password, AdminID)
            VALUES ('$name', '$email', '$password', 1)";

    if (mysqli_query($conn, $sql)) {

        $userID = mysqli_insert_id($conn);

        if ($role == "user") {

            mysqli_query($conn,
                "INSERT INTO buyer (UserID, Name, Email, Phone)
                 VALUES ($userID, '$name', '$email', '$phone')"
            );

        } elseif ($role == "seller") {

            mysqli_query($conn,
                "INSERT INTO seller (UserID, Name, Email, Phone)
                 VALUES ($userID, '$name', '$email', '$phone')"
            );
        }

        echo "Registration successful";

    } else {

        echo "Registration failed: " . mysqli_error($conn);

    }
}

?>