export default (req, res) => {
  req.paths.push('user/getSecret.js')

  res.json({
    message: 'You found the secret phrase ก(ｰ̀ωｰ́ก)',
    phrase: '今天又是ぴょんぴょん的一天'
  })
}
