const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    lintOnSave: false,
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'components': '@/components',
          'views': '@/views',
          'router': '@/router'
        }
      },
      plugins: [
        ComponentsPlugin({
          resolvers: [VantResolver()],
        }),
      ],
    },
    devServer: {
      proxy: {
        '/api': {   // 拦截以api开头请求路径
          target: 'http://106.14.246.145:9999',
          changeOrigin: true,
          ws: true,
          // pathRewrite: {
          //   '^/api': ''
          // }
        }
      }
    }
}



