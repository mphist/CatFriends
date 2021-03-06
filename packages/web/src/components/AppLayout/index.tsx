import { css } from '@emotion/react'

type AppLayoutProps = {
  children: React.ReactNode
}
type AppLayoutHeaderProps = AppLayoutProps
type AppLayoutMainProps = AppLayoutProps

export function AppLayout({ children }: AppLayoutProps) {
  return <div>{children}</div>
}

AppLayout.Header = ({ children }: AppLayoutHeaderProps) => {
  return <header css={header}>{children}</header>
}

AppLayout.Main = ({ children }: AppLayoutMainProps) => {
  return <main>{children}</main>
}

const header = css`
  height: 15rem;
`
