'use strict'
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/main.js'
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.png'],
    alias: {
      "@": require("path").resolve(__dirname, 'src')
    },
    modules: [
          'node_modules'
        ] 
  },
  module: {
    rules: [
    {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: //!buildingForLocal() ?
            // extractCSS.extract({
            //   fallback: "style-loader",
            //   use: ['css-loader', 'autoprefixer-loader', 'sass-loader']
            // }) :
            [{
                loader: "vue-style-loader" // creates style nodes from JS strings
              }, {
                loader: "css-loader" // translates CSS into CommonJS
              }, {
                loader: "sass-loader" // compiles Sass to CSS
              }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
      filename: '[name].bundle.js',
      path: require("path").resolve(__dirname, 'dist'),
    }
}