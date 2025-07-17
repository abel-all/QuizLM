import React from 'react'
import HowItWork from './_components/HowItWork'
import Privacy from './_components/Privacy'
import HowToUse from './_components/HowToUse'
import WhatPeopleSay from './_components/WhatPeopleSay'
import Pricing2 from './_components/Pricing'

const LangingPage = () => {
  return (
    <div className='flex flex-col gap-20'>
      <HowItWork />
      <Privacy />
      <HowToUse />
      <WhatPeopleSay />
      <Pricing2 />
    </div>
  )
}

export default LangingPage