import axios from 'axios'
import { ACCESS_TOKEN } from '../../keys'

export default async function uploadToImgur(
  files: (ArrayBuffer | undefined)[]
) {
  const promises: any[] = []
  files.forEach((file) => {
    if (!file) return
    const res = axios.post('https://api.imgur.com/3/image', file, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
    promises.push(res)
  })
  const results = await Promise.all(promises)
  return results
}
