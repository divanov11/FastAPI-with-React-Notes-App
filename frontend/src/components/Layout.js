import React from 'react'
import Header from './Header'

const Layout = (props) => {
  return (
    
     <div className="container dark">
        <div className="app">
        <Header/>
        {props.children}
        </div>
      </div>
    
  )
}

export default Layout