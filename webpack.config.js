'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development'; // Переменная окружения для определения режима сборки
console.log(NODE_ENV)
const webpack = require('webpack');

module.exports = {
  entry: './home', // точка входа
  output: {
    filename: 'build.js', // куда собирать
    library: 'home', // для доступа к экспортированнным пременным этого модуля извне (home.welcome(...))
  },

  watch: NODE_ENV == 'development', // пересобирает сборку при обновление файлов (для режима разработки watch: true')
  watchOptions: {
    aggregateTimeout: 100, // время ожидания после изменения
  },

  // devtool: 'source-map',
  devtool: NODE_ENV == 'development' ? 'eval' : null, // определяем вид source-map для разных режимов

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV), // передача этой переменной в сборку как глобальную переменную
    })
  ]

};