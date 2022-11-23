const express = require('express');
const router = express.Router();
// this router file handle all options related operation in v1 file

const optionCont = require('../../../controller/api/options_controller');

// It create a option and add this inside the question which QuesId is given 
router.post('/:id/create',optionCont.createOption)



module.exports = router;