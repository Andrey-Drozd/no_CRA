const entry = require('./entry.js')
const output = require('./output.js')
const loaders = require('./loaders.js')
const plugins = require('./plugins.js')
const others = require('./others.js')
const optimization = require('./optimization.js')

module.exports = [
    entry,
    output,
    loaders,
    plugins,
    others,
    optimization
]