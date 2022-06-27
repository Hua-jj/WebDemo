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
          'network': '@/network'
        }
      },
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8081/',
          changeOrigin: true,
          ws: true,
        }
      }
    }
}