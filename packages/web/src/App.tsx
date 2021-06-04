import { css, Global } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppLayout.Header>
          <Header />
        </AppLayout.Header>
        {/* <AppLayout.Main></AppLayout.Main> */}
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
`

export default App
