<?php
    include_once 'DatabaseConnection.php';
?>

<!DOCTYPE HTML>

<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css">
        <script src="../Javascript/deleteDatabase.js" defer></script>
    </head>

    <body>

        <!--Delete Data Page-->
        <div id="deletePage">
            <!--Title-->
            <center><h1 class="title"><a href="../NutritionDB.php">Nutrition Database</a></h1></center>

            <!--Insert Data-->
            <h2>Delete - to remove tuple(s), and/or field(s) from your table(s)</h2>

            <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
                <div id="deleteForm">
                    <div id="deleteType">
                        <label for="deleteDataType">Delete tuple(s) and/or field(s)</label>
                        <select id="deleteDataType" name="deleteDataType">
                            <option disabled selected value> -- select an option -- </option>
                            <option value="tuple">tuple(s)</option>
                            <option value="field">field(s)</option>
                            <option value="tuple and field">tuple(s) and field(s)</option>
                        </select>
                    </div>

                    <div id="deleteTableSelect">
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

                    <div id="deleteTuples">
                        <h3>Delete tuple(s)</h3>
                        <div id="deleteTupleData">
                        </div>
                    </div>

                        
                    <div id="deleteFields">
                        <h3>Delete field(s)</h3>
                        <div id="deleteFieldData">
                        </div>
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

            <div id="deleteOutput">
                <?php 
                    if ($_SERVER["REQUEST_METHOD"] == "POST") 
                    {
                        $runBoth = false;
                        if ($_POST['deleteDataType'] == "tuple and field")
                        {
                            $runBoth = true;
                        }
                        if ($runBoth || $_POST['deleteDataType'] == "tuple")
                        {
                            for ($x = 0; array_key_exists("deleteTupleSelect" . $x, $_POST); $x++)
                            {
                                $sqlDeleteStatment = "DELETE FROM " . $_POST['tableSelect'];
                                $sqlDeleteStatment .= " WHERE " . $_POST["deleteTupleSelect" . $x ];
                                $sqlDeleteStatment .= " = " . $_POST["deleteTupleData" . $x] . ";";
                                mysqli_query($conn, $sqlDeleteStatment);
                            }
                        }
                        if ($runBoth || $_POST['deleteDataType'] == "field")
                        {
                            for ($x = 0; array_key_exists("deleteFieldSelect" . $x, $_POST); $x++)
                            {
                                $sqlDeleteStatment = "ALTER TABLE " . $_POST['tableSelect'];
                                $sqlDeleteStatment .= " DROP COLUMN " . $_POST["deleteFieldSelect" . $x] . ";";
                                mysqli_query($conn, $sqlDeleteStatment);
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
