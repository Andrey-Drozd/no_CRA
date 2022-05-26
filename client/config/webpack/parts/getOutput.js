const path = require("path")

// путь для бандл файла
module.exports = ({isDev}) => {
    return {
        output: {
            filename: isDev ? '[name].js' : '[name].[contenthash].js',
            path: path.resolve(__dirname, '../../../dist'),
            clean: true
        }
    }
}