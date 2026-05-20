Page({
  data: {
    currentTab: 0,
    tabs: ['产地', '原料', '工艺', '品控'],
    statusBarHeight: 20
  },

  onLoad() {
    const sysInfo = wx.getSystemInfoSync()
    this.setData({ statusBarHeight: sysInfo.statusBarHeight || 20 })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },

  switchTab(e) {
    const index = parseInt(e.currentTarget.dataset.index)
    this.setData({ currentTab: index })
  },

  onSwiperChange(e) {
    this.setData({ currentTab: e.detail.current })
  },

  goBack() {
    wx.navigateBack()
  }
})