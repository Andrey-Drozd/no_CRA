const env = process.env['NODE_ENV'] || 'development'
const isBundleAnalyzer = process.env['BUNDLE_ANALYZER'] || false
const isDev = env === 'development'

module.exports = (parts) =>
  parts.reduce(
    (acc, part) => ({
      ...acc,
      ...part({ isBundleAnalyzer, isDev })
    }),
    {}
  )
