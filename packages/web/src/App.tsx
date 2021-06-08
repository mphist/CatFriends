import { css, Global } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import Cats from './components/Cats'
import Header from './components/Header'
import Poster from './components/Poster'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppLayout.Header>
          <Header />
        </AppLayout.Header>
        <AppLayout.Main>
          <Poster />
          <Cats />
        </AppLayout.Main>
        <Global styles={styles} />
      </AppLayout>
    </BrowserRouter>
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
