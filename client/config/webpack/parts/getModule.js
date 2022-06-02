const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// модули (функции)
module.exports = ({ isDev }) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        exclude: /node_modules/,
        generator: {
          filename: 'images/[name]-[contenthash:8][ext]'
        },
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/i,
        exclude: /node_modules/,
        generator: {
          filename: 'fonts/[name][ext]'
        },
        type: 'asset/resource'
      },
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
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
        test: /\.(sc|c)ss$/i,
        exclude: /node_modules/,
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
