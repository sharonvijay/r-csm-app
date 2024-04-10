import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import StatusComponent from '../components/StatusComponent'
import Footer from '../components/Footer'
const Status = () => {

  return (
    <div>
        <Navbar/>
        <StatusComponent />
        <Footer/>
    </div>
  )
}

export default Status