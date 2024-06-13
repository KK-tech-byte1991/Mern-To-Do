var express = require('express');
var router = express.Router();

/* GET users listing. */


/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a simple message
 *     responses:
 *       200:
 *         description: A simple message
 */

router.get('/', function(req, res, next) {
  res.send('respond with a ');
});

module.exports = router;
 