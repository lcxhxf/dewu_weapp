// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数 只要被 callFunction调用就会立即执行
exports.main = async (event, context) => {
  const res = await cloudwx.getOpenData({
    list: [event.cloudID]
  })

  return res
}