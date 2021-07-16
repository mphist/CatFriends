import { css } from '@emotion/react'
import { useHistory } from 'react-router-dom'
import { useOverlayState } from '../../atoms/overlay'

export type ConfirmBoxProps = {
  message: string
  redirect?: boolean
}

function ConfirmBox({ message, redirect = false }: ConfirmBoxProps) {
  const [, setOverlay] = useOverlayState()
  const history = useHistory()

  return (
    <div css={confirmMsg}>
      <h4>{message}</h4>
      <button
        onClick={() => {
          setOverlay({ show: false, disableScrolling: false })
          if (redirect) {
            history.replace('/')
            document.body.scrollTop = 0 // For Safari
            document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
          }
        }}
      >
        OK
      </button>
    </div>
  )
}

const confirmMsg = css`
  background: white;
  height: 5rem;
  width: 30rem;
  margin: 0 auto;
  position: relative;
  top: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  button {
    width: 3rem;
    height: 3rem;
    padding: 0.3rem;
    font-size: 1rem;
    letter-spacing: 1px;
    background: #7ecae0;
    color: white;
    outline: none;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`
export default ConfirmBox
