Page({
  data: {
    cacheSize: '0 KB',
    notificationEnabled: true,
    updateText: '已是最新版'
  },

  onLoad() {
    this.computeCacheSize()
    this.checkUpdate()
  },

  computeCacheSize() {
    wx.getStorageInfo({
      success: (res) => {
        const sizeKB = res.currentSize
        const display = sizeKB < 1024
          ? sizeKB + ' KB'
          : (sizeKB / 1024).toFixed(1) + ' MB'
        this.setData({ cacheSize: display })
      }
    })
  },

  toggleNotification(e) {
    this.setData({ notificationEnabled: e.detail.value })
    if (e.detail.value) {
      wx.requestSubscribeMessage({
        tmplIds: [],
        success: () => {
          wx.showToast({ title: '已开启', icon: 'success' })
        },
        fail: () => {
          this.setData({ notificationEnabled: false })
        }
      })
    }
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
  },

  checkUpdate() {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          this.setData({ updateText: '有新版本!' })
        }
      })
    }
  },

  showUserAgreement() {
    wx.showModal({
      title: '用户协议',
      content: '感谢使用包萝万象小程序。本小程序提供产品展示、品牌溯源等信息服务，所有内容仅供参考。使用本小程序即表示您同意遵守相关服务条款。',
      showCancel: false,
      confirmColor: '#ff6b35'
    })
  },

  showPrivacyPolicy() {
    wx.showModal({
      title: '隐私政策',
      content: '我们重视您的隐私。本小程序仅在必要时收集和存储基本的用户偏好设置信息，不会收集或分享您的个人身份信息给第三方。',
      showCancel: false,
      confirmColor: '#ff6b35'
    })
  }
})