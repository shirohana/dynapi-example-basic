import './style/index.styl'
import axios from 'axios'
import actions from './actions'

axios.defaults.baseURL = (process.env.ROOT || '') + '/api'

;(function (document) {
  const viewer = document.getElementById('viewer')

  Object.keys(actions).forEach(key => {
    let { id, method, url, default: handle } = actions[key]
    method = method.toUpperCase()

    const el = document.getElementById(key)

    if (el) {
      el.addEventListener('click', async () => {
        let text = await handle(axios)
        const now = new Date()
        text = `${now}\n${method} ${url}\n\n${text}`
        viewer.innerText = text
      })
    }
  })
})(document)
