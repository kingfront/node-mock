// 路由模块配置
module.exports = [
  {
    path: '/users',
    comment: require('./controller/users')
  },
  {
    path: '/main',
    comment: require('./controller/main')
  }
]
