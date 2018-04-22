import UserError from './user'

export default class UserNotFoundError extends UserError {
  constructor (message) {
    super(message)
    this.status = 404
  }
}
