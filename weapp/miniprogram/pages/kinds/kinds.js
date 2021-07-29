// miniprogram/pages/kinds/kinds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    activeId: [],
    max: 1,
    items: [
      {
        text: '推荐',
        children: [
          {
            text: '板鞋',
            id: 1,
            disabled: false,
          },
          {
            text: '帆布鞋',
            id: 2,
          },
        ],
      },
      {
        text: '推荐',
        children: [
          {
            text: '板鞋',
            id: 1,
            disabled: false,
          },
          {
            text: '帆布鞋',
            id: 2,
          },
        ],
      },
      {
        text: '推荐',
        children: [
          {
            text: '板鞋',
            id: 1,
            disabled: false,
          },
          {
            text: '帆布鞋',
            id: 2,
          },
        ],
      },
    ]
  },
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    const { activeId } = this.data;

    const index = activeId.indexOf(detail.id);
    if (index > -1) {
      activeId.splice(index, 1);
    } else {
      activeId.push(detail.id);
    }

    this.setData({ activeId });
  },
  gotoSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
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