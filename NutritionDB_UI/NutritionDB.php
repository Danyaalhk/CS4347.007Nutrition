<?php
    include_once 'UIPages/DatabaseConnection.php';
?>

<!DOCTYPE HTML>

<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css">
        <script src="Javascript/nutritionDB.js" defer></script>
    </head>

    <body>
        <!--Title-->
        <center><h1 class="title">Nutrition Database</h1></center>

        <!--Database Menu-->
        <div id="nutritionDB">
        <div class="DBMenu" id="selectMenu">
            <h2>Nutrition Database Menu</h2>
            <h3><a href="UIPages/query.php">Query – to perform operations such as list employees earning more than 150K per year</a></h3>
            <h3><a href="UIPages/insert.php">Insert – to add new tuple(s), and/or field(s) to your table(s)</a></h3>
            <h3><a href="UIPages/delete.php">Delete - to remove tuple(s), and/or field(s) from your table(s)</a></h3>
            <h3><a href="UIPages/update.php">Update - to modify tuple(s), and/or field(s) from your table(s)</a></h3>
            <h3><a href="#" onclick="closeDB()" >Quit</a></h3>
        </div>

        <div id="closeConnection">
            <?php
                $conn -> close()
            ?>
            <h2>Connection to Nutrition Database Closed</h2>
        <div>
        </div> 
    </body>
</html>
