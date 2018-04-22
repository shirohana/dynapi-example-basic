export default (req, res) => {
  req.paths.push('getHelloWorld.js')

  res.json({
    message: 'Hello, world!'
  })
}
