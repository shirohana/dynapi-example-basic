import UserNotFoundError from '~error/user-not-found'

export const catches = UserNotFoundError

export default (err, req, res, next) => {
  req.paths.push('#user-not-found.js')
  res.status(404).json({
    message: err.message || 'User Not Found'
  })
}
