const mongoose = require("mongoose");
const schema = mongoose.Schema;

const user = new schema({
  name: { type: String, required: true },
  age: { type: Number, required:true },
  phone:{type :Number, required:true}
});

module.exports = User = mongoose.model("user", user);