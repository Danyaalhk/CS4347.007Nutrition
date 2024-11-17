//Update Page
const updatePage = document.getElementById("updatePage")


//Update Form
const updateForm = document.getElementById("updateForm")


//Update Tupe Elements
const updateType = document.getElementById("updateType")
const updateDataType = document.getElementById("updateDataType")
updateDataType.addEventListener("change", setUpdateType)

//Update Table Select
const updateTableSelect = document.getElementById("updateTableSelect")
const tableSelect = document.getElementById("tableSelect")
updateTableSelect.remove()


function setUpdateType()
{
    var selectedUpdateype = document.getElementById("updateDataType").value
    removeButtons(updateForm)

    if (selectedUpdateype == "tuple")
    {
        updateFields.remove()
        setUpdateTuples()
        updateForm.append(updateTuples)
        const submitUpdateTupleForm = document.createElement("button")
        submitUpdateTupleForm.innerText = "Update tuple(s)"
        updateForm.append(submitUpdateTupleForm)
    }
    else if (selectedUpdateype == "field")
    {
        updateTuples.remove()
        setUpdateFields()
        updateForm.append(updateFields)
        const submitUpdateFieldForm = document.createElement("button")
        submitUpdateFieldForm.innerText = "Update field(s)"
        updateForm.append(submitUpdateFieldForm)
    }
    else if (selectedUpdateype == "tuple and field")
    {
        updateTuples.remove()
        updateFields.remove()
        setUpdateTuples()
        setUpdateFields()
        updateForm.append(updateTuples)
        updateForm.append(updateFields)
        const submitUpdateForm = document.createElement("button")
        submitUpdateForm.innerText = "Update tuple(s) and field(s)"
        updateForm.append(submitUpdateForm)
    }
}




//Update Tuples Elements
const updateTuples = document.getElementById("updateTuples")
var numTupleElements = 0
updateTuples.remove()

function setUpdateTuples()
{
    updateTuples.innerHTML = ''

    const updateTuplesTitle = document.createElement("h3")
    updateTuplesTitle.innerText = "Update tuple(s)"
    updateTuples.append(updateTuplesTitle)

    const updateTuplesSelectLabel = document.createElement("label")
    updateTuplesSelectLabel.for = "tableSelect"
    updateTuplesSelectLabel.innerText = "What Table?"
    updateTuples.append(updateTuplesSelectLabel)

    const updateTableSelectTuples = tableSelect.cloneNode(true)
    updateTableSelectTuples.id = "updateTuplesTableSelect"
    updateTableSelectTuples.addEventListener("change", () => { getUpdateTable("updateTuplesTableSelect", "tuple") })
    updateTuples.append(updateTableSelectTuples)
}

