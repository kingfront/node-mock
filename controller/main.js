var express = require('express');
var router = express.Router();

// 获取专题列表接口
router.post('/topic/topicList', function (req, res, next) {
  res.json({
    ret: 200,
    message: 'SUCCESS',
    list: [
      {
        id: 'be7801ffc4c042549d4ea42c84025a36',
        name: '艺术欣赏 -提升课',
        picUrl:
          'http://xxx/piccms/20201212/2020121219112043908_450_645.png?id=1238&amp;amp;crc=2098137717',
      },
      {
        id: '700da86613b242218d9471f4cb9ca630',
        name: '地理人文-普及课程',
        picUrl:
          'http://xxx//20200710/2020071015170537204_450_645.png?id=72557&amp;amp;crc=3373246255',
      },
      {
        id: '2330abf54d16438e881806ada98f888a',
        name: '艺术欣赏-普及课程',
        picUrl:
          'http://xxx//20200710/2020071020173688943_450_645.png?id=72564&amp;amp;crc=3985843668',
      },
      {
        id: '72d2a37d48244d1a83eb719848a53b8d',
        name: '什么是素质教育',
        picUrl:
          'http://xxx/piccms/20200724/2020072414251273081_450_645.png?id=1108&amp;amp;crc=2431510880',
      },
      {
        id: '8526f01e75e942d78563c752f71acba9',
        name: '培养小小科学家 （增强版）',
        picUrl:
          'http://xxx/piccms/20210611/2021061118560832092_450_645.jpg?id=1662&amp;amp;crc=3218565744',
      },
      {
        id: '43b32c48734145ca901314055f79160f',
        name: '培养小小科学家（初级版）',
        picUrl:
          'http://xxx/piccms/20210611/2021061118541739775_450_645.jpg?id=1661&amp;amp;crc=3788709604',
      },
      {
        id: '91e50f84b0a747d89118c5dae8560872',
        name: '中国篇&mdash;缥缈九州',
        picUrl:
          'http://xxx/piccms/20210207/2021020716185320943_1334_1625.jpg?id=1365&amp;amp;crc=1421691980',
      },
    ],
    total: 93,
  });
});

module.exports = router;
