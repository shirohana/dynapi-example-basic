export const pattern = /[a-zA-Z0-9-_]+/

export default (req, res, next, username) => {
  req.paths.push('users/&username.js')

  req.user = {
    _id: 1,
    username: username
  }
  next()
}
