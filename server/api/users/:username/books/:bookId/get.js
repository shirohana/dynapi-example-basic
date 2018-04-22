// Express.js Routing example
// https://expressjs.com/en/guide/routing.html#route-parameters

export default (req, res) => {
  req.paths.push('users/:username/books/:bookId/get.js')

  // These will be set in middlewares
  const user = req.user || null
  const book = req.book || null

  res.json({
    user: user,
    book: book
  })
}
