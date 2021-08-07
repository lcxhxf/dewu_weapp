// miniprogram/pages/produce/produce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info1: {
      id: 1,
      imgUrl: 'https://cdn.poizon.com/node-common/JUU3JUFCJUEwJUU4JThBJTgyJUU1JUE0JUE3JUU2JUEwJTg3JUU5JUEyJTk4JUU1JUE0JThEJUU1JTg4JUI2JTIwNEAzeDE1Nzc5NDYyMjc3NDM=.png',
      checkName: '鉴别服务开创者',
      checkInfo: '作为新一代潮流网购社区，正品潮流装备交易和潮流生活社区是得物App两大核心服务。得物App在传统电商模式的基础上添加“鉴别服务”，首创“先鉴别，后发货”的购物流程，为年轻消费者带来「多重鉴别，正品保障」的全新网购体验。平台成立至今，线上鉴别数量累计超过4000万。（数据截止至2019年12月'
    },
    info2: {
      id: 2,
      imgUrl: 'https://cdn.poizon.com/node-common/JUU3JUFCJUEwJUU4JThBJTgyJUU1JUE0JUE3JUU2JUEwJTg3JUU5JUEyJTk4QDN4MTU3Nzk0NjIyNzgwOQ==.png',
      number: '01',
      checkName: '平台品控 正品保障',
      infoName: '多道鉴别查验工序',
      checkInfo: '多重鉴别查验不仅保障商品为全新正品，独立的查验环节对瑕疵商品进行排查，拦截明显瑕疵商品。针对存在微小瑕疵的商品与用户提前一对一沟通，确保用户高效地购买到称心如意的商品。'
    },
    info3: {
      id: 3,
      number: '02',
      infoName: '打造“鉴别实验室”',
      checkInfo: '得物App平台对鉴别服务秉承着严谨的科研态度，平台签约了数百位业内顶尖、具有多年经验的潮流商品鉴别师，打造了以潮流商品研究为核心的“鉴别实验室”。鉴别师除了是骨灰大神级Sneaker玩家和潮人，更是潮流商品的“研究人员”。通过对海量球鞋、服装、配饰、潮玩、数码3C、美妆等产品进行系统性研究，包括资料收集、数据对比、档案建立、样本拆解和仪器检测等，力保鉴别的准确性。'
    },
    info4: {
      id: 4,
      number: '03',
      infoName: '牵手“鉴定国家队”',
      checkInfo: '得物App与中检集团奢侈品鉴定中心达成战略合作，双方在球鞋潮品鉴别领域展开长期多形式合作，致力于提升球鞋潮品鉴别行业规范性和标准化，携手共创良性潮流消费市场环境。'
    },
    info5: {
      id: 5,
      imgUrl: 'https://cdn.poizon.com/node-common/JUU3JUFCJUEwJUU4JThBJTgyJUU1JUE0JUE3JUU2JUEwJTg3JUU5JUEyJTk4QDN4JTIwKDEpMTU3Nzk0NjIyNzg2Mg==.png',
      number: '01',
      checkName: '官方发售 货品溯源',
      infoName: '潮流品牌官方发售阵地',
      checkInfo: '得物App已成为潮流品牌运营发售的首选平台。NewBalance、卡西欧、Bape等国际一线潮流运动品牌官方授权入驻；华为、大疆创新、戴森、Beats等国际知名科技数码品牌官方授权入驻；罗志祥、汪峰、陈赫、薛之谦、李晨、李灿森等潮流明星携其主理品牌官方入驻发售；国内潮流品牌领军者李宁品牌官方入驻发售。官方发售，买得安心。'
    },
    info6: {
      id: 6,
      number: '02',
      infoName: '严控卖家资质',
      checkInfo: '在个人卖家免费入驻的过程中，得物App平台通过对卖家的认证体系以及分类分级管控严格保障货源。随着平台大数据的积累，平台在逐步完善治理能力，通过优化平台规则，不断提升用户体验。'
    },
    info7: {
      id: 7,
      imgUrl: 'https://cdn.poizon.com/node-common/JUU3JUFCJUEwJUU4JThBJTgyJUU1JUE0JUE3JUU2JUEwJTg3JUU5JUEyJTk4QDN4JTIwKDIpMTU3Nzk0NjIyNzgyNg==.png',
      checkName: '包装助力 防伪升级',
      checkInfo: '每件鉴别通过的商品都会配有官方出具的鉴别证书和防伪扣、包装盒以及品牌胶带组成的“防伪四件套”，鉴别证书的唯一数字ID为鉴别查验通过的商品建立身份识别体系，方便用户验证商品信息。'
    },
    info8: {
      id: 8,
      imgUrl: 'https://cdn.poizon.com/node-common/JUU3JUFCJUEwJUU4JThBJTgyJUU1JUE0JUE3JUU2JUEwJTg3JUU5JUEyJTk4JUU1JUE0JThEJUU1JTg4JUI2QDN4MTU3Nzk0NjIyNzcyNw==.png',
      checkName: '售后无忧 负责到底',
      checkInfo: '在极少数情况下，因小概率误差，用户通过得物App平台购买到未被排查掉的极少量假货，平台承诺“先行赔付，假一赔三”。'
    },
    info9: {
      id: 9,
      imgUrl: 'https://cdn.poizon.com/node-common/JUU4JThCJUIxJUU2JTk2JTg3JUU2JUEwJTg3JUU5JUEyJTk4cGFydF9mb3VyQDN4JTIwKDEpMTU3Nzc1ODgxMjUxMg==.png',
      checkName: '平台治理 坚决打假',
      checkInfo: '得物App平台对售假行为零容忍。面对偶发的网络新型售假现象，得物App成立专项工作组以强化平台治理能力。凭借自身鉴别查验实力，一经发现有关线索，我们会及时向警方提供，并配合警方进行调查侦办。”。'
    },
    info10: {
      id: 10,
      imgUrl: 'https://cdn.poizon.com/node-common/JUU4JThCJUIxJUU2JTk2JTg3JUU2JUEwJTg3JUU5JUEyJTk4cGFydF9mb3VyQDN4MTU3Nzc1ODgwNTM2OA==.png',
      checkName: '品质物流 专业配送',
      checkInfo: '平台联合顺丰速运和京东物流，为商品配备品质物流，保障商品配送安全，到手无忧。”。'
    }
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