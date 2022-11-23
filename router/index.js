const express = require('express');
const router = express.Router();
// this router file use to handle all file incl /api

router.use('/api',require('./api'));

module.exports = router;