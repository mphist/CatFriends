import { css } from '@emotion/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { kittens, side_cat, two_cats } from '../../assets/images'
import { customHTMLDivElement, useEffect, useRef, useState } from 'react'

export type PosterProps = {}

function Poster({}: PosterProps) {
  const [color, setColor] = useState('')
  // const ref = useRef<customHTMLDivElement>(null)

  // useEffect(() => {
  //   ref.current!.initialRender = true
  // }, [])

  const settings = {
    // dots: true,
    // autoplay: true,
    // fade: true,
    autoplaySpeed: 5000,
    arrows: false,
    // infinite: true,
    speed: 1000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // onInit: () => {
    //   setColor('lightblue')
    // },
    // beforeChange: () => {
    //   console.log('click')
    //   if (ref.current) {
    //     ref.current.initialRender = false
    //   }
    //   if (color === 'lightblue') setColor('pink')
    //   if (color === 'pink') setColor('lightgreen')
    //   if (color === 'lightgreen') setColor('lightblue')
    // },
  }

  return (
    // <div ref={ref} css={posterBlock(color, !!ref.current?.initialRender)}>
    <Slider {...settings}>
      <div css={posterTop('#7ECAE0')}>
        <div css={left}>
          <div css={text}>
            <h1>Need to find a home for</h1>
            <h1>your furry friends?</h1>
          </div>
        </div>
        <div css={right}>
          <img src={two_cats} alt="two_cats" />
        </div>
      </div>
      <div css={posterTop('#EEB3B5')}>
        <div css={left}>
          <div css={text}>
            <h1>Want to find your</h1>
            <h1>purry companion?</h1>
          </div>
        </div>
        <div css={right}>
          <img src={side_cat} alt="side_cat" />
        </div>
      </div>
      <div css={posterTop('#96D3AF')}>
        <div css={left}>
          <div css={text}>
            <h1>Sign up to see all the</h1>
            <h1>available cats nearby</h1>
            <h1>or get yours a new home!</h1>
          </div>
        </div>
        <div css={right}>
          <img src={kittens} alt="kittens" />
        </div>
      </div>
    </Slider>
    // </div>
  )
}

declare module 'react' {
  interface customHTMLDivElement extends HTMLDivElement {
    initialRender: boolean
  }
}

// const posterBlock = (color: string, initialRender: boolean) => css`
//   padding: 2rem;
//   background: ${color};
//   ${initialRender
//     ? ''
//     : css`
//         transition: background 1s;
//       `}
// `

const right = css`
  img {
    width: 50rem;
    height: 30rem;
  }
`

const left = css``

const text = css`
  font-family: 'chelsea market', cursive;
  color: white;
  letter-spacing: 1px;
  h1 {
    margin: 0;
  }
`

const posterTop = (color: string) => css`
  display: flex !important;
  justify-content: space-evenly;
  align-items: center;
  background: ${color};
`

export default Poster
