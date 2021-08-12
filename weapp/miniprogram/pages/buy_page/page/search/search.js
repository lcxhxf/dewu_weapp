// miniprogram/pages/search/search.js
const {hotList} = require('../../../../config/search')
const db = wx.cloud.database()
const dewuCollection = db.collection('dewu')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    showHotList: true,
    showHistory: true,
    results: [],
    hotList,
    historyList: []
  },
  async historySearch(e) {
    // console.log(e);
    let historyList = this.data.historyList
    let value = historyList[e.currentTarget.dataset.index]
    this.setData({
      value,
      showHotList: false,
      showHistory: false,
      results: []
    })
    let results = await dewuCollection
      .where({
        title: db.RegExp({
          regexp: value,
          options: 'i'
        })
      })
      .get()
    if (results.data.length == 0 || value == '') {
      wx.showToast({
        title: '不存在'+value,
      })
    }
    else {
      await dewuCollection
      .where({
        title: db.RegExp({
          regexp: value,
          options: 'i'
        })
      })
      .orderBy('hot', 'desc')
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          results: res.data
        })
      })
    }
  },
  deleteSearchHistory() {
    wx.showModal({
      content: '确认清空历史记录',
      success: (res) => {
        if(res.confirm) {
          this.setData({
            historyList: []
          })
        }
      }
    })
    wx.removeStorageSync('value')
  },
  onClear() {
    this.setData({
      results: [],
      value: '',
      showHotList: true,
      showHistory: true
    });
  },
  gotoDetail(e) {
    // console.log(e);
    wx.navigateTo({
      url: '/pages/buy_page/page/detail/detail?id='+e.currentTarget.dataset.id,
    })
  },
  onChange(e) {
    // console.log(e.detail);
    this.setData({
      value: e.detail,
      showHotList: false,
      showHistory: false,
      results: []
    })
    // console.log(this.data.showHotList);
    if (this.data.value=='') {
      this.setData({
        showHotList: true,
        showHistory: true
      })
    }
  },
  getSearchHistory() {
    let historyList = wx.getStorageSync('value')
    if(historyList) {
      this.setData({
        historyList
      })
    }
  },
  async onSearch(e) {
    // console.log(e);
    if (!e.detail.trim()) {
      wx.showToast({
        title: '请输入商品名',
      })
      return
    }
    let {value, historyList} = this.data
    if(historyList.indexOf(value) !== -1) {
      historyList.splice(historyList.indexOf(value), 1)
    }
    historyList.unshift(value)
    this.setData({
      historyList
    })
    wx.setStorageSync('value', historyList)
    let keyword = e.detail.trim()
    let results = await dewuCollection
      .where({
        title: db.RegExp({
          regexp: keyword,
          options: 'i'
        })
      })
      .get()
    if (results.data.length == 0 || keyword == '') {
      wx.showToast({
        title: '不存在'+keyword,
      })
    }
    else {
      await dewuCollection
      .where({
        title: db.RegExp({
          regexp: keyword,
          options: 'i'
        })
      })
      .orderBy('hot', 'desc')
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          results: res.data
        })
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSearchHistory()
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