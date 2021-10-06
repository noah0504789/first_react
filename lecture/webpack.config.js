const path = require('path')
const webpack = require('webpack')

module.exports = {
    name: 'gugudan-webpack-config',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 빠르게 하겠다는 뜻. hidden-source-map은 배포용
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env',{
                        targets: {
                            browsers: ['last 2 chrome versions'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [],
            }
        }],
    },
    plugins: [],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    } // 출력

}