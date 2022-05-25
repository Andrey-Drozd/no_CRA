const buildConfig = require('./config/webpack/buildConfig')

const env = process.env.NODE_ENV || 'development'
const isAnalyzer = process.env.ANALYZER || false
const isDev = env === 'development'

const buildConfiguration = (buildConfig) => {
    return buildConfig.reduce(
        (acc, part) => {
            return ({
                ...acc,
                ...part({isDev, isAnalyzer})
            })
        }, {}
    )
}

module.exports = buildConfiguration(buildConfig)