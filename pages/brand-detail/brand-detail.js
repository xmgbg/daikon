Page({
  data: {},

  copyDouyin() {
    wx.setClipboardData({
      data: '58929527420',
      success: () => {
        wx.showToast({
          title: '已复制到剪贴板',
          icon: 'success'
        });
      }
    });
  }
})
