const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Recipe title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"]
    },

    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: "At least one ingredient is required"
      }
    },

    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      trim: true
    },

    cookingTime: {
      type: Number,
      required: [true, "Cooking time is required"],
      min: [1, "Cooking time must be at least 1 minute"]
    },

    difficulty: {
      type: String,
      required: [true, "Difficulty is required"],
      enum: ["easy", "medium", "hard"],
      lowercase: true,
      trim: true
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      lowercase: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);

recipeSchema.index({ title: "text", category: 1 });

module.exports = mongoose.model("Recipe", recipeSchema);