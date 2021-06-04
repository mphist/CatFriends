import { css } from '@emotion/react'
import { paws_left, paws_right } from '../../assets/images'

export type PosterProps = {}

function Poster({}: PosterProps) {
  return (
    <div css={posterTop}>
      <img src={paws_left} alt='paws_left' />
      <div css={text}>
        <h2>Need to find a home for your furry friends?</h2>
        <h2>Want to find your purry companion?</h2>
        <br />
        <h2>
          <strong>Sign up</strong> to see cats nearby
        </h2>
        <h2>or</h2>
        <h2>get yours a new home.</h2>
      </div>
      <img src={paws_right} alt='paws_right' />
    </div>
  )
}

const text = css`
  text-align: center;
  h2 {
    font-weight: lighter;
  }
`

const posterTop = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 6rem;
  }
  margin: 4rem 0;
`

export default Poster
