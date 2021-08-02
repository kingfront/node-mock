var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('路由地址不存在');
});
// 登录接口
router.post('/dev/wxLogin', function (req, res, next) {
  res.json({
    ret: 200,
    message: 'SUCCESS',
    data: {
      phone: '15999999999',
      openId: 'o5sPAwJrLBtBO9SgLeL-bqkQf38E',
      nickName: '明亮辰星',
      userId: '6d95894c-cef0-4192-bc07-8a18a88379dd',
      isVip: '1',
      deadline: '2029-12-29 18:29:46',
      svcCode: 'VIP-edu',
      channelCode: '1008',
    },
  });
});

module.exports = router;
