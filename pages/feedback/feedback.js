Page({
  data: {
    suggestion: ''
  },

  onSuggestionInput(e) {
    this.setData({
      suggestion: e.detail.value
    })
  },

  submitSuggestion() {
    if (!this.data.suggestion.trim()) {
      wx.showToast({
        title: '请填写建议内容',
        icon: 'none'
      })
      return
    }

    wx.showModal({
      title: '提交成功',
      content: '感谢您的宝贵建议，我们会认真参考并改进！',
      showCancel: false,
      confirmColor: '#ff6b35',
      success: () => {
        this.setData({
          suggestion: ''
        })
      }
    })
  }
})
