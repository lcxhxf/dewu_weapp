const {tabs, people, peoples, size, sizes, brand, brands} = require('../../../../config/assem')
const db = wx.cloud.database()
const _ = db.command
const dewuCollection = db.collection('dewu')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cd1: '',
    cd2: '',
    cd3: 0,
    cd4: 10000000,
    activeTabIndex:0,
    tabs,
    titles: '',
    goods: [],
    flag: -1,
    show: false,
    activeNames: ['0'],
    human: people,
    size: size,
    brand: brand,
    flag1: -1,
    activeIndex1: -1,
    flag2: -1,
    activeIndex2: -1,
    flag3: -1,
    activeIndex3: -1,
    index: 0,
    isPick: 0
  },
  pick1(e) {
    // console.log(e);
    let flag = e.currentTarget.dataset.flag
    let index = e.currentTarget.dataset.index
    let cd = this.data.human[index].kind
    // console.log(this.data.human[index].kind);
    if(flag==index) {
      this.setData({
        activeIndex1: -1,
        flag1: -1,
        cd1: ''
      }) 
    }
    else {
      this.setData({
        activeIndex1: index,
        flag1: index,
        cd1: cd
      }) 
    }
    // console.log(this.data.cd1);
  },
  pick2(e) {
    let flag = e.currentTarget.dataset.flag
    let index = e.currentTarget.dataset.index
    if(flag==index) {
      this.setData({
        activeIndex2: -1,
        flag2: -1
      }) 
    }
    else {
      this.setData({
        activeIndex2: index,
        flag2: index
      }) 
    }
  },
  pick3(e) {
    let flag = e.currentTarget.dataset.flag
    let index = e.currentTarget.dataset.index
    let cd = this.data.brand[index].kind
    if(flag==index) {
      this.setData({
        activeIndex3: -1,
        flag3: -1,
        cd2: ''
      }) 
    }
    else {
      this.setData({
        activeIndex3: index,
        flag3: index,
        cd2: cd
      }) 
    }
  },
  replace() {
    this.setData({
      flag1: -1,
      activeIndex1: -1,
      flag2: -1,
      activeIndex2: -1,
      flag3: -1,
      activeIndex3: -1,
      cd1: '',
      cd2: '',
      cd3: 0,
      cd4: 10000000,
    })
  },
  async ischeck() {
    // console.log(this.data.cd1);
    // console.log(this.data.titles);
    let cd3 = Number(this.data.cd3)
    let cd4 = Number(this.data.cd4)==0?1000000:Number(this.data.cd4)
    let index = Number(this.data.index)
    // console.log(cd3);
    // console.log(cd4);
    if(this.data.cd1!='' && this.data.cd2!=''){
      await dewuCollection
    .where({
      kind: this.data.titles,
      sex: this.data.cd1,
      brand: this.data.cd2,
      price: _.gt(cd3).and(_.lt(cd4)),
    })
    .get()
    .then(res => {
      // console.log(res.data);
      this.setData({
        goods: res.data,
        show: false,
      })
      console.log(this.data.goods);
    })
    return
    }

    if(this.data.cd1=='' && this.data.cd2!=''){
      await dewuCollection
    .where({
      kind: this.data.titles,
      brand: this.data.cd2,
      price: _.gt(cd3).and(_.lt(cd4)),
    })
    .get()
    .then(res => {
      this.setData({
        goods: res.data,
        show: false,
      })
    })
    return
    }

    if(this.data.cd1!='' && this.data.cd2==''){
      await dewuCollection
    .where({
      kind: this.data.titles,
      sex: this.data.cd1,
      price: _.gt(cd3).and(_.lt(cd4)),
    })
    .get()
    .then(res => {
      this.setData({
        goods: res.data,
        show: false,
      })
    })
    return
    }

    else {
      await dewuCollection
      .where({
        kind: this.data.titles,
        price: _.gt(cd3).and(_.lt(cd4)),
      })
      .get()
      .then(res => {
        // console.log(res);
        this.setData({
          goods: res.data,
          show: false,
        })
      })
    }
    
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
        goods: res.data,
        index: index
      })
      // console.log(this.data.index);
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
      .orderBy('ctime', 'desc') 
      .get()
      .then(res => {
        this.setData({
          goods: res.data
        })
      })
    }
    if(index == 4) {
      this.setData({ 
        show: true,
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
  lower(e) {
    // console.log(e);
    this.setData({
      cd3: e.detail.value
    })
  },
  higher(e) {
    this.setData({
      cd4: e.detail.value
    })
  },
  onChange(e) {
    console.log(e);
    this.setData({
      activeNames: e.detail,
    });
  },
  onOpen1(e) {
    console.log(e);
    this.setData({
      human: peoples
    })
  },
  onClose1(e) {
    this.setData({
      human: people
    })
  },
  onOpen2(e) {
    console.log(e);
    this.setData({
      size: sizes
    })
  },
  onClose2(e) {
    this.setData({
      size: size
    })
  },
  onOpen3(e) {
    console.log(e);
    this.setData({
      brand: brands
    })
  },
  onClose3(e) {
    this.setData({
      brand: brand
    })
  },
  onClose() {
    this.setData({ 
      show: false,
    });
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