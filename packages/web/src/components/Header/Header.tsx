import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

type HeaderProps = {}

export default function Header({}: HeaderProps) {
  return (
    <div css={header}>
      <Logo />
      <div css={navigation}>
        <Link to="/foradopt">Find a Home</Link>
        <Link to="/adopt">Find a Cat</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div css={signin}>Sign In</div>
    </div>
  )
}

const signin = css`
  width: 6rem;
`

const navigation = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  a {
    text-decoration: none;
    color: black;
  }
`

const header = css`
  border-bottom: 2px solid;
  border-color: #d3d1d1;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  z-index: 4;
  height: 1rem;
  width: 100%;
  background: white;
`