function addTupleInput(updateTupleTableSelect)
{
    removeButtons(updateTuples)

    const updateTupleTitle = document.createElement("h4")
    updateTupleTitle.innerText = "Update Tuple " + (numTupleElements + 1)
    updateTuples.append(updateTupleTitle)

    const updateTupleNewFieldSelectLabel = document.createElement("label")
    updateTupleNewFieldSelectLabel.for = "updateTupleNewFieldSelect" + numTupleElements
    updateTupleNewFieldSelectLabel.innerText = "Update Tuple " + (numTupleElements + 1) + " New Field Name:"
    updateTuples.append(updateTupleNewFieldSelectLabel)

    const updateTupleNewFieldSelect = updateTupleTableSelect.cloneNode(true)
    updateTupleNewFieldSelect.id = "updateTupleNewFieldSelect" + numTupleElements
    updateTupleNewFieldSelect.name = "updateTupleNewFieldSelect" + numTupleElements 
    updateTuples.append(updateTupleNewFieldSelect)

    const updateNewTupleDataLabel = document.createElement("label")
    updateNewTupleDataLabel.for = "updateNewTupleData" + numTupleElements
    updateNewTupleDataLabel.innerText = "Update Tuple " + (numTupleElements + 1) + " New Tuple Data:"
    updateTuples.append(updateNewTupleDataLabel)

    const updateNewTupleDataInput = document.createElement("input")
    updateNewTupleDataInput.type = "text"
    updateNewTupleDataInput.id = "updateNewTupleData" + numTupleElements
    updateNewTupleDataInput.name = "updateNewTupleData" + numTupleElements
    updateTuples.append(updateNewTupleDataInput)

    const updateTupleFilterFieldSelectLabel = document.createElement("label")
    updateTupleFilterFieldSelectLabel.for = "updateTupleFilterFieldSelect" + numTupleElements
    updateTupleFilterFieldSelectLabel.innerText = "Update Tuple " + (numTupleElements + 1) + " Filter Field Name:"
    updateTuples.append(updateTupleFilterFieldSelectLabel)

    const updateTupleFilterFieldSelect = updateTupleTableSelect.cloneNode(true)
    updateTupleFilterFieldSelect.id = "updateTupleFilterFieldSelect" + numTupleElements
    updateTupleFilterFieldSelect.name = "updateTupleFilterFieldSelect" + numTupleElements 
    updateTuples.append(updateTupleFilterFieldSelect)

    const updateFilterTupleDataLabel = document.createElement("label")
    updateFilterTupleDataLabel.for = "updateFilterTupleData" + numTupleElements
    updateFilterTupleDataLabel.innerText = "Update Tuple " + (numTupleElements + 1) + " Filter Tuple Data:"
    updateTuples.append(updateFilterTupleDataLabel)

    const updateFilterTupleDataInput = document.createElement("input")
    updateFilterTupleDataInput.type = "text"
    updateFilterTupleDataInput.id = "updateFilterTupleData" + numTupleElements
    updateFilterTupleDataInput.name = "updateFilterTupleData" + numTupleElements
    updateTuples.append(updateFilterTupleDataInput)

    const addTuplesButton = document.createElement("button")
    addTuplesButton.innerText = "Add Update Tuples"
    addTuplesButton.onclick = function() {addTupleInput(updateTupleTableSelect)}
    updateTuples.append(addTuplesButton)

    numTupleElements++
}




//Update Field Elements
const updateFields = document.getElementById("updateFields")
var numFieldElements = 0
updateFields.remove()

function setUpdateFields()
{
    updateFields.innerHTML = ''

    const updateFieldsTitle = document.createElement("h3")
    updateFieldsTitle.innerText = "Update field(s)"
    updateFields.append(updateFieldsTitle)

    const updateFieldsSelectLable = document.createElement("label")
    updateFieldsSelectLable.for = "tableSelect"
    updateFieldsSelectLable.innerText = "What Table?"
    updateFields.append(updateFieldsSelectLable)

    const updateTableSelectFields = tableSelect.cloneNode(true)
    updateTableSelectFields.id = "updateFieldsTableSelect"
    updateTableSelectFields.addEventListener("change", () => { getUpdateTable("updateFieldsTableSelect", "field") })
    updateFields.append(updateTableSelectFields)
}

