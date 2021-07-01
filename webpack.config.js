'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development'; // Переменная окружения для определения режима сборки
console.log(NODE_ENV);

const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // точки входа
  context: __dirname + '/frontend', // папка где лежат файлы
  entry: {
    home: './home',
    about: './about',
  },
  // точки вsхода
  output: {
    path: __dirname + '/dist', // папка куда собират
    filename: '[name].js', // файлы куда собирать
    library: '[name]', // для доступа к экспортированнным пременным этого модуля извне (home.welcome(...))
  },

  watch: NODE_ENV == 'development', // пересобирает сборку при обновление файлов (для режима разработки watch: true')
  watchOptions: {
    aggregateTimeout: 100, // время ожидания после изменения
  },

  // devtool: 'inline-source-map',
  devtool: NODE_ENV == 'development' ? 'eval' : false, // определяем вид source-map для разных режимов

  optimization: {
    splitChunks: {
      chunks: "all",
      name: "commons",
      minSize: 1,
      // minChunks: 2
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV), // передача этой переменной в сборку как глобальную переменную
    }),
  ],

  module: {
    rules: [
      { // подключение babel
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};

if (NODE_ENV == 'production') {
  // минификация для продакшен сборки
  module.exports.optimization.minimizer = [new UglifyJsPlugin()];
};