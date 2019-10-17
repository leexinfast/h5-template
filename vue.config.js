const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    publicPath: './',
    productionSourceMap: false,
    css: {
        // modules:false,
        // extract:true,
        sourceMap: false,
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        // proxy: {
        //     '/api': {
        //         target: 'https://mini.donglu-law.com/',
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        disableHostCheck:true
    },
}
