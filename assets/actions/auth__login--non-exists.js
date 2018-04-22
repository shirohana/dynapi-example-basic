export const method = 'post'
export const url = '/user/sign-in'

export default async (axios) => {
  try {
    const { data } = await axios.post(url, {
      username: 'hana',
      password: 'wrong-pass'
    })
    return JSON.stringify(data, null, 2)
  } catch (err) {
    const { data } = err.response
    return err.message + ' ' + JSON.stringify(data, null, 2)
  }
}
