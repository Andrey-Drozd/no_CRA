module.exports = ({ isDev }) => ({
  // карты
  devtool: isDev ? 'source-map' : false,

  // режим приложения
  mode: isDev ? 'development' : 'production'
})
