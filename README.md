npm install webpack webpack-cli --save-dev

запуск: 
    npx webpack
    npx webpack --node-env development

    npx webpack --node-env production

    npx webpack --display-modules

npx webpack --help
npx webpack --help=verbose
# статистика по сборке (https://webpack.github.io/analyse/)
npx webpack --profile --json=compilation-stats.json
