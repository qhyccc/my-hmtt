//  const { defineConfig } = require('@vue/cli-service')
//  module.exports = defineConfig({
//    transpileDependencies: true
//  })
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
          // 直接覆盖变量
            'nav-bar-background-color': '#007bff',
            'nav-bar-title-text-color': 'white'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          // hack: `true; @import "your-less-file-path.less";`,
          }
        }
      }
    }
  }
}
