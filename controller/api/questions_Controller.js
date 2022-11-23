module.exports.index = function( req , res ){
    return res.status(200).json({
        message : 'List of all question',
        data : {
            info : "This is inform for you that this is data"
        }
    })
}


module.exports.createQuestion = function ( req , res ) {

    

    let ques = req.body;
    console.log("Req body : ",ques)
    return res.status(200).json({
        message : 'form Data received',
        data : {
            question : ques
        }
    })
}