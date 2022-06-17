const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');



const plantSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    isPaid: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

plantSchema.statics.getCart = async function(userId) {
    return this.findOneAndUpdate(
    { user: userId, isPaid: false},
    { user: userId},
    { upsert: true, new: true }
    );
};


module.exports = mongoose.model('Plant', plantSchema);