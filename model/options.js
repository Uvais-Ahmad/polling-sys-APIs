const mongoose = require('mongoose');
const Question = require('./questions');

const optionSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    quesId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : Question
    },
    link_to_vote : String,
    votes : Number
},{
    timestamps : true
});

const Option = mongoose.model('Option',optionSchema);

module.exports = Option;