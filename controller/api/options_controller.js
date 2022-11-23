const Question = require('../../model/questions');
const Option = require('../../model/options');

module.exports.createOption = async function( req , res ){
    
    try{
        //take Question Id
        let quesId = req.params.id;
        let question = await Question.findById(quesId);

        //we receive the "content" by the client
        let option = await Option.create({
            content: req.body.content,
            quesId : quesId
        });

        //add LinkToVote
        option.link_to_vote = "http://localhost:8000/api/v1/options/"+option._id+"/add-vote";
        await option.save();

        //add this option to the current question
        await question.options.push(option);
        await question.save();

        console.log('Question ',question);
        console.log('option ',option);

        if(option){
            return res.status(200).json({
                message : "Option created",
                data : {
                    option : option
                }
            });
        }
        else{
            return res.status(500).json({
                message : "Internal Server error "
            })
        }
    }
    catch(err){
        console.log('Error while creating option ',err);
    }
}