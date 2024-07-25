const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// development only
// const logging = require('webpack/lib/logging/runtime')
// logging.configureDefaultLogger({
//   level: 'verbose'
// });


module.exports = (env, argv) => ({
  entry: {
    'index': './src/pages/main/index.js',
    'bar-chart/index': './src/pages/bar-chart/index.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      chunks: ['index'],
      template: 'src/pages/main/index.html',
      filename: 'index.html'
    }),
    new HtmlWebPackPlugin({
      chunks: ['bar-chart/index'],
      template: 'src/pages/bar-chart/index.html',
      filename: 'bar-chart/index.html'
    }),
    new HtmlWebPackPlugin({
      chunks: ['countdown-timer/index'],
      template: 'src/pages/countdown-timer/index.html',
      filename: 'countdown-timer/index.html'
    }),
  ],
  output: {
    clean: true
  },
  devtool: argv.mode === 'development' ? 'eval-source-map':false,
  devServer: {
    hot: true
  },
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
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: (url, resourcePath, context) => {
              if(argv.mode === 'development') {
                const relativePath = path.relative(context, resourcePath);
                return `${relativePath}`;
              }
              return `/assets/images/${path.basename(resourcePath)}`;
            },
            esModule: false,
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: (url, resourcePath, context) => {
              if(argv.mode === 'development') {
                const relativePath = path.relative(context, resourcePath);
                return `${relativePath}`;
              }
              return `/assets/fonts/${path.basename(resourcePath)}`;
            }
          }
        }
      }
    ]
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