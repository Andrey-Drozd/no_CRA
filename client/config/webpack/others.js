const path = require("path")

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
            allowedHosts: 'auto',
        },
        resolve: {
            // alias, для задания импортов типа import Utility from '$Utilities/utility'
            alias: {
                $components: path.resolve(__dirname, '../../src/components')
            },
            // чтобы не указывать импорт с расширеням
            extensions: ['.js', '.jsx', 'ts', 'tsx', '.css', '.scss']
        },
    }
}