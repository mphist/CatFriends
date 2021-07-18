import { css } from '@emotion/react'
import { doris, paw } from '../../assets/images'
import { Result } from '../Search/Search'

type CatProfileProps = {
  data: Result
}

export default function CatProfile({ data }: CatProfileProps) {
  const {
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
  } = data
  return (
    <div css={catProfile}>
      <div css={imageSection}>
        <img src={media[0] || paw} alt='doris' />
      </div>
      <div css={textSection}>
        <h2>{name}</h2>
        <div>
          <p>
            <strong>Age:</strong> {`${age} month(s)`}
          </p>
          <p>
            <strong>Breed:</strong> {breed}
          </p>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>City:</strong> {city}
          </p>
          <p>
            <strong>Country:</strong> {country}
          </p>
          <p>
            <strong>Spayed/Neutered:</strong> {spayed_neutered ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Vaccines:</strong> {vaccinated ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Description: </strong>
            {description}
            {/* {`hi\n my name is\n game changer \n i will change your game \n like nobody else blablablalblkjsa sajdfkl sdaj b jklsadjfk lsaje sad fklsdafj klsaejf lksadf jklasdf jklase sadf jkls f sajkdlfj klsa fdsjklfs dfjklsaef jklsadfj klasd f jsakldfj klsdjfkljsalkdfjlsajdfljsdlfkklsajfl sad kfjlsdajfl ksjadflk jsadklf jsdklf sakldfj ksldafj klsa f jklsdj kflj llllll`} */}
          </p>
        </div>
      </div>
    </div>
  )
}

const imageSection = css`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 50%;
    width: 50%;
    object-fit: fill;
  }
`

const textSection = css`
  width: 35rem;
  height: 30rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    overflow-y: auto;
    padding: 1rem;
  }
  h2 {
    text-align: center;
  }
  p {
    margin-left: 6.2rem;
    text-indent: -6.2rem;
  }
`

const catProfile = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
