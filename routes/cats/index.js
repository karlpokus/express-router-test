var express = require('express'),
    router = express.Router();

router.all('/*', (req, res) => {
  res.send(req.originalUrl);
});

module.exports = router;
