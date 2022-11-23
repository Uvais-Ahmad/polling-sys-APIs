module.exports.index = function( req , res ){
    return res.status(200).json({
        message : 'List of all question',
        data : {
            info : "This is inform for you that this is data"
        }
    })
}