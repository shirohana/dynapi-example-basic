const requireModule = require.context('.', false, /\.js$/)

const actions = {}

requireModule.keys().forEach(filename => {
  if (filename === './index.js')
    return
  const moduleName = filename.replace(/(\.\/|\.js)/g, '')
  actions[moduleName] = Object.assign({
    id: moduleName
  }, requireModule(filename))
})

export default actions
