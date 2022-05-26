module.exports = ({isDev}) => {
    return {
        // настройки сервера для разработки
        devServer: {
            hot: true,
            open: true,
            port: 3000,
            allowedHosts: 'auto',
        }
    }
}