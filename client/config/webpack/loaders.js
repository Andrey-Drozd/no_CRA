const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// модули (функции)
module.exports = ({isDev}) => {
    return {
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
        }
    }
}