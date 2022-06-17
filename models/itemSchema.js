const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  photo: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  info: String,
}, {
  timestamps: true
});

module.exports = itemSchema;
