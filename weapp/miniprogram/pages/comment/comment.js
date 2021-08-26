// miniprogram/pages/comment/comment.js
const db = wx.cloud.database()
const commentCollection = db.collection('comment_list')
const replyCollection = db.collection('reply_list')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    placeHolder: '评论一下',
    comment_list: [],
    reply_list: [],
    total: 0,
    reply_name: '',
    reply_id: 0,
    parent_id: 0,
    value: ''
  },
  showPopup() {
    this.setData({ 
      show: true,
    });
  },
  onClose() {
    this.setData({ 
      show: false,
    });
  },
  async clicklike(e) {
    // console.log(e);
    let pid = e.currentTarget.dataset.pid
    let id = e.currentTarget.dataset.id
    let like = !e.currentTarget.dataset.like
    wx.cloud.callFunction({
      name: "like",
      data: {
        id: id,
        like: like,
        pid: pid
      }
    })
    .then(res => {
      console.log('ok',res);
      this.onLoad()
    }) 
  },
  async getComment() {
    await commentCollection 
    .where({
      parent_id: 0
    }) 
    .get()
    .then(res => {
      // console.log(res);
      this.setData({
        comment_list: res.data
      })
    })
  },
  async getReply() {
    await replyCollection
    .get()
    .then(res => {
      this.setData({
        reply_list: res.data
      })
    })
  },
  replyComment(e) {
    console.log(e);
    this.setData({
      reply_name: e.currentTarget.dataset.name,
      reply_id: e.currentTarget.dataset.id,
      placeHolder: '回复 '+e.currentTarget.dataset.name,
      parent_id: e.currentTarget.dataset.pid,
    })
  },
  sendComment(e) {
    this.setData({
      value: e.detail.value
    })
    let myName = '莉莉娅', value = e.detail.value, comment_time = '刚刚',
        total = ++this.data.total, replyName = this.data.reply_name,
        replyId = this.data.reply_id, parent_id = this.data.parent_id,
        myAvatar = 'https://game.gtimg.cn/images/lol/act/img/champion/Lillia.png'
    if (value == '') {
      wx.showToast({
        icon: 'none',
        title: '请输入评论',
      })
      return
    }
    if (parent_id != 0) {
      wx.cloud.callFunction({
        name: "replyComment",
        data: {
          comment_id: total,
          reply_name: replyName,
          reply_id: replyId,
          parent_id: parent_id,
          comment_user_name: myName,
          comment_user_avatar: myAvatar,
          comment_text: value,
          comment_time: comment_time,
        }
      })
      .then(res => {
        this.setData({
          value: ''
        })
      this.onLoad()  
      })
      
    }
    else {
      wx.cloud.callFunction({
        name: "sendComment",
        data: {
          comment_id: total,
          reply_name: replyName,
          reply_id: replyId,
          parent_id: parent_id,
          comment_user_name: myName,
          comment_user_avatar: myAvatar,
          comment_text: value,
          comment_time: comment_time,
        }
      })
      .then(res => {
        this.setData({
          value: ''
        })
      this.onLoad()
      }) 
    }
  },
  async getTotal() {
    let cnum = await commentCollection.count()
    let rnum = await replyCollection.count()
    this.setData({
      total: cnum.total + rnum.total
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getComment()
    this.getReply()
    this.getTotal()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
//
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getComment()
    this.getReply()
    this.getTotal()
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