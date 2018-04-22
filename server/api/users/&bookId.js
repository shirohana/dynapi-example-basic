export const pattern = /\d+/

export default (req, res, next, bookId) => {
  req.paths.push('users/&bookId.js')

  req.book = { _id: bookId, books: [] }
  next()
}
