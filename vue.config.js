/**
 * @Author: Augo
 * @since: 2021-01-08 12:26:57
 * @LastAuthor: Augo
 * @lastTime: 2021-01-14 19:45:37
 * @文件相对于项目的路径: \subscribe\vue.config.js
 * @description:
 */

// const SERVICEIP = 'http://localhost:5000'

module.exports = {
  publicPath: './', // 部署应用包时的基本 URL
  outputDir: 'dist', // build输出目录
  assetsDir: 'assets', // 静态资源目录（js, css, img）
  lintOnSave: true, // 是否开启eslint
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },
  // // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
  runtimeCompiler: false, // 关键点在这  原来的 Compiler 换成了 runtimeCompiler

  // // // css相关配置
  css: {
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS
    // requireModuleExtension: true,
    // 是否分离css（插件ExtractTextPlugin）
    extract: true,
    // 是否开启 CSS source maps
    sourceMap: true
    // css预设器配置项
    // loaderOptions: {
    // },
    // 是否启用 CSS modules for all css / pre-processor files.
    // modules: true
  },
  devServer: {
    open: false, // 是否自动弹出浏览器页面
    port: '8080',
    // https: false,
    // hotOnly: false,
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    // proxy: {
    //   // /api 的意义在于，声明axios中url已/api开头的请求都适用于该规则，
    //   // 注意是以/api开头，即：axios.post({url: '/api/xxx/xxx'})
    //   '/api': {
    //     target: SERVICEIP, // API服务器的地址
    //     changeOrigin: true,
    //     //    ws: true, // 是否启用websockets
    //     pathRewrite: {
    //       '^/api': SERVICEIP + '/cms'
    //     }
    //   },
    //   '/v1': {
    //     target: SERVICEIP, // API服务器的地址
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/v1': SERVICEIP + '/v1'
    //     }
    //   },
    //   // 打印机代理
    //   '/print': {
    //     target: 'http://127.0.0.1:12345/', // 目标接口域名
    //     changeOrigin: true, // 是否跨域
    //     pathRewrite: {
    //       '^/print': '/' // 重写接口
    //     }
    //   }
    // }

  }
}
