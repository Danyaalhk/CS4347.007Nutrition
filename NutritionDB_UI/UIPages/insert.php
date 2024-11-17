<?php
    include_once 'DatabaseConnection.php';
?>

<!DOCTYPE HTML>

<html>
    <head>
        <link rel="stylesheet" href="NutritionDBStyle.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css">
        <script src="../Javascript/insertDatabase.js" defer></script>
    </head>

    <body>
        <!--Insert Data Page-->
        <div class="insertPage">
            <!--Title-->
            <center><h1 class="title"><a href="../NutritionDB.php">Nutrition Database</a></h1></center>

            <!--Insert Page Description-->
            <h2>Insert – to add new tuple(s), and/or field(s) to your table(s)</h2>
            
            <!--Insert Page Form-->
            <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
                <div id="insertForm">
                    <div id="insertType">
                        <label for="insertDataType">Insert tuple(s) and/or field(s)</label>
                        <select id="insertDataType" name="insertDataType">
                            <option disabled selected value> -- select an option -- </option>
                            <option value="tuple">tuple(s)</option>
                            <option value="field">field(s)</option>
                            <option value="tuple and field">tuple(s) and field(s)</option>
                        </select>
                    </div>

                    <div id="insertTableSelect">
                        <label for="tableSelect">What Table?</label>
                        <select id="tableSelect" name="tableSelect">
                            <option disabled selected value> -- select an option -- </option>
                            <option value="User">User</option>
                            <option value="DietaryGoal">DietaryGoal</option>
                            <option value="MealPlan">MealPlan</option>
                            <option value="Meal">Meal</option>
                            <option value="NutritionalInfo">NutritionalInfo</option>
                            <option value="MealPlan_Meals">MealPlan_Meals</option>
                            <option value="Meal_NutritionalInfo">Meal_NutritionalInfo</option>
                        </select>
                    </div>

                    <div id="insertTuples">
                        <h3>Insert tuple(s)</h3>
                    </div>

                    <div id="insertFields">
                        <h3>Insert field(s)</h3>

                        <label for="fielName">Field Name</label>
                        <input type="text" id="fielName" name="fielName">

                        <label for="fielName">Field Data Type</label>
                        <input type="text" id="fielName" name="fielName">

                        <button>Insert Field</button>
                    </div>
                </div>
            </form>

            <select id="userTableSelect">
                <option disabled selected value> -- select an option -- </option>
                <?php
                    $userTable = mysqli_query($conn, "SELECT * FROM User;");
                    while ($getField = mysqli_fetch_field($userTable))
                    {
                        echo "<option value=\"" . $getField->name . "\">" . $getField->name . "</option>";
                    }
                ?>
            </select>

            <select id="dietaryGoalTableSelect">
                <option disabled selected value> -- select an option -- </option>
                <?php
                $dietaryGoalTable = mysqli_query($conn, "SELECT * FROM DietaryGoal;");
                while ($getField = mysqli_fetch_field($dietaryGoalTable))
                {
                    echo "<option value=\"" . $getField->name . "\">" . $getField->name . "</option>";
                }
                ?>
            </select>

            <select id="mealPlanTableSelect">
                <option disabled selected value> -- select an option -- </option>
                <?php
                    $mealPlanTable = mysqli_query($conn, "SELECT * FROM MealPlan;");
                    while ($getField = mysqli_fetch_field($mealPlanTable))
                    {
                        echo "<option value=\"" . $getField->name . "\">" . $getField->name . "</option>";
                    }
                ?>
            </select>

            <select id="mealTableSelect">
                <option disabled selected value> -- select an option -- </option>
                <?php
                    $mealTable = mysqli_query($conn, "SELECT * FROM Meal;");
                    while ($getField = mysqli_fetch_field($mealTable))
                    {
                        echo "<option value=\"" . $getField->name . "\">" . $getField->name . "</option>";
                    }
                ?>
            </select>

            <select id="nutritionalInfoTableSelect">
                <option disabled selected value> -- select an option -- </option>
                <?php
                    $nutritionalInfoTable = mysqli_query($conn, "SELECT * FROM NutritionalInfo;");
                    while ($getField = mysqli_fetch_field($nutritionalInfoTable))
                    {
                        echo "<option value=\"" . $getField->name . "\">" . $getField->name . "</option>";
                    }
                ?>
            </select>

            <select id="mealPlan_MealsTableSelect">
                <option disabled selected value> -- select an option -- </option>
                <?php
                    $mealPlan_MealsTable = mysqli_query($conn, "SELECT * FROM MealPlan_Meals;");
                    while ($getField = mysqli_fetch_field($mealPlan_MealsTable))
                    {
                        echo "<option value=\"" . $getField->name . "\">" . $getField->name . "</option>";
                    }
                ?>
            </select>

            <select id="meal_NutritionalInfoTableSelect">
                <option disabled selected value> -- select an option -- </option>
                <?php
                    $meal_NutritionalInfoTable = mysqli_query($conn, "SELECT * FROM Meal_NutritionalInfo;");
                    while ($getField = mysqli_fetch_field($meal_NutritionalInfoTable))
                    {
                        echo "<option value=\"" . $getField->name . "\">" . $getField->name . "</option>";
                    }
                ?>
            </select>

            <div id="inputOutput">
                <?php 
                    if ($_SERVER["REQUEST_METHOD"] == "POST") 
                    {
                        $runBoth = false;
                        if ($_POST['insertDataType'] == "tuple and field")
                        {
                            $runBoth = true;
                        }
                        if ($runBoth || $_POST['insertDataType'] == "tuple")
                        {
                            $sqlInsertStatment = "INSERT INTO " . $_POST['tableSelect'];

                            $insertFieldNames = "";
                            for ($x = 0; array_key_exists("insertTuplesSelect" . $x, $_POST); $x++)
                            {
                                $insertFieldNames .= $_POST["insertTuplesSelect" . $x];
                                if (array_key_exists("insertTuplesSelect" . ($x + 1), $_POST))
                                {
                                    $insertFieldNames .= ", ";
                                }
                            }
                            $sqlInsertStatment .= " (" . $insertFieldNames . ") ";

                            $insertFieldData = "";
                            for ($x = 0; array_key_exists("insertTuplesInput" . $x, $_POST); $x++)
                            {
                                $insertFieldData .= "'" . $_POST["insertTuplesInput" . $x] . "'";
                                if (array_key_exists("insertTuplesInput" . ($x + 1), $_POST))
                                {
                                    $insertFieldData .= ", ";
                                }
                            }
                            $sqlInsertStatment .= "VALUES (" . $insertFieldData . ");";
                            mysqli_query($conn, $sqlInsertStatment);
                        }
                        if ($runBoth || $_POST['insertDataType'] == "field")
                        {   
                            for ($x = 0; array_key_exists("insertFieldNameInput" . $x, $_POST); $x++)
                            {
                                $sqlInsertStatment = "ALTER TABLE " . $_POST['tableSelect'];
                                $sqlInsertStatment .= " ADD COLUMN " . $_POST["insertFieldNameInput" . $x] . " ";
                                $sqlInsertStatment .= $_POST["insertFieldDataType" . $x] . " NULL ";
                                $sqlInsertStatment .= "AFTER " . $_POST["insertAfterFieldSelect" . $x] . ";";
                                mysqli_query($conn, $sqlInsertStatment);
                            }
                        }
                ?>
                    <div id="outputTableData">
                        <?php
                            $tableName = $_POST['tableSelect'];
                            $tableFieldSelect = "SELECT * FROM " . $tableName . ";";
                        ?>
                        <h3><?php echo $tableName; ?></h3>

                        <table>
                            <tr>
                                <?php
                                    $tableData = mysqli_query($conn, $tableFieldSelect);
                                    while ($getFieldName = mysqli_fetch_field($tableData))
                                    {
                                        echo "<th>" . $getFieldName->name . "</th>";
                                    }
                                ?>
                            </tr>
                            <?php
                                $tableDataTuple = mysqli_query($conn, $tableFieldSelect);
                                while ($getTupleLine = mysqli_fetch_assoc($tableDataTuple))
                                {
                                    echo "<tr>";
                                    $tableDataField = mysqli_query($conn, $tableFieldSelect);
                                    while ($getFieldName = mysqli_fetch_field($tableDataField))
                                    {
                                        echo "<td>";
                                        $output = $getTupleLine[$getFieldName->name];
                                        if ($output == NULL)
                                        {
                                            $output = "NULL";
                                        }
                                        echo $output;
                                        echo "</td>";
                                    }
                                    echo "</tr>";
                                }
                            ?>
                        </table>
                    </div>
                <?php
                    }
                ?>
            </div>
        </div>
    </body>
</html>
