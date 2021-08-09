// miniprogram/pages/buy_page/page/detail/detail.js
const db = wx.cloud.database()
const dewuCollection = db.collection('dewu')
const {headimg, size, produceimg} = require('../../../../config/detail')
const {goods2} = require('../../../../config/buys')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeSizeIndex: -1,
    flag: -1,
    goods2,
    produceimg,
    headimg,
    size,
    show1: false,
    show2: false,
    //轮播图当前的下标
    current: 0,
    current2: 0,
    img: []
  },
  gotoPay(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/buy_page/page/pay/pay',
    })
  },
  previewImage(e) {
    console.log(e);
  },
  pickSize(e) {
    let flag = e.currentTarget.dataset.flag
    let index = e.currentTarget.dataset.index
    if(flag==index) {
      this.setData({
        activeSizeIndex: -1,
        flag: -1
      }) 
    }
    else {
      this.setData({
        activeSizeIndex: index,
        flag: index
      }) 
    }
  },
  showPopup1() {
    this.setData({ 
      show1: true,
    });
  },
  onClose1() {
    this.setData({ 
      show1: false,
    });
  },
  showPopup2() {
    this.setData({ 
      show2: true  
    });
  },
  onClose2() {
    this.setData({ 
      show2: false
    });
  },
  monitorCurrent: function (e) {
    // console.log(e.detail.current)
    let current = e.detail.current;
    this.setData({
      current: current
    })
  },
  monitorCurrent2: function (e) {
    // console.log(e.detail.current)
    let current = e.detail.current;
    this.setData({
      current2: current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  gotoProduce() {
    wx.navigateTo({
      url: '/pages/buy_page/page/produce/produce',
    })
  },
  
  async onLoad(options) {
    console.log(options);
    let id = options.id
    console.log(id);
    wx.cloud.database().collection('dewu')
    .doc(id)
    .get()
    .then(res => {
      console.log(res);
      this.setData({
       img :res.data
      })
    })
    // let {data: info} = await postsCollection
    //   .doc(_id)
    //   .get()
    // console.log(info);
    // this.setData({
    //   posts: info
    // })
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