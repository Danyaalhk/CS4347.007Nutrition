//Insert Page
const insertPage = document.getElementById("insertPage")

//Insert Form
const insertForm = document.getElementById("insertForm")

//Insert Type Elements
const insertType = document.getElementById("insertType")
const insertDataType = document.getElementById("insertDataType")
insertDataType.addEventListener("change", setInsertType)

//InsertTableSelect
const insertTableSelect = document.getElementById("insertTableSelect")
const tableSelect = document.getElementById("tableSelect")
insertTableSelect.remove()

function setInsertType()
{
    var selectedInsertType = document.getElementById("insertDataType").value
    numTupleElemets = 0
    numFieldElemets = 0
    removeButtons(insertForm)

    if (selectedInsertType == "tuple")
    {
        insertFields.remove()
        setInsertTuples("tuple")
        insertForm.append(insertTuples)
        const submitInsertTupleForm = document.createElement("button")
        submitInsertTupleForm.innerText = "Insert tuple(s)"
        insertForm.append(submitInsertTupleForm)
    }
    else if (selectedInsertType == "field")
    {
        insertTuples.remove()
        setInsertFields("field")
        insertForm.append(insertFields)
        const submitInsertFieldForm = document.createElement("button")
        submitInsertFieldForm.innerText = "Insert field(s)"
        insertForm.append(submitInsertFieldForm)
    }
    else if (selectedInsertType == "tuple and field")
    {
        insertTuples.remove()
        insertFields.remove()
        setInsertTuples("tuple")
        setInsertFields("field")
        insertForm.append(insertTuples)
        insertForm.append(insertFields)
        const submitInsertFieldForm = document.createElement("button")
        submitInsertFieldForm.innerText = "Insert tuple(s) and field(s)"
        insertForm.append(submitInsertFieldForm)
    }
}





//Insert Tuples Elements
const insertTuples = document.getElementById("insertTuples")
var numTupleElemets = 0
insertTuples.remove()

function setInsertTuples(insertType)
{
    insertTuples.innerHTML = ''

    const insertTuplesTitle = document.createElement("h3")
    insertTuplesTitle.innerText = "Insert tuple(s)"
    insertTuples.append(insertTuplesTitle)

    const insertTuplesSelectLabel = document.createElement("label")
    insertTuplesSelectLabel.for = "tableSelectTuple"
    insertTuplesSelectLabel.innerText = "What Table?"
    insertTuples.append(insertTuplesSelectLabel)

    const insertTableSelectTuples = tableSelect.cloneNode(true)
    insertTableSelectTuples.id = "insertTuplesTableSelect"
    insertTableSelectTuples.name = "tableSelect"
    insertTableSelectTuples.addEventListener("change", () => { getInsertTableField("insertTuplesTableSelect", insertType) })
    insertTuples.append(insertTableSelectTuples)
}

function addTupleInput(insertTupleTableSelect)
{
    removeButtons(insertTuples)

    const newTupleTitle = document.createElement("h4")
    newTupleTitle.innerText = "Insert Tuple " + (numTupleElemets + 1)
    insertTuples.append(newTupleTitle)

    const newTableSelectLabel = document.createElement("label")
    newTableSelectLabel.for = "insertTuplesSelect" + numTupleElemets
    newTableSelectLabel.innerText = "New Tuple " + (numTupleElemets + 1) + " Field Name:"
    insertTuples.append(newTableSelectLabel)

    const newTableSelect = insertTupleTableSelect.cloneNode(true)
    newTableSelect.id = "insertTuplesSelect" + numTupleElemets
    newTableSelect.name = "insertTuplesSelect" + numTupleElemets
    insertTuples.append(newTableSelect)

    const tupleInputLabel = document.createElement("label")
    tupleInputLabel.for = "insertTuplesInput" + numTupleElemets
    tupleInputLabel.innerText = "New Tuple " + (numTupleElemets + 1) + " Data:"
    insertTuples.append(tupleInputLabel)

    const tupleInput = document.createElement("input")
    tupleInput.type = "text"
    tupleInput.id = "insertTuplesInput" + numTupleElemets
    tupleInput.name =  "insertTuplesInput" + numTupleElemets++
    insertTuples.append(tupleInput)

    const addTuplesButton = document.createElement("button")
    addTuplesButton.innerText = "Add Insert Tuples"
    addTuplesButton.onclick = function() {addTupleInput(insertTupleTableSelect)}
    insertTuples.append(addTuplesButton)
}





//Insert Fields Elements
const insertFields = document.getElementById("insertFields")
var numFieldElemets = 0
insertFields.remove()

