CREATE VIEW UserMealPlanSummary AS
SELECT
    u.UserID,
    u.Name,
    u.Age,
    u.Gender,
    u.ActivityLevel,
    u.DietaryPreferences,
    dg.GoalType,
    dg.TargetWeight,
    mp.PlanDate,
    mp.TotalCalories,
    m.MealName,
    m.MealType,
    n.FoodItem,
    n.Calories,
    n.Protein,
    n.Carbs,
    n.Fat,
    n.Vitamins
FROM User u
JOIN DietaryGoal dg ON u.UserID = dg.UserID
JOIN MealPlan mp ON u.UserID = mp.UserID
JOIN MealPlan_Meals mpm ON mp.PlanID = mpm.PlanID
JOIN Meal m ON mpm.MealID = m.MealID
JOIN Meal_NutritionalInfo mn ON m.MealID = mn.MealID
JOIN NutritionalInfo n ON mn.NutrientID = n.NutrientID;
