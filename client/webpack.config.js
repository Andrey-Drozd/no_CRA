const buildConfig = require('./config/webpack/buildConfig')

const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

const buildConfiguration = (buildConfig) => {
    return buildConfig.reduce(
        (acc, part) => {
            return ({
                ...acc,
                ...part({isDev})
            })
        }, {}
    )
}

module.exports = buildConfiguration(buildConfig)