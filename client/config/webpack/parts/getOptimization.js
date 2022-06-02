module.exports = () => ({
  // оптимизация импортируемых библиотек (отдельный бандл с импортами для переиспользования)
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
})
