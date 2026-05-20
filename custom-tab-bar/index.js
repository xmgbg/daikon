Component({
  data: {
    selected: 0,
    color: "#999",
    selectedColor: "#ff6b35",
    list: [
      { pagePath: "/pages/brand/brand", text: "产品溯源" },
      { pagePath: "/pages/products/products", text: "产品介绍" },
      { pagePath: "/pages/index/index", text: "首页" },
      { pagePath: "/pages/diy/diy", text: "DIY教程" },
      { pagePath: "/pages/mine/mine", text: "我的" }
    ]
  },

  attached() {
  },

  methods: {
    switchTab(e) {
      const index = e.currentTarget.dataset.index
      const path = e.currentTarget.dataset.path
      
      this.setData({ selected: index })
      wx.switchTab({ url: path })
    }
  }
})
