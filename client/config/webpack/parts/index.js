const getDevServer = require('./getDevServer')
const getEntry = require('./getEntry')
const getModule = require('./getModule')
const getOptimization = require('./getOptimization')
const getOutput = require('./getOutput')
const getPlugins = require('./getPlugins')
const getResolve = require('./getResolve')
const getRest = require('./getRest')

module.exports = [
  getDevServer,
  getEntry,
  getModule,
  getOptimization,
  getOutput,
  getPlugins,
  getResolve,
  getRest
]
