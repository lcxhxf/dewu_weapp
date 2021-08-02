// miniprogram/pages/buy/buy.js
const {goods1, goods2} = require('../../../../config/buys')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods1,
    goods2,
  },
  gotoSearch() {
    wx.navigateTo({
      url: '/pages/buy_page/page/search/search',
    })
  },
  gotoDetail() {
    wx.navigateTo({
      url: '/pages/buy_page/page/detail/detail',
    })
  },
  kinds() {
    wx.navigateTo({
      url: '/pages/buy_page/page/kinds/kinds',
    })
  },
  produce() {
    wx.navigateTo({
      url: '/pages/buy_page/page/produce/produce',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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


 