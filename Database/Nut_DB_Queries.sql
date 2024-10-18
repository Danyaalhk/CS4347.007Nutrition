-- QUERY: List all users who are older than 30
SELECT Name, Age, Gender, ActivityLevel
FROM user
WHERE Age > 30;

-- QUERY: List all meal plans that have over 2000 calories
SELECT PlanID, PlanDate, Calories, NutritionalBreakdown, UserID
FROM MealPlan
WHERE Calories > 2000;

-- INSERT: Add a new user and corresponding dietary goal
-- Adding a new user 'Anna Taylor'
INSERT INTO user (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Anna Taylor', 34, 'Female', 70.0, 172.0, 'Moderate', '["Gluten-Free", "Vegan"]');

-- Adding a dietary goal for 'Anna Taylor' (assuming her UserID is 11)
INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Weight Loss', 65.0, 11);

-- DELETE: Remove a meal plan for a specific user (Chris Lee with UserID = 9)
DELETE FROM MealPlan
WHERE UserID = 9;

-- UPDATE: Modify dietary preferences for an existing user (Michael Brown with UserID = 5)
UPDATE user
SET DietaryPreferences = '["Keto", "Gluten-Free"]'
WHERE UserID = 5;

-- QUERY: View all meals with their nutritional information for meals that are lunch
SELECT Meal.MealName, NutritionalInfo.FoodItem, NutritionalInfo.Calories, NutritionalInfo.Protein, NutritionalInfo.Carbs, NutritionalInfo.Fat, NutritionalInfo.Vitamins
FROM Meal
JOIN NutritionalInfo ON Meal.MealName = NutritionalInfo.FoodItem
WHERE Meal.MealType = 'Lunch';

-- QUERY: List all dietary goals and their corresponding users
SELECT DietaryGoal.GoalID, DietaryGoal.GoalType, DietaryGoal.TargetWeight, user.Name
FROM DietaryGoal
JOIN user ON DietaryGoal.UserID = user.UserID;

-- INSERT: Add a new meal and its nutritional info
-- Adding a new meal 'Tofu Stir-Fry'
INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Tofu Stir-Fry', '{"Tofu": 100, "Vegetables": 150, "Soy Sauce": 20}', 'Dinner');

-- Adding nutritional information for 'Tofu Stir-Fry'
INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Tofu Stir-Fry', 400, 20, 50, 15, 'Vitamin B12');

-- DELETE: Remove a specific food item from NutritionalInfo
DELETE FROM NutritionalInfo
WHERE FoodItem = 'Tofu Stir-Fry';  -- Replace with the actual food item you want to delete

-- UPDATE: Change the goal type of a dietary goal (for UserID = 6)
UPDATE DietaryGoal
SET GoalType = 'Maintain Weight'
WHERE UserID = 6;
