const Recipe = require("../models/recipe.model");

const getAllRecipes = async (category) => {
  const filter = {};

  if (category) {
    filter.category = category.toLowerCase();
  }

  return await Recipe.find(filter).sort({ createdAt: -1 });
};

const createRecipe = async (recipeData) => {
  if (recipeData.cookingTime <= 0) {
    const error = new Error("Cooking time must be a positive number");
    error.statusCode = 400;
    throw error;
  }

  return await Recipe.create(recipeData);
};

const getRecipeById = async (id) => {
  const recipe = await Recipe.findById(id);

  if (!recipe) {
    const error = new Error("Recipe not found");
    error.statusCode = 404;
    throw error;
  }

  return recipe;
};

const updateRecipe = async (id, updateData) => {
  if (updateData.cookingTime !== undefined && updateData.cookingTime <= 0) {
    const error = new Error("Cooking time must be a positive number");
    error.statusCode = 400;
    throw error;
  }

  const recipe = await Recipe.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });

  if (!recipe) {
    const error = new Error("Recipe not found");
    error.statusCode = 404;
    throw error;
  }

  return recipe;
};

const deleteRecipe = async (id) => {
  const recipe = await Recipe.findByIdAndDelete(id);

  if (!recipe) {
    const error = new Error("Recipe not found");
    error.statusCode = 404;
    throw error;
  }

  return recipe;
};

module.exports = {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe
};