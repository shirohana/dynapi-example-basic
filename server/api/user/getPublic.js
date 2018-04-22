export default (req, res) => {
  req.paths.push('user/getPublic.js')

  res.json({
    message: 'You can access this message without authentication',
    user: req.session.user || null
  })
}
