const moogoose = require("mongoose");

//Define a schema
const Schema = moogoose.Schema;

//Define author schema
const AuthorSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
  },
  country: {
    type: String,
    required: false,
  },
  books: {
    type: Array,
    default: [],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdateAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = moogoose.model("authors", AuthorSchema); //collection name is Authors. This is the name of the collection in the database
