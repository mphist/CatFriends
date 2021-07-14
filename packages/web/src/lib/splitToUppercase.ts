export default function splitToUpperCase(str: string) {
  const parts = str.split(' ')
  let string = ''
  parts.forEach((part) => {
    if (part.includes('-')) {
      const dashLoc = part.indexOf('-')
      string =
        part[0]?.toUpperCase() +
        part
          .slice(1)
          .replace(
            `-${part[dashLoc + 1]}`,
            ` ${part[dashLoc + 1].toUpperCase()}`
          )
    } else if (string === '') {
      string = part[0]?.toUpperCase() + part.slice(1)
    } else {
      string = string + ' ' + part[0]?.toUpperCase() + part.slice(1)
    }
  })
  return string
}
