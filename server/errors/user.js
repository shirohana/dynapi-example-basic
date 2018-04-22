export default class UserError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
  }
}
