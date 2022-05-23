import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExplorePage from './pages/ExplorePage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </Router>
  )
}

export default App
