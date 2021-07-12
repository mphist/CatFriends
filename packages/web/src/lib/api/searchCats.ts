import { Result } from '../../components/Search/Search'
import client from './client'

export type SearchFields = {
  city: string
  country: string
  gender: string | undefined
  age: string
  breed: string | undefined
  vaccination: string | undefined
  spayNeuter: string | undefined
}

export default async function searchCats(
  { city, country, gender, age, breed, vaccination, spayNeuter }: SearchFields,
  offset?: number
) {
  const res = await client.post<Result[]>('/cat/search', {
    city,
    country,
    gender,
    age,
    breed,
    vaccination,
    spayNeuter,
    offset,
  })
  return res
}
