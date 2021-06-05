import { css } from '@emotion/react'
import { paw, paws_left, paws_right, two_cats } from '../../assets/images'

export type PosterProps = {}

function Poster({}: PosterProps) {
  return (
    // <div css={posterTop}>
    //   <img src={paws_left} alt="paws_left" />
    //   <div css={text}>
    //     <h2>Need to find a home for your furry friends?</h2>
    //     <h2>Want to find your purry companion?</h2>
    //     <br />
    //     <h2>
    //       <strong>Sign up</strong> to see cats nearby
    //     </h2>
    //     <h2>or</h2>
    //     <h2>get yours a new home.</h2>
    //   </div>
    //   <img src={paws_right} alt="paws_right" />
    // </div>

    <div css={posterTop}>
      <div css={left}>
        <img id="left" src={paw} alt="paw" />
        <img id="right" src={paw} alt="paw" />
        <img id="bottom" src={paw} alt="paw" />

        <div css={text}>
          <h2>Need to find a home for your furry friends?</h2>
          <h2>Want to find your purry companion?</h2>
          <br />
          <h2>
            <strong>Sign up</strong> to see cats nearby
          </h2>
          <h2>or get yours a new home!</h2>
        </div>
      </div>
      <div css={right}>
        <img src={two_cats} alt="two_cats" />
      </div>
    </div>
  )
}

const right = css`
  img {
    width: 50rem;
  }
`

const left = css`
  position: relative;
  img {
    position: absolute;
    width: 3rem;
  }
  #left {
    left: -3rem;
    top: 8rem;
    transform: rotate(-40deg);
  }
  #right {
    left: 33rem;
    top: 3rem;
    transform: rotate(20deg);
  }
  #bottom {
    left: 13rem;
    top: 16rem;
  }
`

const text = css`
  text-align: center;
  h2 {
    font-weight: lighter;
    letter-spacing: 0.5px;
    strong {
      color: #77c7f5;
    }
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
