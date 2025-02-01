import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './sitepages/home'
import Page1 from './sitepages/page1'
import Page2 from './sitepages/page2'
import Layout from './Layout'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
