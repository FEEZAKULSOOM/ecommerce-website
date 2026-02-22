import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation bar - visible on all pages */}
        <Nav />

        {/* Routes container - only one route renders at a time */}
        <Routes>
          {/* Home page - root URL */}
          <Route path="/" element={<Home />} />

          {/* Shop page */}
          <Route path="/shop" element={<Shop />} />

          {/* Shopping cart page */}
          <Route path="/cart" element={<Cart />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer - visible on all pages */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;