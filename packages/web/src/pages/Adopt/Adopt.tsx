import { css } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { useOverlayState } from '../../atoms/overlay'
import { useSearchState } from '../../atoms/search'
import BreedSelector from '../../components/BreedSelector'
import ConfirmBox from '../../components/ConfirmBox'
import Overlay from '../../components/Overlay'
import Search from '../../components/Search'
import Spinner from '../../components/Spinner'
import searchCats from '../../lib/api/searchCats'

type AdoptProps = {}

export default function Adopt({}: AdoptProps) {
  const [breed, setBreed] = useState<string | undefined>(undefined)
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [vaccination, setVaccination] = useState<string | undefined>(undefined)
  const [gender, setGender] = useState<string | undefined>(undefined)
  const [spayNeuter, setSpayNeuter] = useState<string | undefined>(undefined)
  const [validationPassed, setValidationPassed] = useState(false)
  // const [searchResults, setSearchResults] = useState<Result[] | null>(null)
  const [searchState, setSearchState] = useSearchState()
  const [overlay, setOverlay] = useOverlayState()
  const [cityName, setCityName] = useState('')

  const ageRef = useRef<HTMLInputElement | null>(null)

  const fields = { city, country, gender, age, breed, vaccination, spayNeuter }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCityName(city)
    // search in db
    setSearchState({
      ...searchState,
      loading: true,
      lastPage: false,
      pageNum: 1,
    })
    setOverlay({ show: true, disableScrolling: true })
    try {
      const results = await searchCats(fields)
      setOverlay({ show: false, disableScrolling: false })
      setSearchState({
        result: results.data,
        pageNum: 1,
        loading: false,
        lastPage: false,
      })
    } catch (e) {
      setSearchState({
        ...searchState,
        loading: false,
      })
      if (e.message === 'Network Error') {
        setOverlay({ show: true, disableScrolling: true })
      }
    }
  }

  useEffect(() => {
    ageRef.current?.focus()
    setSearchState({
      result: null,
      loading: false,
      lastPage: false,
      pageNum: 1,
    })
  }, [])

  useEffect(() => {
    if (city && country) setValidationPassed(true)
    else setValidationPassed(false)
  }, [city, country])

  return (
    <div css={adopt}>
      <form onSubmit={onSubmit}>
        <div className='gridBox'>
          <div>
            <label>Age:</label>
            <input
              ref={ageRef}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder='e.g., 5 months, 2 years'
            />
          </div>
          <div>
            <label>City (required):</label>
            <input value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label>Country (required):</label>
            <div css={radioButton('12rem')}>
              <input
                type='radio'
                id='us'
                name='country'
                value='US'
                onChange={() => setCountry('US')}
              />
              <label>US</label>
              <input
                type='radio'
                id='canada'
                name='country'
                value='Canada'
                onChange={() => setCountry('Canada')}
              />
              <label>Canada</label>
            </div>
          </div>
          <div>
            <label>Breed:</label>
            <BreedSelector breed={breed} setBreed={setBreed} />
          </div>
          <div>
            <label>Vaccination:</label>
            <div css={radioButton('10rem')}>
              <input
                type='radio'
                id='yes'
                name='vaccine'
                value='yes'
                onChange={() => setVaccination('Yes')}
              />
              <label>Yes</label>
              <input
                type='radio'
                id='no'
                name='vaccine'
                value='no'
                onChange={() => setVaccination('No')}
              />
              <label>No</label>
            </div>
          </div>
          <div>
            <label>Gender of your cat:</label>
            <div css={radioButton('15rem')}>
              <input
                type='radio'
                id='male'
                name='gender'
                value='male'
                onChange={() => setGender('Male')}
              />
              <label>Male</label>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                onChange={() => setGender('Female')}
              />
              <label>Female</label>
            </div>
          </div>
          <div>
            <label>Spayed / Neutered:</label>
            <div css={radioButton('10rem')}>
              <input
                type='radio'
                id='yes'
                name='spayed_neutered'
                value='yes'
                onChange={() => setSpayNeuter('Yes')}
              />
              <label>Yes</label>
              <input
                type='radio'
                id='no'
                name='spayed_neutered'
                value='no'
                onChange={() => setSpayNeuter('No')}
              />
              <label>No</label>
            </div>
          </div>
        </div>
        <button type='submit' disabled={!validationPassed}>
          Search
        </button>
      </form>
      {searchState && (
        <Search
          fields={fields}
          cityName={cityName}
          results={searchState.result}
        />
      )}
      <Overlay show={overlay.show}>
        {searchState.loading ? (
          <Spinner />
        ) : (
          <ConfirmBox message='Something went wrong. We will be right back!' />
        )}
      </Overlay>
    </div>
  )
}

const adopt = css`
  .gridBox {
    height: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  form {
    button {
      width: 10rem;
      margin: 3rem auto;
      background: #62c1db;
      font-size: 1.5rem;
      padding: 1.5rem;
      color: white;
      cursor: pointer;
      font-family: 'chelsea market';
      border: none;
      &:disabled {
        background: #9c9c9c;
        cursor: default;
      }
    }

    width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    select {
      padding: 0.5rem;
      border-radius: 0;
      font-size: 1.2rem;
      &:focus {
        outline: none;
      }
    }
    label {
      padding: 0.5rem 0;
    }

    div {
      display: flex;
      flex-direction: column;
      font-size: 1.3rem;
      padding: 1rem 2rem;

      span {
        padding: 3rem 0;
      }
      input {
        font-size: 1.2rem;
        width: 25rem;
        padding: 0.5rem;
        /* border: none; */
        &:focus {
          outline: none;
        }
        /* border-radius: 0.5rem; */
        border: 1px solid gray;
      }
    }
  }
`

const radioButton = (width: string) => css`
  flex-direction: row !important;
  justify-content: flex-start;
  align-items: center;
  padding: 0 !important;
  width: ${width} !important;
  height: 5rem;
`
