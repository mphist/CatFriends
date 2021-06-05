import { css } from '@emotion/react'
import { nala } from '../../assets/images'

type CardProps = {}

export default function Card({}: CardProps) {
  return (
    <div css={card}>
      <div css={imageSection}>
        <img src={nala} alt="nala" />
      </div>
      <div css={textSection}>
        <h3>Nala</h3>
        <p>Age: {`3 months old`}</p>
        <p>Sex: {`F`}</p>
        <p>
          Personality: {`Playful, and crazy as fuck as the next door idiot`}
        </p>
        <p>Location: {`Toronto`}</p>
        <p>Spayed/Neutered: {`Yes`}</p>
        <p>Vaccines: {`Yes`}</p>
      </div>
    </div>
  )
}

const imageSection = css`
  img {
    width: 100%;
    height: 100%;
  }
`

const textSection = css`
  h3 {
    text-align: center;
  }
  padding: 0.5rem;
  background: #eaeaea;
`

const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin: 1rem;
`
