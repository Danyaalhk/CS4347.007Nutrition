-- QUERY: List all users who are older than 30
SELECT Name, Age, Gender, ActivityLevel
FROM User
WHERE Age > 30;

-- QUERY: List all meal plans that have over 2000 calories
SELECT PlanID, PlanDate, TotalCalories, MealCount, UserID
FROM MealPlan
WHERE TotalCalories > 2000;

-- Adding a new user 'Anna Taylor'
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Anna Taylor', 34, 'Female', 70.0, 172.0,
        'Moderate', '["Gluten-Free", "Vegan"]');

-- Adding a dietary goal for 'Anna Taylor' (assuming her UserID is retrieved or is AUTO_INCREMENTED as 11)
INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Weight Loss', 65.0, '2024-12-01', '2025-06-01', 11);

-- UPDATE: Modify dietary preferences for an existing user (Michael Brown with UserID = 5)
UPDATE User
SET DietaryPreferences = '["Keto", "Gluten-Free"]'
WHERE UserID = 5;

-- QUERY: View all meals with their nutritional information for meals that are lunch
SELECT Meal.MealName, NutritionalInfo.FoodItem, NutritionalInfo.Calories, NutritionalInfo.Protein,
       NutritionalInfo.Carbs, NutritionalInfo.Fat, NutritionalInfo.Vitamins
FROM Meal
JOIN Meal_NutritionalInfo ON Meal.MealID = Meal_NutritionalInfo.MealID
JOIN NutritionalInfo ON Meal_NutritionalInfo.NutrientID = NutritionalInfo.NutrientID
WHERE Meal.MealType = 'Lunch';

-- QUERY: List all dietary goals and their corresponding users
SELECT DietaryGoal.GoalID, DietaryGoal.GoalType, DietaryGoal.TargetWeight, User.Name
FROM DietaryGoal
JOIN User ON DietaryGoal.UserID = User.UserID;

-- INSERT: Add a new meal and its nutritional info
-- Adding a new meal 'Tofu Stir-Fry'
INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Tofu Stir-Fry', 'Dinner', 25, 5);

-- Adding nutritional information for 'Tofu Stir-Fry'
INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Tofu Stir-Fry', 400, 20, 50, 15, 'Vitamin B12');

-- DELETE: Remove a specific food item from NutritionalInfo
DELETE FROM NutritionalInfo
WHERE FoodItem = 'Tofu Stir-Fry';

-- UPDATE: Change the goal type of a dietary goal (for UserID = 6)
UPDATE DietaryGoal
SET GoalType = 'Maintain Weight'
WHERE UserID = 6;



