import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import WishlistPage from './Pages/WishlistPage'
import Creator from './Pages/Creator'
import { WishlistProvider } from './Components/Wishlist'

function App() {
  return (
    <WishlistProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/creator" element={<Creator />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WishlistProvider>
  )
}

export default App
