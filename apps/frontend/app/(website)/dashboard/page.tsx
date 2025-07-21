import React from 'react'
import Header from '../_components/Header'
import CreateNewSection from '../_components/CreateNewSection'
import QuizzesSection from '../_components/QuizzesSection'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className='container mx-auto px-4 mt-24'>
          <CreateNewSection />
          <QuizzesSection />
        </div>
    </div>
  )
}

export default Dashboard