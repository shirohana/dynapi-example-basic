export const method = 'post'
export const url = '/user/sign-out'

export default async (axios) => {
  try {
    const { data } = await axios.post(url)
    return JSON.stringify(data, null, 2)
  } catch (err) {
    const { data } = err.response
    return err.message + ' ' + JSON.stringify(data, null, 2)
  }
}
