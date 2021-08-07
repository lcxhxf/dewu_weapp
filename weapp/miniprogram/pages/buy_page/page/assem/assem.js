const {tabs} = require('../../../../config/assem')
const db = wx.cloud.database()
const dewuCollection = db.collection('dewu')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTabIndex:0,
    tabs,
    titles: '',
    goods:[],
    flag: -1,
  },
  async changeItem(e) {
    // console.log(e);
    let index = e.currentTarget.dataset.index
    this.setData({
      activeTabIndex: index
    })
    // console.log(index);
    if(index == 1) {
    await dewuCollection
    .where({
      kind: this.data.titles
    })
    .orderBy('buyer', 'desc') 
    .get()
    .then(res => {
      this.setData({
        goods: res.data
      })
    })
    }
    if(index == 0) {
      await dewuCollection
      .where({
        kind: this.data.titles
      })
      .get()
      .then(res => {
        this.setData({
          goods: res.data
        })
      })
    }
    if(index == 2 && this.data.flag == -1) {
      await dewuCollection
      .where({
        kind: this.data.titles
      })
      .orderBy('price', 'desc') 
      .get()
      .then(res => {
        this.setData({
          goods: res.data,
          flag: 1
        })
      })
      return
    }
    if(index == 3) {
      await dewuCollection
      .where({
        kind: this.data.titles
      })
      .orderBy('ctime', 'asc') 
      .get()
      .then(res => {
        this.setData({
          goods: res.data
        })
      })
    }
    else if(index == 2 && this.data.flag == 1) {
      await dewuCollection
      .where({
        kind: this.data.titles
      })
      .orderBy('price', 'asc') 
      .get()
      .then(res => {
        this.setData({
          goods: res.data,
          flag: -1
        })
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    // console.log(options);
    let title = options.title
    let data1 = await dewuCollection
    .where({
      kind: title
    }) 
    .get()
    // console.log(data1);
    this.setData({
      goods: data1.data,
      titles: title
    })
  },
  gotoDetail(e) {
    // console.log(e);
    wx.navigateTo({
      url: '/pages/buy_page/page/detail/detail?id='+e.currentTarget.dataset.id,
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

  },
  gotoSearch() {
    wx.navigateTo({
      url: '/pages/buy_page/page/search/search',
    })
  },
})