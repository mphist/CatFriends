import { css, Global } from '@emotion/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { RecoilRoot, useRecoilValue } from 'recoil'
import Cats from './components/Cats'
import Header from './components/Header'
import Poster from './components/Poster'
import ForAdopt from './pages/ForAdopt'
import Adopt from './pages/Adopt'
import { overlayState } from './atoms/overlay'

function App() {
  const { disableScrolling } = useRecoilValue(overlayState)
  return (
    <BrowserRouter>
      <Switch>
        <AppLayout>
          <Route path={['/', '/foradopt', '/adopt', '/contact']} exact>
            <AppLayout.Header>
              <Header />
            </AppLayout.Header>
          </Route>
          <AppLayout.Main>
            <Route path={'/'} exact>
              <Poster slide={true} />
              <Cats />
            </Route>
            <Route path='/foradopt'>
              <Poster slide={false} type='forAdopt' />
              <ForAdopt />
            </Route>
            <Route path='/adopt'>
              <Poster slide={false} type='adopt' />
              <Adopt />
            </Route>
          </AppLayout.Main>
          <Global styles={styles(disableScrolling)} />
        </AppLayout>
      </Switch>
    </BrowserRouter>
  )
}

const styles = (disableScrolling: boolean) => css`
  div,
  body,
  #root {
    margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    ${disableScrolling
      ? css`
          overflow: hidden;
        `
      : ''}
  }

  @font-face {
    font-family: chelseaMarket;
    src: url('fonts/ChelseaMarket-Regular.ttf');
  }
`

export default App
