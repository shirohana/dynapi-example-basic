export const method = 'get'
export const url = '/user/secret'

export default async (axios) => {
  try {
    const { data } = await axios.get(url)
    return JSON.stringify(data, null, 2)
  } catch (err) {
    const { data } = err.response
    return err.message + ' ' + JSON.stringify(data, null, 2)
  }
}
