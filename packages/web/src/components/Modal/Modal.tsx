import { css } from '@emotion/react'
import { useModalState } from '../../atoms/modal'
import { useOverlayState } from '../../atoms/overlay'
import Icon from '../Icon'

type ModalProps = {
  children: React.ReactNode
  show: boolean
}

export default function Modal({ children, show }: ModalProps) {
  const [, setShowModal] = useModalState()
  const [, setOverlayState] = useOverlayState()

  const closeModal = () => {
    setShowModal(false)
    setOverlayState({ show: false, disableScrolling: false })
  }

  if (show)
    return (
      <div css={modal}>
        <div className='children'>{children}</div>
        <div css={btn} onClick={closeModal}>
          <Icon name='close_button' css={closeButton} />
        </div>
      </div>
    )
  return null
}

const closeButton = css`
  &:hover {
    cursor: pointer;
  }
`

const modal = css`
  width: 100%;
  height: 100%;
  background: white;
  z-index: 3;
  position: fixed;
  top: 0;
  display: flex;
  .children {
    width: 95%;
  }
`
const btn = css`
  margin-top: 2rem;
  width: 3rem;
  height: 3rem;
  button {
    height: 2rem;
  }
  svg {
    width: 3rem;
    height: 3rem;
  }
`
