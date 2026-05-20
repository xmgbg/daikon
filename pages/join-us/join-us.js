Page({
  data: {
    contactPhone: '电话号：15326327751',
    cooperationTypes: '我们支持校园代理与区域经销商两种核心合作模式，校园代理采用低门槛、轻量化运营模式，适配大学生创业需求，区域经销商可享受品牌官方背书及专属供货支持，两种模式均能助力合作伙伴快速切入市场、实现互利共赢。'
  },

  onCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.contactPhone
    })
  }
})
