

//Nutrition Page
const nutritionDB = document.getElementById("nutritionDB")

//Menu Element
const selectMenu = document.getElementById("selectMenu")

//Closed Connection
const closeConnection = document.getElementById("closeConnection")
closeConnection.remove()

function closeDB()
{
    selectMenu.remove()
    nutritionDB.append(closeConnection)
}