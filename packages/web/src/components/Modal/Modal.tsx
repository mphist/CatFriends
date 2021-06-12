import { css } from '@emotion/react'
import { useModalState } from '../../atoms/modal'
import Icon from '../Icon'

type ModalProps = {
  children: React.ReactNode
  show: boolean
}

export default function Modal({ children, show }: ModalProps) {
  const [, setShowModal] = useModalState()

  const onClick = () => {
    setShowModal(false)
  }

  if (show)
    return (
      <div css={modal}>
        <div className="children">{children}</div>
        <div css={btn} onClick={onClick}>
          <Icon name="close_button" css={closeButton} />
        </div>
      </div>
    )
  return null
}

const closeButton = css`
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
  }
`

const modal = css`
  width: 100%;
  height: 80%;
  background: white;
  z-index: 3;
  position: fixed;
  top: 12rem;
  display: flex;
  .children {
    width: 95%;
  }
`
const btn = css`
  width: 5%;
  height: 2rem;
  button {
    height: 2rem;
  }
  svg {
    width: 3rem;
    height: 3rem;
  }
`
