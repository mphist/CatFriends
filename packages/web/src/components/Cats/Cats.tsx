import { css } from '@emotion/react'
import { doris, nala, snow, lazy, cotton } from '../../assets/images'
import { useModalState } from '../../atoms/modal'
import { useOverlayState } from '../../atoms/overlay'
import CatProfile from '../CatProfile'
import Modal from '../Modal'

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

  const [showModal, setShowModal] = useModalState()
  const [, setOverlayState] = useOverlayState()

  const onClick = () => {
    setOverlayState({ show: false, disableScrolling: true })
    setShowModal(true)
  }

  return (
    <div css={catsBlock}>
      <div css={catsGrid}>
        <img src={nala} alt='nala' onClick={onClick} />
        <img src={doris} alt='doris' onClick={onClick} />
        <img src={snow} alt='snow' onClick={onClick} />
        <img src={lazy} alt='lazy' onClick={onClick} />
        <img src={cotton} alt='cotton' onClick={onClick} />
        <img src={nala} alt='nala' onClick={onClick} />
        <img src={doris} alt='doris' onClick={onClick} />
        <img src={snow} alt='snow' onClick={onClick} />
        <img src={lazy} alt='lazy' onClick={onClick} />
        <img src={cotton} alt='cotton' onClick={onClick} />
        <img src={nala} alt='nala' onClick={onClick} />
        <img src={doris} alt='doris' onClick={onClick} />
        <img src={snow} alt='snow' onClick={onClick} />
        <img src={lazy} alt='lazy' onClick={onClick} />
        <img src={cotton} alt='cotton' onClick={onClick} />
        <img src={nala} alt='nala' onClick={onClick} />
      </div>
      <Modal show={showModal}>{/* <CatProfile /> */}</Modal>
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

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`

const catsBlock = css`
  margin-top: 3rem;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`

const cats = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
