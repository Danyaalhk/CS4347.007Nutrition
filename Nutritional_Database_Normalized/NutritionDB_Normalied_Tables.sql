-- Drop the existing database if you want to recreate it
DROP DATABASE IF EXISTS NutritionDB_Normalized;

-- Create the database and use it
CREATE DATABASE NutritionDB_Normalized;
USE NutritionDB_Normalized;

-- User Table
CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    Gender VARCHAR(10),
    Weight FLOAT,
    Height FLOAT,
    ActivityLevel VARCHAR(50),
    DietaryPreferences TEXT
);

-- DietaryGoal Table (linked to User)
CREATE TABLE DietaryGoal (
    GoalID INT AUTO_INCREMENT PRIMARY KEY,
    GoalType VARCHAR(50),
    TargetWeight FLOAT,
    StartDate DATE,
    EndDate DATE,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- MealPlan Table (linked to User)
CREATE TABLE MealPlan (
    PlanID INT AUTO_INCREMENT PRIMARY KEY,
    PlanDate DATE,
    TotalCalories FLOAT,
    MealCount INT,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Meal Table
CREATE TABLE Meal (
    MealID INT AUTO_INCREMENT PRIMARY KEY,
    MealName VARCHAR(100),
    MealType VARCHAR(50),
    PrepTime INT,
    Rating INT
);

-- NutritionalInfo Table
CREATE TABLE NutritionalInfo (
    NutrientID INT AUTO_INCREMENT PRIMARY KEY,
    FoodItem VARCHAR(100),
    Calories FLOAT,
    Protein FLOAT,
    Carbs FLOAT,
    Fat FLOAT,
    Vitamins VARCHAR(255)
);

-- MealPlan_Meals Table (linking MealPlan and Meal)
CREATE TABLE MealPlan_Meals (
    PlanID INT,
    MealID INT,
    PRIMARY KEY (PlanID, MealID),
    FOREIGN KEY (PlanID) REFERENCES MealPlan(PlanID),
    FOREIGN KEY (MealID) REFERENCES Meal(MealID)
);

-- Meal_NutritionalInfo Table (linking Meal and NutritionalInfo)
CREATE TABLE Meal_NutritionalInfo (
    MealID INT,
    NutrientID INT,
    Quantity FLOAT, -- Quantity of the nutrient in the meal
    PRIMARY KEY (MealID, NutrientID),
    FOREIGN KEY (MealID) REFERENCES Meal(MealID),
    FOREIGN KEY (NutrientID) REFERENCES NutritionalInfo(NutrientID)
);
