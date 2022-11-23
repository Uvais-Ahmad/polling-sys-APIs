const mongoose = require('mongoose');

const quesSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    options : [{
        type : mongoose.Schema.Types.ObjectId(),
        ref : 'Option'
    }],
},{
    timestamps : true
});

const Question = mongoose.model('Question',quesSchema);

module.exports = Question;