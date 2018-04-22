export default async (req, res) => {
  req.paths.push('user/postSignOut.js')

  if (req.session.user) {
    delete req.session.user
  }

  res.json({})
}
