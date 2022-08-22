const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    devServer: {
        open: true,
        host: 'localhost', //主机
        port: 8080, //端口
        proxy: { //代理
            '/api': {
                target: 'https://wwww.imooc.com',
                changeOrigin: true,

                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }

})