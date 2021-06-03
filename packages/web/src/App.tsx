import { AppLayout } from './components/AppLayout'
import Header from './components/Header'

function App() {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>
      {/* <AppLayout.Main></AppLayout.Main> */}
    </AppLayout>
  )
}

export default App
