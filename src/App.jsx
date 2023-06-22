import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/layout'
import Home from './Pages/Home/home'
import Shelf from './Pages/Shelf/shelf'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shelf" element={<Shelf />} />
      </Routes>
    </Layout>
  )
}

export default App
