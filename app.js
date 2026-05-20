App({
  onLaunch() {
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    products: [
      {
        id: 1,
        name: '袋装干萝卜丁',
        image: '/images/products/product1.jpg',
        shortDesc: '传统工艺制作，口感脆爽',
        description: '  精选优质萝卜，采用传统工艺腌制，口感脆爽，开袋即食。真空包装，便于储存和携带。\n食用方式:\n1.取出适量萝卜干，复水10-15分钟至完全舒展\n2.捞出沥干水分，清洗去除表面浮尘\n3.可直接爆炒、炖肉、煲汤，多种烹饪皆宜\n4.剩余萝卜干密封袋口，避光常温保存即可'
      },
      {
        id: 2,
        name: '罐装萝卜咸菜🔥（爆款）',
        image: '/images/products/product2.jpg',
        shortDesc: '精美罐装，方便储存',
        description: '  精美罐装设计，密封性好，易于储存。开盖即食，方便快捷。保持传统风味的同时，更加卫生便捷。适合家庭日常食用或作为伴手礼。'
      },
      {
        id: 3,
        name: 'DIY 腌制套组',
        image: '/images/products/product3.jpg',
        shortDesc: '体验自制乐趣',
        description: '  包含所有制作材料和工具，让你在家也能体验制作萝卜咸菜的樂趣。适合亲子活动，感受传统美食的魅力。\n食用方式：\n1.取出套组内脱水萝卜丁，温水浸泡 10 分钟复水，捞出彻底沥干水分\n2.将沥干萝卜丁放入密封腌制罐，倒入腌料包\n3.加入适量凉白开至没过食材，扣紧罐盖密封\n4.阴凉避光处腌制3-5天，入味即可开盖食用'
      }
    ]
  }
})
