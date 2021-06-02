const express = require("express");

const router = express.Router();

const recipeController = require("./controller/recipeController");

router.get("/", function (req, res, next) {
  res.json({ test: true });
});

router.get("/get-all-recipes", function (req, res) {
  recipeController.getAllRecipe(function (err, payload) {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});

router.post("/create-recipe", function (req, res) {
  recipeController.createRecipe(req.body, function (err, payload) {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});
module.exports = router;
