const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? 'http://10.2.44.37/studyTest/test/vuejs-why/mall/dist/' : '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // '@' 别名指向 'src' 目录
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://pvp.qq.com/web201605/',  // 目标服务器的基础 URL
        changeOrigin: true, // 是否更改请求源头
        pathRewrite: { '^/api': '' }, // 重写路径，如果需要移除前缀
      }
    }
  }
})
