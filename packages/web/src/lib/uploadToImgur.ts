import axios from 'axios'
import { ACCESS_TOKEN } from '../keys'

export default async function uploadToImgur(
  files: (ArrayBuffer | undefined)[]
) {
  // return new Promise(async (resolve, reject) => {
  //   files.forEach(async (file) => {
  //     if (!file) return
  //     return new Promise(async () => {
  //       try {
  //         const res = await axios.post('https://api.imgur.com/3/image', file, {
  //           headers: {
  //             Authorization: 'Bearer f4a41751c264b6d62425472716d8369e9ca4e761',
  //           },
  //         })
  //         resolve(results.push(res))
  //       } catch (e) {
  //         console.error(e)
  //       }
  //     })
  //   })
  //   Promise.all()
  // })
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
