-- PERSON 1
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('John Doe', 30, 'Male', 75.0, 180.0, 'Moderate', '["Vegan", "Low-Carb"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Weight Loss', 70.0, 1);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-17', 2000, '{"Protein": 150, "Carbs": 250, "Fat": 50}', 1);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Vegan Salad', '{"Lettuce": 50, "Tomato": 30, "Cucumber": 20}', 'Lunch');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Apple', 52, 0.3, 14, 0.2, 'Vitamin C');

-- PERSON 2
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Jane Smith', 28, 'Female', 65.0, 165.0, 'Active', '["Vegetarian"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Muscle Gain', 68.0, 2);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-18', 2200, '{"Protein": 180, "Carbs": 200, "Fat": 60}', 2);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Quinoa Salad', '{"Quinoa": 100, "Avocado": 50, "Spinach": 40}', 'Lunch');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Banana', 89, 1.1, 23, 0.3, 'Vitamin B6');

-- PERSON 3
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Sam Wilson', 35, 'Male', 80.0, 175.0, 'Sedentary', '["Low-Sugar", "Gluten-Free"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Weight Loss', 75.0, 3);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-19', 1800, '{"Protein": 120, "Carbs": 150, "Fat": 50}', 3);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Chicken Salad', '{"Chicken": 150, "Lettuce": 30, "Olives": 20}', 'Dinner');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Orange', 62, 1.2, 15, 0.2, 'Vitamin C');

-- PERSON 4
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Emily Davis', 22, 'Female', 55.0, 160.0, 'Light', '["Paleo"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Maintain', 55.0, 4);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-20', 1600, '{"Protein": 100, "Carbs": 130, "Fat": 40}', 4);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Egg Scramble', '{"Eggs": 120, "Spinach": 30, "Mushrooms": 20}', 'Breakfast');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Strawberry', 33, 0.7, 8, 0.3, 'Vitamin C');

-- PERSON 5
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Michael Brown', 40, 'Male', 90.0, 182.0, 'Active', '["Keto"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Weight Maintenance', 90.0, 5);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-21', 2500, '{"Protein": 200, "Carbs": 50, "Fat": 180}', 5);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Keto Omelette', '{"Eggs": 120, "Cheese": 50, "Butter": 30}', 'Breakfast');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Almonds', 575, 21, 22, 50, 'Vitamin E');

-- PERSON 6
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Laura Green', 32, 'Female', 68.0, 170.0, 'Moderate', '["Vegetarian", "Low-Carb"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Muscle Gain', 72.0, 6);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-22', 2100, '{"Protein": 160, "Carbs": 150, "Fat": 70}', 6);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Vegetarian Stir-Fry', '{"Tofu": 100, "Broccoli": 50, "Bell Peppers": 40}', 'Dinner');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Spinach', 23, 2.9, 3.6, 0.4, 'Vitamin K');

-- PERSON 7
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('David Carter', 45, 'Male', 85.0, 177.0, 'Active', '["Vegan", "High-Protein"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Muscle Gain', 88.0, 7);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-23', 3000, '{"Protein": 220, "Carbs": 250, "Fat": 100}', 7);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Vegan Protein Shake', '{"Almond Milk": 200, "Protein Powder": 50, "Banana": 50}', 'Snack');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Avocado', 160, 2, 9, 15, 'Vitamin K');

-- PERSON 8
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Sophia Martinez', 27, 'Female', 60.0, 162.0, 'Light', '["Gluten-Free"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Maintain', 60.0, 8);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-24', 1800, '{"Protein": 100, "Carbs": 200, "Fat": 50}', 8);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Gluten-Free Pasta', '{"Rice Pasta": 200, "Tomato Sauce": 50, "Basil": 10}', 'Dinner');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Carrot', 41, 1.0, 10, 0.2, 'Vitamin A');

-- PERSON 9
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Chris Lee', 29, 'Male', 78.0, 175.0, 'Sedentary', '["Paleo"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Weight Loss', 72.0, 9);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-25', 1900, '{"Protein": 150, "Carbs": 100, "Fat": 70}', 9);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Paleo Steak', '{"Beef": 200, "Olive Oil": 30, "Garlic": 10}', 'Dinner');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Blueberries', 57, 0.7, 14, 0.3, 'Vitamin C');

-- PERSON 10
INSERT INTO User (Name, Age, Gender, Weight, Height, ActivityLevel, DietaryPreferences)
VALUES ('Olivia Johnson', 31, 'Female', 62.0, 168.0, 'Active', '["Low-Carb", "Vegan"]');

INSERT INTO DietaryGoal (GoalType, TargetWeight, UserID)
VALUES ('Maintain', 62.0, 10);

INSERT INTO MealPlan (PlanDate, Calories, NutritionalBreakdown, UserID)
VALUES ('2024-10-26', 1700, '{"Protein": 120, "Carbs": 100, "Fat": 60}', 10);

INSERT INTO Meal (MealName, Ingredients, MealType)
VALUES ('Vegan Wrap', '{"Whole Wheat Wrap": 70, "Hummus": 30, "Cucumber": 20}', 'Lunch');

INSERT INTO NutritionalInfo (FoodItem, Calories, Protein, Carbs, Fat, Vitamins)
VALUES ('Broccoli', 55, 3.7, 11, 0.6, 'Vitamin C');
