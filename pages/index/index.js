const app = getApp()

Page({
  data: {
    products: [],
    douyinId: 'baoluowanxiang', // 抖音号
    carouselItems: [
      {
        image: '/images/posters/poster1.jpg',
        title: '匠心传承',
        subtitle: '传统慢腌工艺，保留地道风味'
      },
      {
        image: '/images/posters/poster2.jpg',
        title: '地道风味',
        subtitle: '品味自然之鲜，回味家的味道'
      },
      {
        image: '/images/posters/poster3.jpg',
        title: '品质保证',
        subtitle: '从田间到舌尖，全程可追溯'
      }
    ]
  },

  onLoad() {
    this.setData({ products: app.globalData.products })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 })
    }
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: '/pages/product-detail/product-detail?id=' + id })
  },

  switchTab(e) {
    const path = e.currentTarget.dataset.path
    wx.switchTab({ url: path })
  },

  // 复制抖音号
  copyDouyinId() {
    const that = this;
    wx.setClipboardData({
      data: that.data.douyinId,
      success: function () {
        wx.showToast({
          title: '抖音号已复制',
          icon: 'success',
          duration: 2000
        });
      },
      fail: function () {
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  }
})