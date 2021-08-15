const db = wx.cloud.database()
const dewuCollection = db.collection('dewu')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    newPrice: 0
  },
  show_detail() {
    wx.navigateTo({
      url: '../../../login_detail/login_detail',
    })
  },
  pay() {
    wx.showLoading({
      title: '提交订单中',
    })
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 1000
      })
    }, 1000)
    wx.setStorage({
      key: 'information',
      data: this.data.goods,
      success: res => {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(e) {
    console.log(e);
    let id = e.id;
    console.log(id);
    await dewuCollection
      .doc(id)
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          goods: res.data,
          newPrice: res.data.price + 3
        })
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