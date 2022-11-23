const express = require('express');
const router = express.Router();
// this router file handle all quetion related operation in v1 file
const quesCont = require('../../../controller/api/questions_Controller');


// its show all question which exist already
router.get('/',quesCont.index);



module.exports = router;