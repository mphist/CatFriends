import { css } from '@emotion/react'
import { useHistory } from 'react-router-dom'
import { catfriends_logo } from '../../assets/images'

type LogoProps = {}

export default function Logo({}: LogoProps) {
  const history = useHistory()
  return (
    <div css={logo}>
      <img
        src={catfriends_logo}
        alt="catfriends_logo"
        onClick={() => history.push('/')}
      />
    </div>
  )
}

const logo = css`
  height: 17rem;
  margin: 0 auto;
  margin-top: 1rem;
  img {
    &:hover {
      cursor: pointer;
    }
  }
`
