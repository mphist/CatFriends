export default function splitToUpperCase(str: string) {
  const parts = str.split(' ')
  let string = ''
  parts.forEach(
    (part) =>
      (string =
        string === ''
          ? part[0]?.toUpperCase() + part.slice(1)
          : string + ' ' + part[0]?.toUpperCase() + part.slice(1))
  )
  return string
}
