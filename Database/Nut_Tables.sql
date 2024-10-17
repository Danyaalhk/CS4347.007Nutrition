CREATE DATABASE NutritionDB;

USE NutritionDB;

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

-- DietaryGoal Table
CREATE TABLE DietaryGoal (
    GoalID INT AUTO_INCREMENT PRIMARY KEY,
    GoalType VARCHAR(50),
    TargetWeight FLOAT,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- MealPlan Table (Weak Entity)
CREATE TABLE MealPlan (
    PlanID INT AUTO_INCREMENT PRIMARY KEY,
    PlanDate DATE,
    Calories FLOAT,
    NutritionalBreakdown TEXT,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Meal Table
CREATE TABLE Meal (
    MealID INT AUTO_INCREMENT PRIMARY KEY,
    MealName VARCHAR(100),
    Ingredients TEXT,
    MealType VARCHAR(50)
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

