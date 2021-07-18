import { css } from '@emotion/react'
import { useState } from 'react'
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
    owner,
  } = data

  const [idx, setIdx] = useState(0)

  const changeDisplay = (e: any) => {
    setIdx(e.target.id)
  }

  return (
    <div>
      <div css={catProfile}>
        <div css={previewSection}>
          {media.length > 1 &&
            media.map((url, idx) => (
              <img
                id={idx.toString()}
                src={url}
                alt={`preview-${idx}`}
                onClick={changeDisplay}
              />
            ))}
        </div>
        <div css={imageSection}>
          <img src={media[idx] || paw} alt={name} />
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
      <div css={footNote}>
        <h4>
          If you are interested in adopting this cat, please contact the owner.
        </h4>
      </div>
      <div css={ownerProfile}>
        <span>
          <strong>Owner:</strong> {owner?.displayname}
        </span>
        <span>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${owner?.email}`}>{owner?.email}</a>
        </span>
      </div>
    </div>
  )
}

const footNote = css`
  text-align: center;
  height: 5rem;
`

const ownerProfile = css`
  height: 3rem;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    a {
      text-decoration: none;
      color: black;
    }
  }
`

const previewSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;

  img {
    margin: 0.2rem;
    border: 1px solid #d0d0d0;
    width: 99%;
    cursor: pointer;
  }
`

const imageSection = css`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 60%;
    max-width: 60%;
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
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
