Component({
  properties: {
    currentTab: {
      type: String,
      value: 'home'
    }
  },

  methods: {
    navigateToTrace() {
      this.triggerEvent('nav', { tab: 'trace' })
    },
    navigateToProducts() {
      this.triggerEvent('nav', { tab: 'products' })
    },
    navigateToHome() {
      this.triggerEvent('nav', { tab: 'home' })
    },
    navigateToDIY() {
      this.triggerEvent('nav', { tab: 'diy' })
    },
    navigateToMine() {
      this.triggerEvent('nav', { tab: 'mine' })
    }
  }
})