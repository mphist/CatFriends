import { css } from '@emotion/react'
import Card from '../Card'

type CatsProps = {}

export default function Cats({}: CatsProps) {
  return (
    <div css={catsBlock}>
      <h2>New cats looking for a home</h2>
      <div css={cats}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

const catsBlock = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const cats = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
