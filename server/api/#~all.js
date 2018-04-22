const production = process.env.NODE_ENV === 'production'

export default (err, req, res, next) => {
  console.error('==== UncaughtError ====')
  console.error(err)

  if (production) {
    res.sendStatus(500)
  } else {
    const message = `UncaughtError:${err.stack || err.message || err}`
    res.status(500).send(message)
  }
}
