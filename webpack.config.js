/* eslint-disable */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
  entry: {
    'index': './src/pages/main/index.js',
    'bar-chart/index': './src/pages/bar-chart/index.js',
    'countdown-timer/index': './src/pages/countdown-timer/index.js',
    'url-shortening/index': './src/pages/url-shortening/index.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      chunks: ['index'],
      template: 'src/pages/main/index.html',
      filename: 'index.html',
    }),
    new HtmlWebPackPlugin({
      chunks: ['bar-chart/index'],
      template: 'src/pages/bar-chart/index.html',
      filename: 'bar-chart/index.html',
    }),
    new HtmlWebPackPlugin({
      chunks: ['countdown-timer/index'],
      template: 'src/pages/countdown-timer/index.html',
      filename: 'countdown-timer/index.html',
    }),
    new HtmlWebPackPlugin({
      chunks: ['url-shortening/index'],
      template: 'src/pages/url-shortening/index.html',
      filename: 'url-shortening/index.html',
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:5000',
      },
    ]
  },
  output: {
    clean: true
  },
  devtool: argv.mode === 'development' ? 'eval-source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
          outputPath: 'static/images/',
          publicPath: 'static/images/',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name][ext]', // Reference: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/1005
        },
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src', 'components'),
      images: path.resolve(__dirname, 'src', 'assets', 'images'),
      fonts: path.resolve(__dirname, 'src', 'assets', 'fonts'),
      styles: path.resolve(__dirname, 'src', 'styles')
    }
  }
})
