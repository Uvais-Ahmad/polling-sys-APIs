const express = require('express');
const router = express.Router();

// this router file handle all routers in v1 file
router.use('/questions',require('./questions'));

router.use('/options',require('./options'));

module.exports = router;