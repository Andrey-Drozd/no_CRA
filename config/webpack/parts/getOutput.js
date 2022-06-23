const path = require('path')

// путь для бандл файла
module.exports = ({ isDev }) => ({
  output: {
    clean: true,
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    path: path.resolve(__dirname, '../../../dist')
  }
})
