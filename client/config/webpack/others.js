module.exports = ({isDev}) => {
    return {
        // режим приложения
        mode: isDev ? 'development' : 'production',

        // карты
        devtool: isDev ? 'source-map' : false,

        // настройки сервера для разработки
        devServer: {
            hot: true,
            open: true,
            port: 3000,
        },

        // чтобы не указывать импорт с расширеням
        // можно дополнить указав alias, для задания импортов типа import Utility from 'Utilities/utility'
        resolve: {
            extensions: ['*', '.js', '.jsx', '.css', '.scss']
        },
    }
}