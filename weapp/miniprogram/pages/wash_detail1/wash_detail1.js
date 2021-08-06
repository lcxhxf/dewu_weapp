const movies= [  
  {url:'https://cdn.poizon.com/node-common/c04c0a9f91aef6a481c3852aaa01df9a.png'},
  {url:'https://cdn.poizon.com/node-common/13b825be0695aba4651fd58ad77e7562.png'},
  {url:'https://cdn.poizon.com/node-common/28aaa593c6745b34f72ac1b897379919.png'},
  {url:'https://cdn.poizon.com/node-common/ff6ff0494a92cb9fd62054dbe6271551.png'},
  ]
  const movies2= [  
    {url:'https://cdn.poizon.com/node-common/5bb538fac62a15db8b0df65a61fbbdf2.png'} ,
    {url:'https://cdn.poizon.com/node-common/846ad08cb72d47df8dbf490cfbfbcd0f.png'}  
    ] 
  const dataList = [
    {
      id:1,
      title:'路*** 3分钟前'
    },
    {
      id:2,
      title:'呜*** 1分钟前'
    },
    {
      id:3,
      title:'一*** 2分钟前'
    },
    {
      id:4,
      title:'周*** 4分钟前'
    },
  ]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies,
    movies2,
    noticeList:{
      dataList
    },
    moreData:false,
  },
  return() {
    // wx.navigateTo({
    //   url: '/page/wash/wash',
    // })
    wx.switchTab({
      url: '/page/wash/wash',
    })
    
  },
  more() {
    if(!this.data.moreData){
      this.setData({
        moreData:true
      })
    }
    else{
      this.setData({
        moreData:false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar()
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