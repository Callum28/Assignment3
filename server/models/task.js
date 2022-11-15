let mongoose = require('mongoose');
//create a task model
let taskModel = mongoose.Schema({
    title:String,
    description:String,
    due:String,
    },
    {
        collection:"tasks"
    }
);
module.exports = mongoose.model('task', taskModel);

