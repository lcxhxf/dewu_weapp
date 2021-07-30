// miniprogram/pages/kinds/kinds.js
const {kindNav, kindItem} = require('../../config/kind')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNavIndex:0,
    kindNav:[],
    kindItem:[],
    kindall:[],
  },
  changeKinds(e) {
    console.log(e);
    let {index, type} = e.currentTarget.dataset;
    console.log(index, type);//index与推荐品牌的索引有关。type与kind.js的camptype
    this.setData({
      activeNavIndex: index,
    })
    let kinds = []
    this.data.kindall.forEach(kind => {
      if(kind.camptype == type) {
        kinds.push(kind)
      }
    })
    this.setData({
      kindItem: kinds,
    })
  },
  gotoSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        kindNav: kindNav,
        kindall:kindItem,
    })
    // console.log(this.data.kindall);
    let kinds=[]
    // console.log(this.data.kindall)
    this.data.kindall.forEach(kind => {
      if(kind.camptype == 0) {
        kinds.push(kind)
      }
    })
    this.setData({
      kindItem: kinds,
    })
    }, )
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