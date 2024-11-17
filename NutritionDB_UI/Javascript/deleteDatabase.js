
//Delete Page
const deletePage = document.getElementById("deletePage")

//Delete Form
const deleteForm = document.getElementById("deleteForm")


//Delete Type Elements
const deleteType = document.getElementById("deleteType")
const deleteDataType = document.getElementById("deleteDataType")
deleteDataType.addEventListener("change", setDeleteType)


//Delete Table Select
const deleteTableSelect = document.getElementById("deleteTableSelect")
const tableSelect = document.getElementById("tableSelect")
deleteTableSelect.remove()


function setDeleteType()
{
    var selectedDeleteType = document.getElementById("deleteDataType").value
    numFieldElements = 0
    numTupleElements = 0
    removeButtons(deleteForm)

    if (selectedDeleteType == "tuple")
    {
        deleteFields.remove()
        setDeleteTuples()
        deleteForm.append(deleteTuples)
        const submitDeleteTupleForm = document.createElement("button")
        submitDeleteTupleForm.innerText = "Delete tuple(s)"
        deleteForm.append(submitDeleteTupleForm)
    }
    else if (selectedDeleteType == "field")
    {
        deleteTuples.remove()
        setDeleteFields()
        deleteForm.append(deleteFields)
        const submitDeleteFieldForm = document.createElement("button")
        submitDeleteFieldForm.innerText = "Delete field(s)"
        deleteForm.append(submitDeleteFieldForm)
    }
    else if (selectedDeleteType == "tuple and field")
    {
        deleteTuples.remove()
        deleteFields.remove()
        setDeleteTuples()
        setDeleteFields()
        deleteForm.append(deleteTuples)
        deleteForm.append(deleteFields)
        const submitDeleteForm = document.createElement("button")
        submitDeleteForm.innerText = "Delete tuple(s) and field(s)"
        deleteForm.append(submitDeleteForm)
    }
}





//Delete Tuples Elements
const deleteTuples = document.getElementById("deleteTuples")
var numTupleElements = 0
deleteTuples.remove()

function setDeleteTuples()
{
    deleteTuples.innerHTML = ''

    const deleteTuplesTitle = document.createElement("h3")
    deleteTuplesTitle.innerText = "Delete tuple(s)"
    deleteTuples.append(deleteTuplesTitle)

    const deleteTuplesSelectLabel = document.createElement("label")
    deleteTuplesSelectLabel.for = "tableSelect"
    deleteTuplesSelectLabel.innerText = "What Table?"
    deleteTuples.append(deleteTuplesSelectLabel)

    const deleteTableSelectTuples = tableSelect.cloneNode(true)
    deleteTableSelectTuples.id = "deleteTuplesTableSelect"
    deleteTableSelectTuples.addEventListener("change", () => { getDeleteTableField("deleteTuplesTableSelect", "tuple") })
    deleteTuples.append(deleteTableSelectTuples)

    const deleteTupleData = document.createElement("div")
    deleteTupleData.id = "deleteTupleData"
    deleteTuples.append(deleteTupleData)
}

function addTupleInput(deleteTupleTableSelect)
{
    removeButtons(deleteTuples)

    const deleteTuplesTitle = document.createElement("h4")
    deleteTuplesTitle.innerText = "Delete Tuple " + (numTupleElements + 1)
    deleteTuples.append(deleteTuplesTitle)

    const deleteTupleFieldNameLabel = document.createElement("label")
    deleteTupleFieldNameLabel.innerText = "Delete Tuple " + (numTupleElements + 1) + " Field Name:"
    deleteTuples.append(deleteTupleFieldNameLabel)

    const newTableSelect = deleteTupleTableSelect.cloneNode(true)
    newTableSelect.id = "deleteTupleSelect" + numTupleElements
    newTableSelect.name = "deleteTupleSelect" + numTupleElements
    deleteTuples.append(newTableSelect)

    const deleteTupleDataLabel = document.createElement("label")
    deleteTupleDataLabel.innerText = "Delete Tuple " + (numTupleElements + 1) + " Data:"
    deleteTuples.append(deleteTupleDataLabel)

    const deleteTupleDataInput = document.createElement("input")
    deleteTupleDataInput.type = "text"
    deleteTupleDataInput.id = "deleteTupleData" + numTupleElements
    deleteTupleDataInput.name = "deleteTupleData" + numTupleElements
    deleteTuples.append(deleteTupleDataInput)

    const addTupleButton = document.createElement("button")
    addTupleButton.innerText = "Add Delete Tuple"
    addTupleButton.onclick = function() {addTupleInput(deleteTupleTableSelect)}
    deleteTuples.append(addTupleButton)

    numTupleElements++
}





