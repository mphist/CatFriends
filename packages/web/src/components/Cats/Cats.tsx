import { css } from '@emotion/react'
import { doris, nala, snow, lazy, cotton } from '../../assets/images'
import Card from '../Card'

type CatsProps = {}

export default function Cats({}: CatsProps) {
  // return (
  //   <div css={catsBlock}>
  //     <h2>New cats looking for a home</h2>
  //     <div css={cats}>
  //       <Card />
  //       <Card />
  //       <Card />
  //       <Card />
  //       <Card />
  //     </div>
  //   </div>
  // )

  return (
    <div css={catsGrid}>
      <img src={nala} alt="nala" />
      <img src={doris} alt="doris" />
      <img src={snow} alt="snow" />
      <img src={lazy} alt="lazy" />
      <img src={cotton} alt="cotton" />
      <img src={nala} alt="nala" />
      <img src={doris} alt="doris" />
      <img src={snow} alt="snow" />
      <img src={lazy} alt="lazy" />
      <img src={cotton} alt="cotton" />
      <img src={nala} alt="nala" />
      <img src={doris} alt="doris" />
      <img src={snow} alt="snow" />
      <img src={lazy} alt="lazy" />
      <img src={cotton} alt="cotton" />
      <img src={nala} alt="nala" />
    </div>
  )
}

const catsGrid = css`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1px;
  /* grid-auto-rows: minmax(15rem, auto); */
  img {
    width: 14.8rem;
    height: 14.8rem;
    object-fit: cover;
  }
`

const catsBlock = css`
  margin-top: 3rem;
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
