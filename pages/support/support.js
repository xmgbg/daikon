Page({
  data: {
    flowerCount: 274
  },

  onLoad() {
    const savedCount = wx.getStorageSync('flowerCount')
    if (savedCount) {
      this.setData({ flowerCount: savedCount })
    }
  },

  sendFlower() {
    const newCount = this.data.flowerCount + 1
    
    this.setData({
      flowerCount: newCount
    })

    wx.setStorageSync('flowerCount', newCount)

    wx.showModal({
      title: '感谢您的支持！🌸',
      content: '您的每一份支持，都是我们前进的动力！',
      showCancel: false,
      confirmColor: '#ff6b35'
    })
  }
})
