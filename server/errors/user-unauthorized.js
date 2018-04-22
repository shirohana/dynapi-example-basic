import UserError from './user'

export default class UserUnauthroizedError extends UserError {
  constructor (message) {
    super(message)
    this.status = 401
  }
}
