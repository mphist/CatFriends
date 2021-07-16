import { css } from '@emotion/react'
import { spinner } from '../../assets/images'

export type SpinnerProps = {}

function Spinner({}: SpinnerProps) {
  return (
    <div css={loadingMsg}>
      <img src={spinner} alt='spinner' />
    </div>
  )
}

const loadingMsg = css`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    animation: spin 1.25s infinite ease-in-out;
  }
`

export default Spinner
