const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = ({ isDev, isBundleAnalyzer }) => {
  const plugins = [];

  const sharedPlugins = [
    // создаст основной html и свяжет билд JS
    new HtmlWebPackPlugin({
      title: 'no CRA',
      favicon: './public/favicon.ico',
      template: './public/index.html',
    }),
  ];

  const devPlugins = [
    // горячяя перезагрузка
    new ReactRefreshWebpackPlugin(),
  ];

  const prodPlugins = [
    // извлекат css в отдельные файлы и добавляет ссылки на эти файлы в HTML документ
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ];

  if (isDev) {
    plugins.push(...devPlugins);
  } else {
    plugins.push(...prodPlugins);
    if (isBundleAnalyzer) plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    plugins: [...plugins, ...sharedPlugins].filter(Boolean),
  };
};
