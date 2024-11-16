-- PERSON 1
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('John Doe', 30, 'Male', 75.0, 180.0, 'Moderate', '["Vegan", "Low-Carb"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Weight Loss', 70.0, '2024-10-01', '2025-01-01', 1);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-17', 2000, 3, 1);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Vegan Salad', 'Lunch', 10, 4);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Apple', 52, 0.3, 14, 0.2, 'Vitamin C');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (1, 1);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (1, 1, 100);

-- PERSON 2
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Jane Smith', 28, 'Female', 65.0, 165.0, 'Active', '["Vegetarian"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Muscle Gain', 68.0, '2024-10-01', '2025-01-01', 2);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-18', 2200, 3, 2);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Quinoa Salad', 'Lunch', 15, 5);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Banana', 89, 1.1, 23, 0.3, 'Vitamin B6');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (2, 2);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (2, 2, 100);

-- PERSON 3
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Sam Wilson', 35, 'Male', 80.0, 175.0, 'Sedentary', '["Low-Sugar", "Gluten-Free"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Weight Loss', 75.0, '2024-10-01', '2025-01-01', 3);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-19', 1800, 3, 3);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Chicken Salad', 'Dinner', 20, 4);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Orange', 62, 1.2, 15, 0.2, 'Vitamin C');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (3, 3);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (3, 3, 150);

-- PERSON 4
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Emily Davis', 22, 'Female', 55.0, 160.0, 'Light', '["Paleo"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Maintain', 55.0, '2024-10-01', '2025-01-01', 4);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-20', 1600, 2, 4);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Egg Scramble', 'Breakfast', 10, 4);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Strawberry', 33, 0.7, 8, 0.3, 'Vitamin C');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (4, 4);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (4, 4, 120);

-- PERSON 5
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Michael Brown', 40, 'Male', 90.0, 182.0, 'Active', '["Keto"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Weight Maintenance', 90.0, '2024-10-01', '2025-01-01', 5);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-21', 2500, 3, 5);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Keto Omelette', 'Breakfast', 15, 5);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Almonds', 575, 21, 22, 50, 'Vitamin E');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (5, 5);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (5, 5, 100);

-- PERSON 6
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Laura Green', 32, 'Female', 68.0, 170.0, 'Moderate', '["Vegetarian", "Low-Carb"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Muscle Gain', 72.0, '2024-10-01', '2025-01-01', 6);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-22', 2100, 3, 6);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Vegetarian Stir-Fry', 'Dinner', 20, 4);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Spinach', 23, 2.9, 3.6, 0.4, 'Vitamin K');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (6, 6);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (6, 6, 100);

-- PERSON 7
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('David Carter', 45, 'Male', 85.0, 177.0, 'Active', '["Vegan", "High-Protein"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Muscle Gain', 88.0, '2024-10-01', '2025-01-01', 7);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-23', 3000, 3, 7);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Vegan Protein Shake', 'Snack', 5, 5);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Avocado', 160, 2, 9, 15, 'Vitamin K');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (7, 7);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (7, 7, 100);

-- PERSON 8
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Sophia Martinez', 27, 'Female', 60.0, 162.0, 'Light', '["Gluten-Free"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Maintain', 60.0, '2024-10-01', '2025-01-01', 8);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-24', 1800, 3, 8);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Gluten-Free Pasta', 'Dinner', 25, 4);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Carrot', 41, 1.0, 10, 0.2, 'Vitamin A');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (8, 8);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (8, 8, 100);

-- PERSON 9
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Chris Lee', 29, 'Male', 78.0, 175.0, 'Sedentary', '["Paleo"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Weight Loss', 72.0, '2024-10-01', '2025-01-01', 9);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-25', 1900, 2, 9);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Paleo Steak', 'Dinner', 30, 4);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Blueberries', 57, 0.7, 14, 0.3, 'Vitamin C');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (9, 9);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (9, 9, 100);

-- PERSON 10
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Olivia Johnson', 31, 'Female', 62.0, 168.0, 'Active', '["Low-Carb", "Vegan"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, StartDate, EndDate, UserID)
VALUES ('Maintain', 62.0, '2024-10-01', '2025-01-01', 10);

INSERT INTO MealPlan (PlanDate, TotalCalories, MealCount, UserID)
VALUES ('2024-10-26', 1700, 3, 10);

INSERT INTO Meal (MealName, MealType, PrepTime, Rating)
VALUES ('Vegan Wrap', 'Lunch', 10, 5);

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Broccoli', 55, 3.7, 11, 0.6, 'Vitamin C');

INSERT INTO MealPlan_Meals (PlanID, MealID) VALUES (10, 10);
INSERT INTO Meal_NutritionalInfo (MealID, NutrientID, Quantity) VALUES (10, 10, 100);
