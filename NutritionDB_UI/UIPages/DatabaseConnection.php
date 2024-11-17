<?php
    // SQL Server and Database info
    $host = "localhost";
    $dbname = "NutritionDB_Normalized";
    $username = "root";
    $password = "";

    // Connect to Server
    $conn = mysqli_connect($host, $username, $password, $dbname);

    // Ensure connection
    if (mysqli_connect_errno())
    {
        die("Connection error: " . mysqli_connect_error());
    }
?>