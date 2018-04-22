import User from '~model/user'
import UserNotFoundError from '~error/user-not-found'
import UserUnauthorizedError from '~error/user-unauthorized'

export default async (req, res) => {
  req.paths.push('user/postSignIn.js')

  if (req.session.user) {
    return res.json({
      message: 'Already signed in'
    })
  }

  const { body } = req

  const user = await User.find(body.username)

  if (user === null) {
    throw new UserNotFoundError('User not found')
  }

  if (!user.attempt(body.password)) {
    throw new UserUnauthorizedError('Wrong password')
  }

  req.session.user = user
  res.json({ user })
}
