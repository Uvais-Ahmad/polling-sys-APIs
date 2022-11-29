const express = require('express');
const router = express.Router();
// this router file use to handle all file incl /api

router.get('/',function( req , res){
    return res.status(200).json({
        message : "APIs url for performing operation",
        data : {
            create_Ques : "/api/v1/questions/create",
            show_Ques : "/api/v1/options/:id",
            delete_Ques : "/api/v1/options/:id/delete",
            create_Opts : "/api/v1/options/:id/create",
            add_Vote : "/api/v1/options/:id/add-vote",
            delete_Opts : "/api/v1/options/:id/delete"
        }
    })
})

router.use('/api',require('./api'));

module.exports = router;