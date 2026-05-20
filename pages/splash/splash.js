Page({
  data: {},

  onLoad() {
    this.preloadResources()
  },

  preloadResources() {
    wx.getImageInfo({
      src: '/images/icons/logo.png',
      success: () => {
        console.log('Logo预加载成功')
      }
    })
  },

  enterApp() {
    wx.vibrateShort({
      type: 'light'
    })

    wx.switchTab({
      url: '/pages/index/index',
      success: () => {
        console.log('成功进入首页')
      }
    })
  }
})