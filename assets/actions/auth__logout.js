import axios from 'axios'

export const method = 'post'
export const url = '/api/user/sign-out'

export default async () => {
  try {
    const { data } = await axios.post(url)
    return JSON.stringify(data, null, 2)
  } catch (err) {
    const { data } = err.response
    return err.message + ' ' + JSON.stringify(data, null, 2)
  }
}
