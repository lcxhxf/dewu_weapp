// miniprogram/pages/buy_page/page/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    isLogged: false,
    isAgreed: false
  },
  showtips() {
    if (!this.data.isAgreed) {
      wx.showToast({
        title: '请先勾选协议',
        icon: 'none'
      })
    }
  },
  agree() {
    if (this.data.activeIndex == 0) {
      this.setData({
        activeIndex: 1,
        isAgreed: true
      })
    } else {
      this.setData({
        activeIndex: 0,
        isAgreed: false
      })
    }
    console.log(this.data.isAgreed);
  },
  getUserInfo(e) {
    // console.log(e);
    // console.log(this.data.isAgreed);
    if (e.detail.userInfo == null) {
      wx.switchTab({
        url: '../login/login',
      })
    } else {
      this.setData({
        isLogged: true
      })
      console.log(this.data.isLogged);
      if (this.data.isLogged) {
        wx.switchTab({
          url: '../buy_page/page/buy/buy'
        })
      }
    }
  },
  show_detail() {
    wx.navigateTo({
      url: '../login_detail/login_detail',
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