//Delete Fields Elements
const deleteFields = document.getElementById("deleteFields")
var numFieldElements = 0
deleteFields.remove()

function setDeleteFields()
{
    deleteFields.innerHTML = ''

    const deleteFieldTitle = document.createElement("h3")
    deleteFieldTitle.innerText = "Delete field(s)"
    deleteFields.append(deleteFieldTitle)

    const deleteFieldSelectLabel = document.createElement("label")
    deleteFieldSelectLabel.for = "tableSelect"
    deleteFieldSelectLabel.innerText = "What Table?"
    deleteFields.append(deleteFieldSelectLabel)

    const deleteTableSelectFields = tableSelect.cloneNode(true)
    deleteTableSelectFields.id = "deleteFieldsTableSelect"
    deleteTableSelectFields.addEventListener("change", () => { getDeleteTableField("deleteFieldsTableSelect", "field") })
    deleteFields.append(deleteTableSelectFields)

    const deleteFieldData = document.createElement("div")
    deleteFieldData.id = "deleteFieldData"
    deleteFields.append(deleteFieldData)
}

function addFieldInput(deleteFieldTableSelect)
{
    removeButtons(deleteFields)

    const deleteFieldsTitle = document.createElement("h4")
    deleteFieldsTitle.innerText = "Delete Field " + (numFieldElements + 1)
    deleteFields.append(deleteFieldsTitle)

    const oldFieldNameLabel = document.createElement("label")
    oldFieldNameLabel.innerText = "Delete Field " + (numFieldElements + 1) + " Name:"
    deleteFields.append(oldFieldNameLabel)

    const newTableSelect = deleteFieldTableSelect.cloneNode(true)
    newTableSelect.id = "deleteFieldSelect" + numFieldElements
    newTableSelect.name = "deleteFieldSelect" + numFieldElements
    deleteFields.append(newTableSelect)

    const addFieldButton = document.createElement("button")
    addFieldButton.innerText = "Add Delete Field"
    addFieldButton.onclick = function() {addFieldInput(deleteFieldTableSelect)}
    deleteFields.append(addFieldButton)

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



function getDeleteTableField(deleteTableSelect, selectedDeleteType)
{
    var selectedDeleteTableValue = document.getElementById(deleteTableSelect).value

    if (selectedDeleteTableValue == "User")
    {
        addTableSelect(userTableSelect, "User", selectedDeleteType)
    }
    else if (selectedDeleteTableValue == "DietaryGoal")
    {
        addTableSelect(dietaryGoalTableSelect, "DietaryGoal", selectedDeleteType)
    }
    else if (selectedDeleteTableValue == "MealPlan")
    {
        addTableSelect(mealPlanTableSelect, "MealPlan", selectedDeleteType)
    }
    else if (selectedDeleteTableValue == "Meal")
    {
        addTableSelect(mealTableSelect, "Meal", selectedDeleteType)
    }
    else if (selectedDeleteTableValue == "NutritionalInfo")
    {
        addTableSelect(nutritionalInfoTableSelect, "NutritionalInfo", selectedDeleteType)
    }
    else if (selectedDeleteTableValue == "MealPlan_Meals")
    {
        addTableSelect(mealPlan_MealsTableSelect, "MealPlan_Meals", selectedDeleteType)
    }
    else if (selectedDeleteTableValue == "Meal_NutritionalInfo")
    {
        addTableSelect(meal_NutritionalInfoTableSelect, "Meal_NutritionalInfo", selectedDeleteType)
    }
}

function addTableSelect(deleteTupleTableSelect, tableName, selectedType)
{
    if (selectedType == "tuple")
    {
        const deleteTableTitle = document.createElement("h3")
        deleteTableTitle.innerText = tableName
        deleteTuples.append(deleteTableTitle)
        addTupleInput(deleteTupleTableSelect)
    }
    else if (selectedType == "field")
    {
        const deleteTableTitle = document.createElement("h3")
        deleteTableTitle.innerText = tableName
        deleteFields.append(deleteTableTitle)
        addFieldInput(deleteTupleTableSelect)
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