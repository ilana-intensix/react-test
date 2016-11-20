const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//var DEV = path.resolve(__dirname, "dev")
var OUTPUT = path.resolve(__dirname, "build")
var DEV = path.resolve(__dirname)


var config =  {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: [
        "./main.js"
    ],
    output: {
        filename: "bundle.js" ,
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 8081
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.css', '.js', '.json'],
        modulesDirectories: [
          'node_modules',
          path.resolve(__dirname, './node_modules')
        ]
  },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                include: DEV,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, 
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            }
        ]
    }, 
    postcss: [autoprefixer],
    sassLoader: {
        data: '@import "theme/_config.scss";',
        includePaths: [path.resolve(__dirname, '.')]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', { allChunks: true }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}

module.exports = config;
