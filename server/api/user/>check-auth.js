import UserUnauthorizedError from '~error/user-unauthorized'

export default (req, res, next) => {
  req.paths.push('user/>check-auth.js')

  if (req.session.user) {
    return next()
  }

  switch (req.request) {
    case 'GET /user/public':
    case 'POST /user/sign-in':
      return next()
  }

  throw new UserUnauthorizedError()
}
