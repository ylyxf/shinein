const { appendWebpackPlugin } = require('@rescripts/utilities')
const webpack = require('webpack');
const path = require('path');
const apiMocker = require('mocker-api');

module.exports = [
    {
        devServer: config => {
            defaultBefore = config.before;
            config.before = (app, server) => {
                defaultBefore(app, server);
                apiMocker(app, path.resolve('./mock/index.js'), {})
            }
            return config
        }
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