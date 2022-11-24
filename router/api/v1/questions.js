const express = require('express');
const router = express.Router();
// this router file handle all quetion related operation in v1 file
const quesCont = require('../../../controller/api/questions_Controller');


// its show a question with all options which id is given 
router.get('/:id',quesCont.show);

// it create a new question
router.post('/create',quesCont.create);

router.delete('/:id/delete',quesCont.destroy);


module.exports = router;