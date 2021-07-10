export default function getFileUrls(results: any[]) {
  const fileUrls: string[] = []
  results.forEach((result) => {
    fileUrls.push(result.data.data.link)
  })
  return fileUrls
}
