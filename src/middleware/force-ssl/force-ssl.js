module.exports = (req, res, next) => {
  if (req.get('X-Forwarded-Proto') !== 'https' && req.hostname !== 'localhost') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  next()
}
