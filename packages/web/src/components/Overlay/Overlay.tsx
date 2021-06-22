import { css } from '@emotion/react'

type OverlayProps = { children: React.ReactNode; show: boolean }

export default function Overlay({ children, show }: OverlayProps) {
  return <div css={overlay(show)}>{children}</div>
}

const overlay = (show: boolean) => css`
  ${show
    ? css`
        content: '';
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 4;
        background: rgba(0, 0, 0, 0.2);
      `
    : css`
        display: none;
      `}
`
