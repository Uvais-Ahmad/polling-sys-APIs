const express = require('express');
const router = express.Router();

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

// this router file handle all routers in v1 file
router.use('/questions',require('./questions'));

router.use('/options',require('./options'));

module.exports = router;