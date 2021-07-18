import { css } from '@emotion/react'
import { useEffect, useMemo, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { catState } from '../../atoms/cat'
import { useModalState } from '../../atoms/modal'
import { useSearchState } from '../../atoms/search'
import searchCats, { SearchFields } from '../../lib/api/searchCats'
import splitToUppercase from '../../lib/splitToUppercase'
import Card from '../Card'
import CatProfile from '../CatProfile'
import Modal from '../Modal'

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
  createdAt?: string
  description: string
  gender: string
  media: string[]
  name: string
  owner?: { displayname: string; photoUrl: string }
  spayed_neutered: boolean
  vaccinated: boolean
}

function Search({
  fields,
  results,
  cityName,
  breedName,
}: SearchProps & { cityName: string; breedName: string | undefined }) {
  const ref = useRef<HTMLDivElement>(null)
  const [searchState, setSearchState] = useSearchState()
  const [showModal] = useModalState()
  const cat = useRecoilValue(catState)

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
  }, [results, observer])

  return (
    <div css={searchResultsWrapper}>
      {results?.map((result: Result, idx) => (
        <Card key={idx} result={result} />
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
              breedName ? 'that match your selections yet' : 'yet'
            }. Check again later for new cats.`}</p>
          )}
        </div>
      )}
      <Modal show={showModal}>
        <CatProfile data={cat} />
      </Modal>
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
