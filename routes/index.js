const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('set-cookie', [
    'name=get',
  ]);
  res.render('index', {
    title: 'Express',
    host: req.headers.host,
  });
});

/* POST home page. */
router.post('/', function (req, res, next) {
  res.setHeader('set-cookie', [
    'name=post',
  ]);
  res.send({
    result: 'POST処理が正常に終了しました',
    host: `${req.headers.host}`,
  });
})

/* PUT home page. */
router.put('/', function (req, res, next) {
  console.log(req);
  res.setHeader('set-cookie', [
    'name=put',
  ]);
  res.send({
    result: 'PUT処理が正常に終了しました',
    host: `${req.headers.host}`,
  });
})

module.exports = router;
