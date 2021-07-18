import { css } from '@emotion/react'
import { paw } from '../../assets/images'
import { useCatState } from '../../atoms/cat'
import { useModalState } from '../../atoms/modal'
import { useOverlayState } from '../../atoms/overlay'
import splitToUpperCase from '../../lib/splitToUppercase'
import { Result } from '../Search/Search'

type CardProps = {
  result: Result
}

export default function Card({ result }: CardProps) {
  const {
    id,
    age,
    breed,
    city,
    country,
    description,
    gender,
    media,
    name,
    spayed_neutered,
    vaccinated,
  } = result

  const [, setShowModal] = useModalState()
  const [, setOverlayState] = useOverlayState()
  const [, setCatState] = useCatState()

  const renderCatProfile = () => {
    setCatState({ ...result, breed: splitToUpperCase(breed) })
    setShowModal(true)
    setOverlayState({ show: false, disableScrolling: true })
  }

  return (
    <div css={card} onClick={renderCatProfile}>
      <div css={imageSection}>
        <img src={media[0] || paw} alt={`${name}`} />
      </div>
      <div css={textSection}>
        <h3>{name}</h3>
        <div>
          <p>
            <span>Age: </span>
            {age > 12 ? age / 12 + ' year(s)' : age + ' month(s)'}
          </p>
          <p>
            <span>Breed:</span> {splitToUpperCase(breed)}
          </p>
          <p>
            <span>Sex:</span> {gender[0]}
          </p>
          <p>
            <span>Description: </span>
            {description}
          </p>
          <p>
            <span>Location:</span> {city + ', ' + country}
          </p>
          <p>
            <span>Spayed/Neutered:</span> {spayed_neutered ? 'Yes' : 'No'}
          </p>
          <p>
            <span>Vaccinated:</span> {vaccinated ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  )
}

const imageSection = css`
  cursor: pointer;
  width: 40%;
  height: 23rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
  }
`

const textSection = css`
  cursor: pointer;
  width: 60%;
  height: 22rem;
  padding: 0.5rem;
  background: #eaeaea;
  border-radius: 0 0.5rem 0.5rem 0;
  div {
    padding: 0 1rem;
    height: 16rem;
  }
  span {
    font-weight: bold;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 21rem;
    line-height: 1.5rem;
  }

  h3 {
    text-align: center;
  }
`

const card = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 100%;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin: 1rem;
`
