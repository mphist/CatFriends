import { css } from '@emotion/react'
import { doris, nala } from '../../assets/images'

type CatProfileProps = {}

export default function CatProfile({}: CatProfileProps) {
  return (
    <div css={catProfile}>
      <div css={imageSection}>
        <img src={doris} alt='doris' />
      </div>
      <div css={textSection}>
        <h2>Nala</h2>
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
  img {
    width: 30rem;
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
