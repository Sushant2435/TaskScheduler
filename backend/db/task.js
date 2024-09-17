const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    scheduletime: String,
    taskcategory: String,
});
module.exports = mongoose.model('task', taskSchema)

