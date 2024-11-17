
//Query Page
const queryPage = document.getElementById("queryPage")

window.onload = function() 
{
    setQueryTableSelect()
}

//Query Form
const queryForm = document.getElementById("queryForm")
const submitQuery = document.getElementById("submitQuery")
submitQuery.remove()

//Query Tables
const querySelectType = document.getElementById("querySelectType")

var numTableElements = 0;
const querySelectTables = document.getElementById("querySelectTables")
const selectQueryTable = document.getElementById("selectQueryTable")
selectQueryTable.remove()

function setQueryTableSelect()
{
    removeButtons(querySelectTables)

    const tableQuery = document.createElement("div")
    tableQuery.id = "queryTable" + numTableElements
    queryForm.append(tableQuery)

    const newTableSelect = selectQueryTable.cloneNode(true)
    newTableSelect.id = "selectQueryTable" + numTableElements
    newTableSelect.name = "selectQueryTable" + numTableElements
    var selectName = "selectQueryTable" + numTableElements
    var divName = "queryTable" + numTableElements
    var tableElement = numTableElements
    newTableSelect.addEventListener("change", () => { getQueryTable(selectName, document.getElementById(divName), tableElement) })
    querySelectTables.append(newTableSelect)

    if (numTableElements == 1)
    {
        querySelectType.append(setOperatorSelect)
    }

    const addTableButton = document.createElement("button")
    addTableButton.innerText = "Add Table to Query"
    addTableButton.onclick = function() {setQueryTableSelect()}
    querySelectTables.append(addTableButton)

    numTableElements++
}


//Set Operator
const setOperatorSelect = document.getElementById("setOperatorSelect")
const selectSetOperator = document.getElementById("selectSetOperator")
selectSetOperator.remove()
setOperatorSelect.remove()

function addSetOperator()
{
    removeButtons(setOperatorSelect)
    setOperatorSelect.append(selectSetOperator)
}

//User Table Setup
const userTableSelect = document.getElementById("userTableSelect")
userTableSelect.remove()


//DietaryGoal Table Setup
const dietaryGoalTableSelect = document.getElementById("dietaryGoalTableSelect")
dietaryGoalTableSelect.remove()

//MealPlan Table Setup
const mealPlanTableSelect = document.getElementById("mealPlanTableSelect")
mealPlanTableSelect.remove()


//Meal Table Setup
const mealTableSelect = document.getElementById("mealTableSelect")
mealTableSelect.remove()


//NutritionalInfo Table Setup
const nutritionalInfoTableSelect = document.getElementById("nutritionalInfoTableSelect")
nutritionalInfoTableSelect.remove()


//Mealplan_Meals Table Setup
const mealPlan_MealsTableSelect = document.getElementById("mealPlan_MealsTableSelect")
mealPlan_MealsTableSelect.remove()


//Meal_NutritionalInfor Table Setup
const meal_NutritionalInfoTableSelect = document.getElementById("meal_NutritionalInfoTableSelect")
meal_NutritionalInfoTableSelect.remove()


function getQueryTable(SelectQueryTableID, queryTableID, tableElement)
{
    var selectedQueryTable = document.getElementById(SelectQueryTableID).value
    submitQuery.remove()

    if (selectedQueryTable == "User")
    {
        createTableQuery(userTableSelect, "User", queryTableID, tableElement)
    }
    else if (selectedQueryTable == "DietaryGoal")
    {
        createTableQuery(dietaryGoalTableSelect, "DietaryGoal", queryTableID, tableElement)
    }
    else if (selectedQueryTable == "MealPlan")
    {
        createTableQuery(mealPlanTableSelect, "MealPlan", queryTableID, tableElement)
    }
    else if (selectedQueryTable == "Meal")
    {
        createTableQuery(mealTableSelect, "Meal", queryTableID, tableElement)
    }
    else if (selectedQueryTable == "NutritionalInfo")
    {
        createTableQuery(nutritionalInfoTableSelect, "NutritionalInfo", queryTableID, tableElement)
    }
    else if (selectedQueryTable == "MealPlan_Meals")
    {
        createTableQuery(mealPlan_MealsTableSelect, "MealPlan_Meals", queryTableID, tableElement)
    }
    else if (selectedQueryTable == "Meal_NutritionalInfo")
    {
        createTableQuery(meal_NutritionalInfoTableSelect, "Meal_NutritionalInfo", queryTableID, tableElement)
    }

    queryForm.append(submitQuery)
}


