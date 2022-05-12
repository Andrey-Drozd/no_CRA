const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
// режим приложения
mode: isDevelopment ? 'development' : 'production',

// модули (функции)
module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            exclude: /node_modules/,
            type: 'asset/resource',
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name]-[sha1:hash:7].[ext]',
                        esModule: false
                    },
                },
            ],
            type: 'javascript/auto'
        },

        // {
        //     test: /\.(ttf|otf|eot|woff|woff2)$/i,
        //     exclude: /node_modules/,
        //     type: 'asset/resource',
        //     use: [
        //         {
        //             loader: 'file-loader',
        //             options: {
        //                 outputPath: 'fonts',
        //                 name: '[name].[ext]',
        //             },
        //         },
        //     ],
        // },


        {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                    },
                },
            ],
        },
        {
            test: /\.(sc|c)ss$/i,
            exclude: /node_modules/,
            use: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
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

// путь в entry файл
entry: {
    main: ("./src/index.js")
},

// путь для бандл файла
output: {
    path: path.resolve(__dirname, './dist'),
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
},

// чтобы не указывать импорт с расширеням
// можно дополнить указав alias, для задания импортов типа import Utility from 'Utilities/utility'
resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
},

// плагины (классы)
plugins: [
    // создает уникальный файл бандла с хешэм и удаляет старые бандлы
    new CleanWebpackPlugin(),

    // создаст основной html и свяжет билд JS
    new HtmlWebPackPlugin({
        buildTime: new Date().toISOString(),
        template: './src/index.html',
        favicon: './public/favicon.ico'
    }),

    // извлекат css в отдельные файлы и добавляет ссылки на эти файлы в HTML документ (для мастера)
    new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[contenthash].css'
    }),

    // горячяя перезагрузка
    isDevelopment && new ReactRefreshWebpackPlugin()
].filter(Boolean),

// настройки сервера для разработки
devServer: {
    port: 3000,
    hot: true,
},
}