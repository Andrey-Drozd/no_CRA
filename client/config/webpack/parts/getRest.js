module.exports = ({ isDev }) => ({
  // режим приложения
  mode: isDev ? 'development' : 'production',

  // карты
  devtool: isDev ? 'source-map' : false,
});
