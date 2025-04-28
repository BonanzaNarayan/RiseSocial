import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homes from './page/Homes'
import Services from './page/service/Services'
import HowItWorks from './page/HowItWorks'
import PlaceOrder from './page/service/PlaceOrder'
import ContactUs from './page/ContactUs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/services" element={<Services />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  )
}

export default App