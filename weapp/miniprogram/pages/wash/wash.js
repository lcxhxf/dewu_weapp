const dataList = [
  {
    id:1,
    title:'你是个猪头'
  },
  {
    id:2,
    title:'哇呜'
  }
]

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    noticeList:{
      dataList
    }
  },
  // return(){
  //   wx.navigateTo({
  //     url: '/pages/buy/buy',
  //   })
  // },
  return() {
  
    wx.switchTab({
      url: '/pages/buy/buy',
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar()
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