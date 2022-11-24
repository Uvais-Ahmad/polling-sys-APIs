const Question = require('../../model/questions');
const Option = require('../../model/options');

module.exports.show = async function( req , res ){

    try{
        let quesId = req.params.id;
        // question with allpopuulated options
        let question = await Question.findById(quesId).populate('options');

        if(question){
            return res.status(200).json({
                message : 'Question found',
                data : {
                    question : question
                }
            });
        }
        else{
            return res.status(404).json({
                message : 'Not Found',
            })
        }
    }
    catch(err){
        console.log('Error showing question ',err);
    }
}

// it create a question take only single value "content" in request
module.exports.create = async function ( req , res ) {

    try{
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
    catch(err)  {
        console.log('Error in creating question ',err);
    }
}


module.exports.destroy = async function( req , res ){
    
    let quesId = req.params.id;

    let question = await Question.findById(quesId).populate('options');

    if(question){
        // check that all optio n have zero vote if yes we can delete a question
        let options = question.options;
        for( option of options ){
            // check each option should have zero vote 
            if(option.votes !== 0 ){
                // i.e. option have more than 0 vote
                return res.status(200).json({
                    message : "Question can't be deleted , its any one option have some votes"
                })
            }
        }
        await question.remove();
        // And delete all option associated with Question
        await Option.deleteMany({quesId : quesId });
        return res.status(200).json({
            message : "Question with all associated option deleted",
            question
        })
    }
    else{
        return res.status(404).json({
            message : "Question Not found"
        })
    }

}