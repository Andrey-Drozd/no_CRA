const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (env = {}) => {
    const { mode = 'development' } = env
    const isDev = mode === 'development'

    return {
        // режим приложения
        mode: isDev ? 'development' : 'production',

        // модули (функции)
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg|ico)$/i,
                    exclude: /node_modules/,
                    type: 'asset/resource',
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:8].[ext]',
                                esModule: false
                            },
                        },
                    ],
                    type: 'javascript/auto'
                },
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/i,
                    exclude: /node_modules/,
                    type: 'asset/resource',
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.(js|jsx)$/i,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                            },
                        },
                    ],
                },
                {
                    test: /\.(sc|c)ss$/i,
                    exclude: /node_modules/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader', // лоадер для преобразования CSS - в модуль JavaScript
                            options: {
                                modules: false, // для задания модульности css (уникальные стили)
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "postcss-preset-env", {}
                                        ]
                                    ],
                                },
                            },
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ]
                },
            ]
        },

        // путь в entry файл[ы]
        entry: {
            main: ("./src/index.js"),
        },

        // путь для бандл файла
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: isDev ? '[name].js' : '[name].[hash:8].js',
            clean: true
        },

        // карты
        devtool: isDev ? 'source-map' : false,

        // оптимизация импортируемых библиотек (отдельный бандл с импортами для переиспользования)
        optimization: {
            splitChunks:{ chunks: 'all' }
        },

        // чтобы не указывать импорт с расширеням
        // можно дополнить указав alias, для задания импортов типа import Utility from 'Utilities/utility'
        resolve: {
            extensions: ['*', '.js', '.jsx', '.css', '.scss']
        },

        // плагины (классы)
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
        ].filter(Boolean),

        // настройки сервера для разработки
        devServer: {
            hot: true,
            open: true,
            port: 3000,
        },
    }
}