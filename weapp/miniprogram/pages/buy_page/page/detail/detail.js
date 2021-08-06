// miniprogram/pages/buy_page/page/detail/detail.js
const {headimg, size, produceimg} = require('../../../../config/detail')
const {goods2} = require('../../../../config/buys')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods2,
    produceimg,
    headimg,
    size,
    show1: false,
    show2: false,
    //轮播图当前的下标
    current: 0,
    current2: 0
  },
  showPopup1() {
    this.setData({ 
      show1: true,
    });
  },
  onClose1() {
    this.setData({ 
      show1: false,
    });
  },
  showPopup2() {
    this.setData({ 
      show2: true  
    });
  },
  onClose2() {
    this.setData({ 
      show2: false
    });
  },
  monitorCurrent: function (e) {
    // console.log(e.detail.current)
    let current = e.detail.current;
    this.setData({
      current: current
    })
  },
  monitorCurrent2: function (e) {
    // console.log(e.detail.current)
    let current = e.detail.current;
    this.setData({
      current2: current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  gotoProduce() {
    wx.navigateTo({
      url: '/pages/buy_page/page/produce/produce',
    })
  },
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