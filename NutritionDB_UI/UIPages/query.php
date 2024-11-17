<?php
    include_once 'DatabaseConnection.php';
?>

<!DOCTYPE HTML>

<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css">
        <script src="../Javascript/queryDatabase.js" defer></script>
    </head>

    <body>

        <!--Query Data Page-->
        <div id="queryPage">
            <!--Title-->
            <center><h1 class="title"><a href="../NutritionDB.php">Nutrition Database</a></h1></center>

            <!--Query Page Description-->
            <h2>Query – to perform operations such as list employees earning more than 150K per year</h2>

            <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
                <div id="queryForm">
                    <div id="querySelectType">
                        <div id="querySelectTables">
                            <h3>Create Query</h3>
                            <label for="selectQueryTable">What table would you like to query?</label>
                            <select id="selectQueryTable" name="selectQueryTable">
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

                        <div id="setOperatorSelect">
                            <div id="selectSetOperator">
                                <label for="setOperator">Set Operator:</label>
                                <select id="setOperator" name="setOperator">
                                    <option value="UNION">UNION</option>
                                    <option value="UNION ALL">UNION ALL</option>
                                    <option value="INTERSECT">INTERSECT</option>
                                    <option value="EXCEPT">EXCEPT</option>
                                </select>
                            </div>
                            <button onclick="addSetOperator()">Add Set Operator</buton>
                        </div>
                    </div>

                    <button id="submitQuery">Submit Query</button>
                </div>
            </form>

            <select id="selectAggregate">
                <option disabled selected value> -- select an option -- </option>
                <option value="none">None</option>
                <option value="MIN">MIN()</option>
                <option value="MAX">MAX()</option>
                <option value="COUNT">COUNT()</option>
                <option value="SUM">SUM()</option>
                <option value="AVG">AVG()</option>
            </select>

            <select id="selectFilterType">
                <option disabled selected value> -- select an option -- </option>
                <option value="=">Equal to (=)</option>
                <option value=">">Greater than (>)</option>
                <option value="<">Less than (<)</option>
                <option value=">=">Greater than or equal to (>=)</option>
                <option value="<=">Less than or equal to (<=)</option>
                <option value="<>">Not equal to (<>)</option>
            </select>

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

            <div id="queryOutput">
                <?php 
                    if ($_SERVER["REQUEST_METHOD"] == "POST") 
                    { 
                        if (array_key_exists("setOperator", $_POST))
                        {
                            $queryStatment = "";
                            for ($x = 0; array_key_exists("selectQueryTable" . $x, $_POST); $x++)
                            {
                                $queryInput = "SELECT ";

                                for ($y = 0; array_key_exists("queryField" . $x . $y, $_POST); $y++)
                                {
                                    if ($_POST["queryFieldAggregate" . $x . $y] != "none")
                                    {
                                        $queryInput .= $_POST["queryFieldAggregate" . $x . $y] . "(" . $_POST["queryField" . $x . $y] . ")";
                                    }
                                    else
                                    {
                                        $queryInput .= $_POST["queryField" . $x . $y];
                                    }

                                    if (array_key_exists("queryField" . $x . ($y + 1), $_POST))
                                    {
                                        $queryInput .= ", ";
                                    }
                                }

                                $queryInput .= " FROM " . $_POST["selectQueryTable" . $x] . " WHERE ";

                                for ($y = 0; array_key_exists("queryFilterTable" . $x . $y, $_POST); $y++)
                                {
                                    $queryInput .= $_POST["queryFilterTable" . $x . $y];
                                    $queryInput .= " " . $_POST["queryFilterType" . $x . $y];
                                    $queryInput .= " '" . $_POST["queryFilerData" . $x . $y] . "'";
                                    if (array_key_exists("queryFilterTable" . $x . ($y + 1), $_POST))
                                    {
                                        $queryInput .= " AND ";
                                    }
                                }

                                $queryStatment .= $queryInput;
                                if (array_key_exists("selectQueryTable" . ($x + 1), $_POST))
                                {
                                    $queryStatment .= " " . $_POST["setOperator"] . " ";
                                }
                            }
                        }
                        else
                        {
                            $queryStatment = "SELECT ";
                            $queryTables = "";
                            $queryFields = "";
                            $queryFilters = " WHERE ";
                            for ($x = 0; array_key_exists("selectQueryTable" . $x, $_POST); $x++)
                            {
                                $queryTables .= $_POST["selectQueryTable" . $x];

                                for ($y = 0; array_key_exists("queryField" . $x . $y, $_POST); $y++)
                                {
                                    if ($_POST["queryFieldAggregate" . $x . $y] != "none")
                                    {
                                        $queryFields .= $_POST["queryFieldAggregate" . $x . $y] . "(" . $_POST["queryField" . $x . $y] . ")";
                                    }
                                    else
                                    {
                                        $queryFields .= $_POST["queryField" . $x . $y];
                                    }

                                    if (array_key_exists("queryField" . $x . ($y + 1), $_POST) || array_key_exists("queryField" . ($x + 1) . "0", $_POST))
                                    {
                                        $queryFields .= ", ";
                                    }
                                }

                                for ($y = 0; array_key_exists("queryFilterTable" . $x . $y, $_POST); $y++)
                                {
                                    $thisQueryFilter = $_POST["queryFilterTable" . $x . $y];
                                    $thisQueryFilter .= " " . $_POST["queryFilterType" . $x . $y];
                                    $thisQueryFilter .= " '" . $_POST["queryFilerData" . $x . $y] . "'";
                                    if (array_key_exists("queryFilterTable" . $x . ($y + 1), $_POST) || array_key_exists("queryFilterTable" . ($x + 1) . "0", $_POST))
                                    {
                                        $thisQueryFilter .= " AND ";
                                    }
                                    $queryFilters .= $thisQueryFilter;
                                }

                                if (array_key_exists("selectQueryTable" . ($x + 1), $_POST))
                                {
                                    $queryTables .= ", ";
                                }
                            }
                            $queryStatment .= $queryFields . " FROM " . $queryTables . $queryFilters . ";";
                        }
                ?>

                    <div id="outputTableData">
                        <h3>Query Statment Table</h3>

                        <table>
                            <tr>
                                <?php 
                                    $tableData = mysqli_query($conn, $queryStatment);
                                    while ($getFieldName = mysqli_fetch_field($tableData))
                                    {
                                        echo "<th>" . $getFieldName->name . "</th>";
                                    }
                                ?>
                            </tr>
                                <?php
                                    $tableDataTuple = mysqli_query($conn, $queryStatment);
                                    while ($getTupleLine = mysqli_fetch_assoc($tableDataTuple))
                                    {
                                        echo "<tr>";
                                        $tableDataField = mysqli_query($conn, $queryStatment);
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