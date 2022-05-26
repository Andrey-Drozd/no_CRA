module.exports = () => {
    return {
        // оптимизация импортируемых библиотек (отдельный бандл с импортами для переиспользования)
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    }
}