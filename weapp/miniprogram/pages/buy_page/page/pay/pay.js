const db = wx.cloud.database()
const dewuCollection = db.collection('dewu')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    newPrice: 0,
    id: ''
  },
  show_detail() {
    wx.navigateTo({
      url: '../../../login_detail/login_detail',
    })
  },
  pay(e) {
    let goods = wx.getStorageSync("goods") || []
    let exist = goods.find((el) => {
      console.log(e);
      return el.id == this.data.id
    })
    // console.log(e);
    //如果购物车里面有该商品那么他的数量每次加一
    if (exist) {
      exist.value = parseInt(exist.value) + 1
    } else {
      goods.push({
        id: this.data.id,
        title: e.target.dataset.title,
        pic: e.target.dataset.pic,
        price: e.target.dataset.price,
        value: 1,
        selected: true
      })
    }
    // console.log(goods);
    //更新缓存数据
    wx.setStorageSync("goods", goods)
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
    setTimeout(function () {
      wx.switchTab({
        url: '../buy/buy',
      })
    }, 1500)

    // wx.setStorage({
    //   key: 'information',
    //   data: this.data.goods,
    //   success: res => {
    //     console.log(res);
    //   }
    // })
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
        // console.log(res.data);
        let Homedata = res.data
        this.setData({
          data: Homedata,
          goods: Homedata,
          newPrice: res.data.price + 3,
          id: id
        })
      })
  },
})