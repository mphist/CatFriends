import { css } from '@emotion/react'
import { catfriends_logo } from '../../assets/images'

type LogoProps = {}

export default function Logo({}: LogoProps) {
  return (
    <div css={logo}>
      <img src={catfriends_logo} alt="catfriends_logo" />
    </div>
  )
}

const logo = css`
  height: 17rem;
  margin: 0 auto;
  margin-top: 1rem;
`
