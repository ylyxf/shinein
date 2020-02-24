const { appendWebpackPlugin } = require('@rescripts/utilities')
const webpack = require('webpack');
const path = require('path');
const apiMocker = require('mocker-api');

module.exports = [
    {
        devServer: () => ({
            before(app) {
                apiMocker(app, path.resolve('./mock/index.js'), {})
            }
        })
    },
    ['use-babel-config', '.babelrc']
    , appendWebpackPlugin(
        new webpack.DefinePlugin({
            'process.env': {
                LOCALE: JSON.stringify('zh-CN'),
            },
        }),
    )
];