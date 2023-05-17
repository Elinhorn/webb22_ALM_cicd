const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send([{ members: ['AW', 'JB', 'EH', 'SL'] }]);
});

module.exports = router;
