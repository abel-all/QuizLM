import React from 'react'

interface props {
    children: React.ReactNode;
}

const WebsiteLayout = ({ children }: props) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default WebsiteLayout