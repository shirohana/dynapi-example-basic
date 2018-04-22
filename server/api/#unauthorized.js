import UserUnauthorizedError from '~error/user-unauthorized'

export const catches = UserUnauthorizedError

export default (err, req, res, next) => {
  req.paths.push('#unauthorized.js')
  res.status(401).json({
    message: err.message || 'Unauthorized'
  })
}
