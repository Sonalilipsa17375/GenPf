import React from 'react'
import Main from './components/Mai'
import Resume from './Resume/page'
import ContextState from './ContextState'
import Navbar from './components/Navbar'
// import Navbar from './components/Navbar'

const page = ({component,pageProps}) => {
  return (
    
    <ContextState>  
    <Main/>
  </ContextState>
   
  )
}

export default page
