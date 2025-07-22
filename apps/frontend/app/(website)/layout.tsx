import React from 'react'
import Header from './_components/Header';

interface props {
    children: React.ReactNode;
}

const WebsiteLayout = ({ children }: props) => {
  return (
    <div>
        <Header />
        <div className='container mx-auto px-4 mt-24'>
          {children}
        </div>
    </div>
  )
}

export default WebsiteLayout