import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo'

type HeaderProps = {}

export default function Header({}: HeaderProps) {
  const { pathname } = useLocation()
  return (
    <div css={header}>
      <Logo />
      <div css={navigation}>
        <div css={navMenu(pathname.replace('/', ''))}>
          <span id="foradopt">
            <Link to="/foradopt">Find a Home</Link>
          </span>
          <span>
            <Link to="/adopt" id="adopt">
              Find a Cat
            </Link>
          </span>
          <span>
            <Link to="/contact" id="contact">
              Contact
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

const signin = css`
  width: 6rem;
`

const navMenu = (pathname: string) => css`
  margin: 0 auto;
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  span {
    width: 10rem;
    text-align: center;
  }
  #${pathname} {
    font-weight: bold !important;
  }
`

const navigation = css`
  margin: 1rem auto;
  width: 100%;
  height: 3rem;
  a {
    text-decoration: none;
    color: black;
  }
  background: #eeecec;
`

const header = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: white;
  height: 16rem;
`
