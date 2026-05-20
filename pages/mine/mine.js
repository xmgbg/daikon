Page({
  data: {
    userInfo: {},
    cacheSize: '0 KB'
  },

  onLoad() {
    const cachedInfo = wx.getStorageSync('userInfo')
    if (cachedInfo) {
      this.setData({ userInfo: cachedInfo })
    }
    this.computeCacheSize()
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 4 })
    }
  },

  computeCacheSize() {
    wx.getStorageInfo({
      success: (res) => {
        const sizeKB = res.currentSize
        const display = sizeKB < 1024
          ? sizeKB + ' KB'
          : (sizeKB / 1024).toFixed(1) + ' MB'
        this.setData({ cacheSize: display })
      },
      fail: () => {
        this.setData({ cacheSize: '--' })
      }
    })
  },

  navigateTo(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({ url })
  },

  goToBrand() {
    wx.navigateTo({ url: '/pages/brand-detail/brand-detail' })
  },

  goToContact() {
    wx.makePhoneCall({ phoneNumber: '15326327751' })
  },

  openSettings() {
    wx.navigateTo({ url: '/pages/settings/settings' })
  },

  clearCache() {
    wx.showModal({
      title: '清除缓存',
      content: '确定要清除所有缓存数据吗？',
      confirmColor: '#ff6b35',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorage({
            success: () => {
              this.setData({ cacheSize: '0 KB' })
              wx.showToast({ title: '已清除', icon: 'success' })
            }
          })
        }
      }
    })
  }
})