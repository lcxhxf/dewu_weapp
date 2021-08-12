// miniprogram/pages/buy_info/buy_info.js
const db = wx.cloud.database()
const dewuCollection = db.collection('dewu')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    produces: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    wx.setNavigationBarTitle({
      title: '我的购买'
    })
    const {data} = await dewuCollection
    .field({
      _id:true,
      pic:true,
      title:true,
      price:true
    })  
    .get()
    console.log(data);
    this.setData({
      produces: data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})