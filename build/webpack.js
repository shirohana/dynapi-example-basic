const { writeFileSync } = require('fs')
const webpack = require('webpack')
const config = require('./webpack.config')

const compiler = webpack(config)
let watcher = null

const wrapper = {
  compiler: compiler,
  build (assetsFile) {
    compiler.run((err, stats) => {
      if (err) { return }
      if (assetsFile) {
        saveAssetsSync(assetsFile, stats)
      }
    })
  },
  watch (assetsFile) {
    watcher = compiler.watch({}, (err, stats) => {
      if (err) { return }
      console.warn('* Bundle build completed *')
      if (assetsFile) {
        saveAssetsSync(assetsFile, stats)
      }
    })
  },
  close () {
    if (watcher !== null) {
      watcher.close()
      watcher = null
    }
  }
}

function saveAssetsSync (assetsFile, stats) {
  const { publicPath, assets } = stats.toJson({ chunks: true })
  const wrapped = assets.map(asset => `'${publicPath + asset.name}'`)
  writeFileSync(assetsFile, `export default [${wrapped.join(', ')}]`)
}

module.exports = wrapper

// Executed directly, treat as executable
if (require.main === module) {
  execute(process.argv.slice(2))
}

function execute (argv) {
  if (argv.length !== 2) {
    exitUsage()
  }
  const [mode, assertFile] = argv
  switch (mode) {
    case '--build':
      wrapper.build(assertFile)
      break

    case '--watch':
      wrapper.watch(assertFile)
      break

    default:
      exitUsage()
  }
}

function exitUsage () {
  console.warn('> Usage: node ./build/webpack.js (--build|--watch) assertFilePath')
  process.exit(1)
}
