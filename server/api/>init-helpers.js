export default (req, res, next) => {
  req.paths = []
  req.paths.push('>init-helpers.js')

  req.request = `${req.method} ${req.path}`

  res._json = res.json
  res.json = jsonResponse.bind({ req, res })

  next()
}

function jsonResponse (obj) {
  this.res._json(Object.assign({
    paths: this.req.paths
  }, obj))
}
