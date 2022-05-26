import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ExplorePage from './pages/ExplorePage'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import Listing from './pages/Listing'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-full">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route
              path="/category/:categoryName"
              element={<CategoriesPage />}
            />
            <Route
              path="/category/:categoryName/:listingId"
              element={<Listing />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
