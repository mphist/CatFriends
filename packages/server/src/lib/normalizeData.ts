type DataToNormalize = {
  city: string
  age?: string
  vaccinated?: string
  spayedOrNeutered?: string
  name?: string
}

type NormalizedData = {
  city: string
  age?: number
  vaccinated?: boolean
  spayedOrNeutered?: boolean
  name?: string
}

export default function normalizeData({
  city,
  age,
  vaccinated,
  spayedOrNeutered,
  name,
}: DataToNormalize) {
  const normalizedData: NormalizedData = {
    city: '',
    age: 0,
    vaccinated: false,
    spayedOrNeutered: false,
    name: '',
  }
  normalizedData.city = splitToUpperCase(city)
  normalizedData.age = age ? convertToMonths(age) : undefined
  normalizedData.vaccinated =
    vaccinated === undefined ? undefined : vaccinated === 'Yes' ? true : false
  normalizedData.spayedOrNeutered =
    spayedOrNeutered === undefined
      ? undefined
      : spayedOrNeutered === 'Yes'
      ? true
      : false
  normalizedData.name = name ? splitToUpperCase(name) : undefined

  return normalizedData
}

function splitToUpperCase(str: string) {
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

function convertToMonths(age: string) {
  let ageInMonths = 0
  if (age.includes('month')) {
    ageInMonths = Number(age.replace('month', ''))
  }
  if (age.includes('months')) {
    ageInMonths = Number(age.replace('months', ''))
  }
  if (age.includes('year')) {
    ageInMonths = Number(age.replace('year', '')) * 12
  }
  if (age.includes('years')) {
    ageInMonths = Number(age.replace('years', '')) * 12
  }
  return ageInMonths
}
