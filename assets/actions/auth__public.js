import axios from 'axios'

export const method = 'get'
export const url = '/api/user/public'

export default async () => {
  const { data } = await axios.get(url)
  return JSON.stringify(data, null, 2)
}
