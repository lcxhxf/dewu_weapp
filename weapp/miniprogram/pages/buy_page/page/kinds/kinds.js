// miniprogram/pages/kinds/kinds.js
const {kindNav, kindItem, kindTitle, kindTitle1,  kindItem1} = require('../../../../config/kind')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNavIndex:0,
    kindNav:[],
    kindItem:[],
    kindall:[],
    kindItem1:[],
    kindall1:[],
    kindTitles: [],
    kindTitle: [],
    kindTitles1: [],
    kindTitle1: []
  },
  gotoAssem(e) {
    // console.log(e);
    wx.navigateTo({
      url: '/pages/buy_page/page/assem/assem?title='+e.currentTarget.dataset.title,
    })
  },
  gotoSearch() {
    wx.navigateTo({
      url: '/pages/buy_page/page/search/search',
    })
  },
  changeKinds(e) {
    console.log(e);
    let {index, type} = e.currentTarget.dataset;
    console.log(index, type);//index与推荐品牌的索引有关。type与kind.js的camptype
    this.setData({
      activeNavIndex: index,
    })
    let title=[]
    this.data.kindTitles.forEach(kindTitle => {
      if(index == kindTitle.titletype) {
        title.push(kindTitle)
      }
    })
    let title1=[]
    this.data.kindTitles1.forEach(kindTitle1 => {
      if(index == kindTitle1.titletype) {
        title1.push(kindTitle1)
      }
    })
    let kinds = []
    this.data.kindall.forEach(kind => {
      if(kind.camptype == type) {
        kinds.push(kind)
      }
    })
    let kinds1 = []
    this.data.kindall1.forEach(kind => {
      if(kind.camptype == type) {
        kinds1.push(kind)
      }
    })
    this.setData({
      kindItem: kinds,
      kindItem1: kinds1,
      kindTitle: title,
      kindTitle1: title1
    })
  },
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        kindNav: kindNav,
        kindall: kindItem,
        kindall1: kindItem1,
        kindTitles: kindTitle,
        kindTitles1: kindTitle1
    })
    // console.log(this.data.kindall);
    let kinds=[];
    let kinds1=[];
    let title=[];
    let title1=[];
    // console.log(this.data.kindall)
    this.data.kindall.forEach(kind => {
      if(kind.camptype == 0) {
        kinds.push(kind)
      }
    })
    this.data.kindall1.forEach(kind => {
      if(kind.camptype == 0) {
        kinds1.push(kind)
      }
    })
    this.data.kindTitles.forEach(kindTitle => {
      if(0== kindTitle.titletype) {
        title.push(kindTitle)
      }
    })
    this.data.kindTitles1.forEach(kindTitle1 => {
      if(0== kindTitle1.titletype) {
        title1.push(kindTitle1)
      }
    })
    this.setData({
      kindItem: kinds,
      kindItem1: kinds1,
      kindTitle: title,
      kindTitle1: title1
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