var mongoose = require('mongoose');

var RecipeSchema = mongoose.Schema({
  dishType: String,
  name: String,
  ingredients: [],
  directions: [],
  upvotes: Number,
  downvotes: Number
});

var MealSchema = mongoose.Schema({
  title: String,
  description: String,
  recipes: [RecipeSchema]
});

var UserSchema = mongoose.Schema({
  name: String,
  nickname: String,
  email: String,
  password: String
});

var PartySchema = mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  meals: [MealSchema],
  users: []
});

module.exports = {
  User: mongoose.model('User', UserSchema),
  Party: mongoose.model('Party', PartySchema),
  Meal: mongoose.model('Meal', MealSchema),
  Recipe: mongoose.model('Recipe', RecipeSchema)
};
