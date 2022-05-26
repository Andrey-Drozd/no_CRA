module.exports = ({isDev}) => {
    return {
        // режим приложения
        mode: isDev ? 'development' : 'production',

        // карты
        devtool: isDev ? 'source-map' : false,
    }
}