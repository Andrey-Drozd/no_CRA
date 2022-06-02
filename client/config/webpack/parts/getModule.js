const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// модули (функции)
module.exports = ({ isDev }) => ({
  module: {
    rules: [
      {
        exclude: /node_modules/,
        generator: {
          filename: 'images/[name]-[contenthash:8][ext]'
        },
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset/resource'
      },
      {
        exclude: /node_modules/,
        generator: {
          filename: 'fonts/[name][ext]'
        },
        test: /\.(ttf|otf|eot|woff|woff2)$/i,
        type: 'asset/resource'
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx|ts|tsx)$/i,
        use: [
          {
            loader: 'babel-loader', // есть аналог esbuild-loader
            options: {
              plugins: [isDev && require.resolve('react-refresh/babel')].filter(
                Boolean
              )
            }
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.(sc|c)ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false // для задания модульности css (уникальные стили)
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
})
