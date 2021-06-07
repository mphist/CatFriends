import { css } from '@emotion/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { paw, paws_left, paws_right, two_cats } from '../../assets/images'
import { customHTMLDivElement, useEffect, useRef, useState } from 'react'

export type PosterProps = {}

function Poster({}: PosterProps) {
  const [color, setColor] = useState('')
  const [initialRender, setInitialRender] = useState(false)
  const ref = useRef<customHTMLDivElement>(null)

  useEffect(() => {
    console.log('setting it true')
    ref.current!.initialRender = true
  }, [])

  const settings = {
    dots: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    // infinite: true,
    speed: 1000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    onInit: () => {
      setColor('lightblue')
      console.log(ref.current)
    },
    beforeChange: () => {
      if (ref.current) {
        ref.current.initialRender = false
      }
      if (color === 'lightblue') setColor('pink')
      if (color === 'pink') setColor('lightblue')
    },
  }

  return (
    <div ref={ref} css={posterBlock(color, !!ref.current?.initialRender)}>
      <Slider {...settings}>
        <div css={posterTop('lightblue')}>
          <div css={left}>
            <div css={text}>
              <h1>Need to find a home for your furry friends?</h1>
            </div>
          </div>
          <div css={right}>
            <img src={two_cats} alt="two_cats" />
          </div>
        </div>
        <div css={posterTop('pink')}>
          <div css={left}>
            <div css={text}>
              <h1>Want to find your purry companion?</h1>
            </div>
          </div>
          <div css={right}>
            <img src={two_cats} alt="two_cats" />
          </div>
        </div>
      </Slider>
    </div>
  )
}

declare module 'react' {
  interface customHTMLDivElement extends HTMLDivElement {
    initialRender: boolean
  }
}

const posterBlock = (color: string, initialRender: boolean) => css`
  padding: 2rem;
  background: ${color};
  ${initialRender
    ? ''
    : css`
        transition: background 1s;
      `}
`

const right = css`
  img {
    width: 50rem;
  }
`

const left = css``

const text = css`
  font-family: citcat;
  color: white;
  letter-spacing: 1px;
  h2 {
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
