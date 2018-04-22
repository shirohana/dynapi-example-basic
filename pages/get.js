import assets from '~/dist/assets.js'

export default (req, res) => {
  res.render('index', {
    assets: assets,
    apiGroups: {
      'Basic': [
        ['basic__hello-world', 'Hello, world!'],
        ['basic__params', 'Work with parameters']
      ],
      'Example - Authentication': [
        ['auth__public', 'Get public content'],
        ['auth__secret', 'Get secret content'],
        ['auth__login', 'Sign in (with correct name/pass)'],
        ['auth__login--non-exists', 'Sign in (with non-exists user)'],
        ['auth__logout', 'Sign out']
      ]
    }
  })
}
