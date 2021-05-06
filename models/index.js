const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/jump-to-recipe";
// const connectionString = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}

mongoose.connect(connectionString, options)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

module.exports = {
  User: require("./User"),
  Recipe: require("./Recipe"),
}