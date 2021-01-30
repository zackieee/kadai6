const express = require('express');
const router = express.Router();

/* POST home page. */
router.post('/', function (req, res, next) {
  res.send({
    result: 'POST処理が正常に終了しました',
    host: `${req.headers.host}`,
  });
})

/* PUT home page. */
router.put('/', function (req, res, next) {
  console.log(req);
  res.send({
    result: 'PUT処理が正常に終了しました',
    host: `${req.headers.host}`,
  });
})

module.exports = router;
