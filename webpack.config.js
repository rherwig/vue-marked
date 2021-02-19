const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'vue-marked.js',
        path: resolve(__dirname, 'dist'),
        library: 'VueMarked',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};
