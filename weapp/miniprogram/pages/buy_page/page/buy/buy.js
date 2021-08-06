// miniprogram/pages/buy/buy.js
const db = wx.cloud.database()
const dewuCollection = db.collection('dewu')
const {goods1, goods2} = require('../../../../config/buys')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods1,
    goods2,
    produces: [],
    shoes: []
  },
  gotoDetail(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/buy_page/page/detail/detail?id='+e.currentTarget.dataset.id,
    })
  },
  gotoSearch() {
    wx.navigateTo({
      url: '/pages/buy_page/page/search/search',
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
  async onLoad() {
    const {data} = await dewuCollection
    .where({
      amway: db.command.eq('TRUE')
    })
    .field({
      _id:true,
      pic:true,
      title:true,
      buyer:true,
      price:true
    })  
    .get()
    // console.log(data);

    let data1 = await dewuCollection
    .where({
      type: 1
    }) 
    .get()
    // console.log(data1.data);
    this.setData({
      produces: data,
      shoes: data1.data
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


 