import { css } from '@emotion/react'
import { useEffect, useMemo, useRef } from 'react'
import { useSearchState } from '../../atoms/search'
import searchCats, { SearchFields } from '../../lib/api/searchCats'
import splitToUppercase from '../../lib/splitToUppercase'
import Card from '../Card'

export type SearchProps = {
  fields: SearchFields
  results: Result[] | null
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

function Search({
  fields,
  results,
  cityName,
}: SearchProps & { cityName: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [searchState, setSearchState] = useSearchState()

  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            if (!searchState.lastPage) {
              // fetch the next 5 cats from db
              setSearchState({ ...searchState, loading: true })
              const results = await searchCats(fields, 5 * searchState.pageNum)
              const data = results.data

              if (!data.length) {
                setSearchState({
                  ...searchState,
                  loading: false,
                  lastPage: true,
                })
                return
              }

              if (
                searchState &&
                searchState.result &&
                searchState.result.length
              ) {
                const newResults = searchState.result.concat(data)
                setSearchState({
                  ...searchState,
                  result: newResults,
                  loading: false,
                  pageNum: searchState.pageNum + 1,
                })
              }
            }
          }
        })
      }),
    [fields, setSearchState, searchState]
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
  }, [results, observer, fields])

  console.log(searchState)

  return (
    <div css={searchResultsWrapper}>
      {results?.map((result: Result) => (
        <Card key={result.id} result={result} />
      ))}
      <div ref={ref} />
      {!searchState.loading && searchState.lastPage && (
        <div>
          <br />
          {results?.length ? (
            <p>{`You've seen all the cats we have in ${splitToUppercase(
              cityName
            )}. Check again later for new cats.`}</p>
          ) : (
            <p>{`Looks like we don't have any cats in ${splitToUppercase(
              cityName
            )} ${
              fields.breed ? 'that match your selections yet' : 'yet'
            }. Check again later for new cats.`}</p>
          )}
        </div>
      )}
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
