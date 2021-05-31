'use strict';

module.exports = {
  entry: './home', // точка входа
  output: {
    filename: 'build.js', // куда собирать
    library: 'home', // для доступа к экспортированнным пременным этого модуля извне (home.welcome(...))
  },

  watch: true, // пересобирает сборку при обновление файлов
  watchOptions: {
    aggregateTimeout: 100, // время ожидания после изменения
  },
};