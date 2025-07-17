import React from 'react'
import Header from './_components/Header';
import Footer from './_components/Footer';
import HeroSection from './_components/HeroSection';

interface props {
    children: React.ReactNode;
}

const LandingPageLayout = ({ children }: props) => {
  return (
    <div>
        <Header />
        <HeroSection />
        <div className='relative z-10'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default LandingPageLayout