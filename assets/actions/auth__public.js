export const method = 'get'
export const url = '/user/public'

export default async (axios) => {
  const { data } = await axios.get(url)
  return JSON.stringify(data, null, 2)
}
