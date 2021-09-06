const path = require('path');

// var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    externals: {
        jquery: 'jQuery'
    },
    entry: {
        Util: path.resolve(__dirname, './src/util/index.js'),
        VM: path.resolve(__dirname, './src/vm/vm.js'),
        components: path.resolve(__dirname, './src/packages/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        // https://github.com/webpack/webpack/tree/master/examples/multi-part-library
        library: "[name]",
        // the type of the exported library
        libraryTarget: "umd",
        // // https://webpack.js.org/configuration/output/#output-libraryexport
        libraryExport: "default"
    },
    //https://webpack.js.org/configuration/devtool/#devtool
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['latest'],
                    "plugins": ["transform-runtime"]
                }
            }
        }, {
            test: /\.css$/,
            use: {
                loader: "style-loader!css-loader"
            }
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },
    plugins: [
        // new htmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: './demo/index.html',
        //     inject: 'head',
        //     chunks: ["util", "vm"]
        // })
    ]
};