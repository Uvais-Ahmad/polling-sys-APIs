const express = require('express');
const router = express.Router();
// this router file handle all version 

router.use('/v1',require('./v1'));

module.exports = router;