function addFieldInput(updateFieldTableSelect)
{
    removeButtons(updateFields)

    const updateFieldTitle = document.createElement("h4")
    updateFieldTitle.innerText = "Update Field " + (numFieldElements + 1)
    updateFields.append(updateFieldTitle)

    const updateOldFieldNameLabel = document.createElement("label")
    updateOldFieldNameLabel.for = "updateOldFieldName" + numFieldElements
    updateOldFieldNameLabel.innerText = "Update Field " + (numFieldElements + 1) + " Old Field Name:"
    updateFields.append(updateOldFieldNameLabel)

    const updateOldFildNameSelect = updateFieldTableSelect.cloneNode(true)
    updateOldFildNameSelect.id = "updateOldFieldName" + numFieldElements
    updateOldFildNameSelect.name = "updateOldFieldName" + numFieldElements
    updateFields.append(updateOldFildNameSelect)

    const updateNewFieldNameLabel = document.createElement("label")
    updateNewFieldNameLabel.for = "updateNewFieldName" + numFieldElements
    updateNewFieldNameLabel.innerText = "Update Field " + (numFieldElements + 1) + " New Field Name:"
    updateFields.append(updateNewFieldNameLabel)

    const updateNewFieldNameInput = document.createElement("input")
    updateNewFieldNameInput.type = "text"
    updateNewFieldNameInput.id = "updateNewFieldName" + numFieldElements
    updateNewFieldNameInput.name = "updateNewFieldName" + numFieldElements
    updateFields.append(updateNewFieldNameInput)

    const updateFieldDataTypeLabel = document.createElement("label")
    updateFieldDataTypeLabel.for = "updateNewFieldDataType" + numFieldElements
    updateFieldDataTypeLabel.innerText = "Update Field " + (numFieldElements + 1) + " New Field Data Type:"
    updateFields.append(updateFieldDataTypeLabel)

    const updateFieldDataTypeInput = document.createElement("input")
    updateFieldDataTypeInput.type = "text"
    updateFieldDataTypeInput.id = "updateNewFieldDataType" + numFieldElements
    updateFieldDataTypeInput.name = "updateNewFieldDataType" + numFieldElements
    updateFields.append(updateFieldDataTypeInput)

    const addFieldsButton = document.createElement("button")
    addFieldsButton.innerText = "Add Update Fields"
    addFieldsButton.onclick = function() {addFieldInput(updateFieldTableSelect)}
    updateFields.append(addFieldsButton)

    numFieldElements++
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


function getUpdateTable(updateTableSelect, selectedUpdateType)
{
    var selectedUpdateTableValue = document.getElementById(updateTableSelect).value

    if (selectedUpdateTableValue == "User")
    {
        addTableSelect(userTableSelect, "User", selectedUpdateType)
    }
    else if (selectedUpdateTableValue == "DietaryGoal")
    {
        addTableSelect(dietaryGoalTableSelect, "DietaryGoal", selectedUpdateType)
    }
    else if (selectedUpdateTableValue == "MealPlan")
    {
        addTableSelect(mealPlanTableSelect, "MealPlan", selectedUpdateType)
    }
    else if (selectedUpdateTableValue == "Meal")
    {
        addTableSelect(mealTableSelect, "Meal", selectedUpdateType)
    }
    else if (selectedUpdateTableValue == "NutritionalInfo")
    {
        addTableSelect(nutritionalInfoTableSelect, "NutritionalInfo", selectedUpdateType)
    }
    else if (selectedUpdateTableValue == "MealPlan_Meals")
    {
        addTableSelect(mealPlan_MealsTableSelect, "MealPlan_Meals", selectedUpdateType)
    }
    else if (selectedUpdateTableValue == "Meal_NutritionalInfo")
    {
        addTableSelect(meal_NutritionalInfoTableSelect, "Meal_NutritionalInfo", selectedUpdateType)
    }
}


function addTableSelect(updateTupleTableSelect, tableName, selectedType)
{
    if (selectedType == "tuple")
    {
        const updateTableTitle = document.createElement("h3")
        updateTableTitle.innerText = tableName
        updateTuples.append(updateTableTitle)
        addTupleInput(updateTupleTableSelect)
    }
    else if (selectedType == "field")
    {
        const updateTableTitle = document.createElement("h3")
        updateTableTitle.innerText = tableName
        updateFields.append(updateTableTitle)
        addFieldInput(updateTupleTableSelect)
    }
}





//Usefull Functions
function removeButtons(parentElement)
{
    // Select all button elements within the parent element
    const buttons = parentElement.getElementsByTagName('button');

    // Convert the HTMLCollection to an array to safely remove elements
    const buttonsArray = Array.from(buttons);

    // Loop through the array and remove each button
    buttonsArray.forEach(button => button.remove());
}