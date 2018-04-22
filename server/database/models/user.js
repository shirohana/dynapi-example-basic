const FAKE_USERNAME = 'shirohana'
const FAKE_PASSWORD = 'pyon-pyon-pyon'

// Fake user model
export default class User {
  constructor (body) {
    Object.assign(this, body)
  }

  // Implement your user authentication logic
  static async find (username) {
    await new Promise(resolve => setTimeout(resolve, 50))

    if (username !== FAKE_USERNAME) {
      return null
    }
    return new User({ _id: 1, username: username, authorized: false })
  }

  attempt (password) {
    if (password === FAKE_PASSWORD) {
      this.authorized = true
      return true
    }
    return false
  }
}