function setInsertFields(insertType)
{
    insertFields.innerHTML = ''

    const insertFieldsTitle = document.createElement("h3")
    insertFieldsTitle.innerText = "Insert fields(s)"
    insertFields.append(insertFieldsTitle)

    const insertFieldsSelectLabel = document.createElement("label")
    insertFieldsSelectLabel.for = "tableSelectField"
    insertFieldsSelectLabel.innerText = "What Table?"
    insertFields.append(insertFieldsSelectLabel)

    const insertTableSelectFields = tableSelect.cloneNode(true)
    insertTableSelectFields.id = "insertFieldsTableSelect"
    insertTableSelectFields.name = "tableSelect"
    insertTableSelectFields.addEventListener("change", () => { getInsertTableField("insertFieldsTableSelect", insertType) })
    insertFields.append(insertTableSelectFields)
}

function addFieldInput(insertFieldTableSelect)
{
    removeButtons(insertFields)

    const newFieldTitle = document.createElement("h4")
    newFieldTitle.innerText = "Insert Field " + (numFieldElemets + 1)
    insertFields.append(newFieldTitle)

    const newFieldNameLabel = document.createElement("label")
    newFieldNameLabel.for = "insertFieldName" + numFieldElemets
    newFieldNameLabel.innerText = "New Field " + (numFieldElemets + 1) + " Name:"
    insertFields.append(newFieldNameLabel)

    const newFieldNameInput = document.createElement("input")
    newFieldNameInput.type = "text"
    newFieldNameInput.id = "insertFieldNameInput" + numFieldElemets
    newFieldNameInput.name = "insertFieldNameInput" + numFieldElemets
    insertFields.append(newFieldNameInput)

    const newFieldDataTypeLabel = document.createElement("label")
    newFieldDataTypeLabel.for = "insertFieldDataType" + numFieldElemets
    newFieldDataTypeLabel.innerText = "New Field " + (numFieldElemets + 1) + " Data Type:"
    insertFields.append(newFieldDataTypeLabel)

    const newFieldDataTypeInput = document.createElement("input")
    newFieldDataTypeInput.type = "text"
    newFieldDataTypeInput.id = "insertFieldDataType" + numFieldElemets
    newFieldDataTypeInput.name = "insertFieldDataType" + numFieldElemets
    insertFields.append(newFieldDataTypeInput)

    const newFieldAfterFieldLabel = document.createElement("label")
    newFieldAfterFieldLabel.for = "insertFieldAfterField" + numFieldElemets
    newFieldAfterFieldLabel.innerText = "Insert New Field " + (numFieldElemets + 1) + " After What Field?"
    insertFields.append(newFieldAfterFieldLabel)

    const insertAfterFieldSelect = insertFieldTableSelect.cloneNode(true)
    insertAfterFieldSelect.id = "insertAfterFieldSelect" + numFieldElemets
    insertAfterFieldSelect.name = "insertAfterFieldSelect" + numFieldElemets
    insertFields.append(insertAfterFieldSelect)

    const addFieldsButton = document.createElement("button")
    addFieldsButton.innerText = "Add Insert Fields"
    addFieldsButton.onclick = function() {addFieldInput(insertFieldTableSelect)}
    insertFields.append(addFieldsButton)

    numFieldElemets++
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



function getInsertTableField(insertTableSelect, selectedInsertType)
{
    var selectedInsertTableValue = document.getElementById(insertTableSelect).value

    if (selectedInsertTableValue == "User")
    {
        addTableSelect(userTableSelect, "User", selectedInsertType)
    }
    else if (selectedInsertTableValue == "DietaryGoal")
    {
        addTableSelect(dietaryGoalTableSelect, "DietaryGoal", selectedInsertType)
    }
    else if (selectedInsertTableValue == "MealPlan")
    {
        addTableSelect(mealPlanTableSelect, "MealPlan", selectedInsertType)
    }
    else if (selectedInsertTableValue == "Meal")
    {
        addTableSelect(mealTableSelect, "Meal", selectedInsertType)
    }
    else if (selectedInsertTableValue == "NutritionalInfo")
    {
        addTableSelect(nutritionalInfoTableSelect, "NutritionalInfo", selectedInsertType)
    }
    else if (selectedInsertTableValue == "MealPlan_Meals")
    {
        addTableSelect(mealPlan_MealsTableSelect, "MealPlan_Meals", selectedInsertType)
    }
    else if (selectedInsertTableValue == "Meal_NutritionalInfo")
    {
        addTableSelect(meal_NutritionalInfoTableSelect, "Meal_NutritionalInfo", selectedInsertType)
    }
}

function addTableSelect(insertTupleTableSelect, tableName, selectedType)
{
    if (selectedType == "tuple")
    {
        const insertTableTitle = document.createElement("h3")
        insertTableTitle.innerText = tableName
        insertTuples.append(insertTableTitle)
        addTupleInput(insertTupleTableSelect)
    }
    else if (selectedType == "field")
    {
        const insertTableTitle = document.createElement("h3")
        insertTableTitle.innerText = tableName
        insertFields.append(insertTableTitle)
        addFieldInput(insertTupleTableSelect)
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