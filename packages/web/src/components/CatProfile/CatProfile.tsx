import { css } from '@emotion/react'
import { doris } from '../../assets/images'

type CatProfileProps = {}

export default function CatProfile({}: CatProfileProps) {
  return (
    <div css={catProfile}>
      <div css={imageSection}>
        <img src={doris} alt="doris" />
      </div>
      <div css={textSection}>
        <h2>Doris</h2>
        <br />
        <p>
          <strong>Age:</strong> {`3 months old`}
        </p>
        <p>
          <strong>Sex:</strong> {`F`}
        </p>
        <p>
          <strong>Personality:</strong> {`Playful and crazy`}
        </p>
        <p>
          <strong>Location:</strong> {`Toronto`}
        </p>
        <p>
          <strong>Spayed/Neutered:</strong> {`Yes`}
        </p>
        <p>
          <strong>Vaccines:</strong> {`Yes`}
        </p>
      </div>
    </div>
  )
}

const imageSection = css`
  width: 50%;
  text-align: center;
  img {
    width: 40rem;
    object-fit: cover;
  }
`

const textSection = css`
  margin-top: 10rem;
  h2 {
    text-align: center;
  }
`

const catProfile = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
