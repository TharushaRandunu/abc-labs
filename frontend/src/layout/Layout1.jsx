import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'

const Layout1 = () => {
  return (
    <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout1