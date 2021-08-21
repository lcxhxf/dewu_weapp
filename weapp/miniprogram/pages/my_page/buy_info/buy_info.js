// miniprogram/pages/buy_info/buy_info.js
const db = wx.cloud.database()
const dewuCollection = db.collection('dewu')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    total: 0,
    CheckAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({
      title: '我的购买'
    })
  },

  onShow() {
    let goods = wx.getStorageSync("goods")
    this.setData({
      cartList: false,
      goods: goods
    })
    console.log(goods);
  },

  // 选择所有商品
  select(e) {
    let CheckAll = this.data.CheckAll;
    CheckAll = !CheckAll
    let goods = this.data.goods

    for (let i = 0; i < goods.length; i++) {
      goods[i].selected = CheckAll
    }

    this.setData({
      goods: goods,
      CheckAll: CheckAll
    })
    this.getTotal()
  },

  // 选择商品
  selectedCart(e) {
    var goods = this.data.goods //获取购物车列表
    var index = e.currentTarget.dataset.index; //获取当前点击事件的下标索引
    var selected = goods[index].selected; //获取购物车里面的value值

    //取反
    goods[index].selected = !selected;
    this.setData({
      goods: goods
    })
    this.getTotal();
    wx.setStorageSync("goods", goods)
  },

  //删除
  delete(e) {
    let goods = this.data.goods //获取购物车列表
    let index = e.currentTarget.dataset.index //获取当前点击事件的下标索引
    goods.splice(index, 1)
    this.setData({
      goods: goods
    });
    if (goods.length) {
      this.setData({
        cartList: false
      });
    }
    this.getTotal()
    wx.setStorageSync("goods", goods)
  },

  // 全部结算
  cleanAll(e) {
    this.setData({
      goods: []
    })
    wx.setStorageSync("goods", [])
  },

  //合计
  getTotal() {
    let sum = 0
    for (let i = 0; i < this.data.goods.length; i++) {
      if (this.data.goods[i].selected) {
        sum += this.data.goods[i].value * this.data.goods[i].price
      }
    }
    //更新数据
    this.setData({
      total: sum
    })
  },
})