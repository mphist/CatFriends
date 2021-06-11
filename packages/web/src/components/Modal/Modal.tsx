import { css } from '@emotion/react'

type ModalProps = {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
  return (
    <div css={modal}>
      <div className="children">{children}</div>
      <div css={btn}>
        <button>close</button>
      </div>
    </div>
  )
}

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
`
