import { css, Global } from '@emotion/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import Cats from './components/Cats'
import Header from './components/Header'
import Poster from './components/Poster'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <AppLayout>
            <Route path={['/', '/foradopt', '/adopt', '/contact']} exact>
              <AppLayout.Header>
                <Header />
              </AppLayout.Header>
            </Route>
            <AppLayout.Main>
              <Route path={['/', '/foradopt', '/adopt']} exact>
                <Poster />
              </Route>
              <Route path="/" exact>
                <Cats />
              </Route>
            </AppLayout.Main>
            <Global styles={styles} />
          </AppLayout>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  )
}

const styles = css`
  div,
  body,
  #root {
    margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  @font-face {
    font-family: chelseaMarket;
    src: url('fonts/ChelseaMarket-Regular.ttf');
  }
`

export default App
