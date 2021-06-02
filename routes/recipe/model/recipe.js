const mongoose = require("mongoose");

// model
const recipeSchema = new mongoose.Schema({
  // key
  recipeName: {
    type: String,
  },
});

module.exports = mongoose.model("recipe", recipeSchema);