function createTableQuery(tableFieldSelect, tableName, tableQueryID, tableElement)
{
    tableQueryID.innerHTML = ''

    const queryTableTitle = document.createElement("h3")
    queryTableTitle.innerText = tableName + " Table Query:"
    tableQueryID.append(queryTableTitle)

    const queryFieldTitle = document.createElement("h4")
    queryFieldTitle.innerText = tableName + " Table Fields:"
    tableQueryID.append(queryFieldTitle)

    const queryFieldsContainer = document.createElement("div")
    queryFieldsContainer.id = tableName + "QueryFields"
    tableQueryID.append(queryFieldsContainer)
    var numFields = 0;
    addFieldSelect(tableFieldSelect, queryFieldsContainer, numFields, tableElement)

    const queryFilterTitle = document.createElement("h4")
    queryFilterTitle.innerText = tableName + " Table Query Filter(s):"
    tableQueryID.append(queryFilterTitle)

    const queryFilterContainer = document.createElement("div")
    queryFilterContainer.id = tableName + "QueryFilters"
    tableQueryID.append(queryFilterContainer)
    var numFilters = 0;
    addQueryFilter(tableFieldSelect, queryFilterContainer, numFilters, tableElement)
}

//Field Query
const selectAggregate = document.getElementById("selectAggregate")
selectAggregate.remove()

function addFieldSelect(tableFieldSelect, tableQueryID, numFields, tableElement)
{
    removeButtons(tableQueryID)

    const queryFieldTitle = document.createElement("h5")
    queryFieldTitle.innerText = "Query Field " + (numFields + 1)
    tableQueryID.append(queryFieldTitle)

    const queryFieldTableTitle = document.createElement("label")
    queryFieldTableTitle.innerText = "Query Field " + (numFields + 1) + ":"
    tableQueryID.append(queryFieldTableTitle)

    const newTableFieldSelect = tableFieldSelect.cloneNode(true)
    newTableFieldSelect.name = "queryField" + tableElement + numFields
    tableQueryID.append(newTableFieldSelect)

    const queryFieldAggregateTitle = document.createElement("label")
    queryFieldAggregateTitle.innerText = "Query Field " + (numFields + 1) + " Aggregate Function:"
    tableQueryID.append(queryFieldAggregateTitle)

    const newSelectAggregate = selectAggregate.cloneNode(true)
    newSelectAggregate.name = "queryFieldAggregate" + tableElement + numFields
    tableQueryID.append(newSelectAggregate)

    const addFieldButton = document.createElement("button")
    addFieldButton.innerText = "Add Field"
    addFieldButton.onclick = function() {addFieldSelect(tableFieldSelect, tableQueryID, ++numFields, tableElement)}
    tableQueryID.append(addFieldButton)
}

//Filter Query
const selectFilterType = document.getElementById("selectFilterType")
selectFilterType.remove()

function addQueryFilter(tableFieldSelect, filterContainer, numFilters, tableElement)
{
    removeButtons(filterContainer)

    const queryFilterTitle = document.createElement("h5")
    queryFilterTitle.innerText = "Query Filter " + (numFilters + 1)
    filterContainer.append(queryFilterTitle)

    const queryFilterTableTitle = document.createElement("label")
    queryFilterTableTitle.innerText = "Filter " + (numFilters + 1) + " Table:"
    filterContainer.append(queryFilterTableTitle)

    const newTableFieldSelect = tableFieldSelect.cloneNode(true)
    newTableFieldSelect.name = "queryFilterTable" + tableElement + numFilters
    filterContainer.append(newTableFieldSelect)

    const queryFilterTypeTitle = document.createElement("label")
    queryFilterTypeTitle.innerText = "Filter " + (numFilters + 1) + " Type:"
    filterContainer.append(queryFilterTypeTitle)

    const queryFilterType = selectFilterType.cloneNode(true)
    queryFilterType.name = "queryFilterType" + tableElement + numFilters
    filterContainer.append(queryFilterType)

    const queryFilterDataTitle = document.createElement("label")
    queryFilterDataTitle.innerText = "Filter Data:"
    filterContainer.append(queryFilterDataTitle)

    const queryFilterData = document.createElement("input")
    queryFilterData.name = "queryFilerData" + tableElement + numFilters
    filterContainer.append(queryFilterData)

    const addFilterButton = document.createElement("button")
    addFilterButton.innerText = "Add Filter"
    addFilterButton.onclick = function() {addQueryFilter(tableFieldSelect, filterContainer, ++numFilters, tableElement)}
    filterContainer.append(addFilterButton)
}





//Usefull functions
function removeButtons(parentElement)
{
    // Select all button elements within the parent element
    const buttons = parentElement.getElementsByTagName('button');

    // Convert the HTMLCollection to an array to safely remove elements
    const buttonsArray = Array.from(buttons);

    // Loop through the array and remove each button
    buttonsArray.forEach(button => button.remove());
}