export const method = 'post'
export const url = '/user/sign-in'

export default async (axios) => {
  try {
    const { data } = await axios.post(url, {
      username: 'shirohana',
      password: 'pyon-pyon-pyon'
    })
    return JSON.stringify(data, null, 2)
  } catch (err) {
    const { data } = err.response
    return err.message + ' ' + JSON.stringify(data, null, 2)
  }
}
