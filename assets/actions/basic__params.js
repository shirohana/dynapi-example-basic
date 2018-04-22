import axios from 'axios'

export const method = 'get'
export const url = '/api/users/shirohana/books/1'

const information = `Informations:
  Express.js Routing example
  https://expressjs.com/en/guide/routing.html#route-parameters`

export default async () => {
  const { data } = await axios.get(url)
  let text = JSON.stringify(data, null, 2)
  text = `${information}\n\n${text}`
  return text
}
