const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = ({isDev}) => {
    return {
        plugins: [
            // создаст основной html и свяжет билд JS
            new HtmlWebPackPlugin({
                title: 'no CRA',
                favicon: './public/favicon.ico',
                template: './public/index.html',
            }),

            // извлекат css в отдельные файлы и добавляет ссылки на эти файлы в HTML документ (для мастера)
            new MiniCssExtractPlugin({
                filename: isDev ? '[name].css' : '[name].[hash:8].css'
            }),

            // горячяя перезагрузка
            isDev && new ReactRefreshWebpackPlugin()
        ].filter(Boolean)
    }
}