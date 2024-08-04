// import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Review from './components/Review'

const App = () => {
  return (
    <div >
      <Navbar />
     <main>
      <div id='home'> 
        <Home />
      </div>
      <div id='menu'>
        <Menu />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='products'>
        <Product />
      </div>
      <div id='review'>
        <Review />
      </div>
      <Footer />
     </main>
    </div>
  )
}

export default App