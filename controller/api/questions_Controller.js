const Question = require('../../model/questions');
const Option = require('../../model/options');

module.exports.index = function( req , res ){
    return res.status(200).json({
        message : 'List of all question',
        data : {
            info : "This is inform for you that this is data"
        }
    })
}


module.exports.createQuestion = async function ( req , res ) {

    let ques = await Question.create(req.body);
    console.log("Qeus is : ".ques);
    if(ques){
        return res.status(200).json({

            message : 'Question created',
            data : {
                question : ques
            }
        })
    }
    else{
        
        return res.status(500).json({
            message : 'Server Error , Question not created',
            
        })
    }

    
}