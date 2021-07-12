import { css } from '@emotion/react'
import { useEffect, useMemo, useRef } from 'react'
import { useSearchState } from '../../atoms/search'
import searchCats, { SearchFields } from '../../lib/api/searchCats'
import Card from '../Card'

export type SearchProps = {
  fields: SearchFields
  results: Result[]
}

export type Result = {
  id: string
  age: number
  breed: string
  city: string
  country: string
  createdAt: string
  description: string
  gender: string
  media: string[]
  name: string
  owner: { displayname: string; photoUrl: string }
  spayed_neutered: boolean
  vaccinated: boolean
}

function Search({ fields, results }: SearchProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [searchResults, setSearchResults] = useSearchState()
  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            const results = await searchCats(fields, 5)
            const data = results.data
            if (searchResults) setSearchResults(searchResults.concat(data))
          }
        })
      }),
    [fields, setSearchResults]
  )

  useEffect(() => {
    const el = ref.current
    if (!results) return
    if (!el) return
    observer.observe(el)

    return () => {
      if (el) {
        observer.unobserve(el)
      }
    }
  }, []) // empty dependency array because of an infinite loop

  return (
    <div css={searchResultsWrapper}>
      {results.map((result: Result) => (
        <Card key={result.id} result={result} />
      ))}
      <div ref={ref} />
    </div>
  )
}

const searchResultsWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Search
