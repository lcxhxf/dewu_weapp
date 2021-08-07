// miniprogram/pages/search/search.js
const db = wx.cloud.database()
const posterCollection = db.collection('poster')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    results: []
  },
  onSearch(e) {
    console.log(e);
    let keyword = e.detail
    if (!keyword.trim()) {
      wx.showToast({
        title: '抱歉，没有找到相关商品，为您推荐以下热门商品',
      })
    }
    posterCollection
      .where({
        title: db.RegExp({
          regexp: keyword,
          options: 'i'
        })
      })
      .orderBy('hot', 'desc')
      .get()
      .then(res => {
        this.setData({
          results: res.data
        })
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