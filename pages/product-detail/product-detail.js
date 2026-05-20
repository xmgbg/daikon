const app = getApp()

Page({
  data: {
    product: null
  },

  onLoad(options) {
    const productId = parseInt(options.id)
    const product = app.globalData.products.find(p => p.id === productId)
    
    if (product) {
      this.setData({ product })
    }
  },

  previewImage() {
    wx.previewImage({
      current: this.data.product.image,
      urls: [this.data.product.image]
    })
  }
})
