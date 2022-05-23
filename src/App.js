import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExplorePage from './pages/ExplorePage'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
