import React from 'react'
import Header from './_components/Header';
import Footer from './_components/Footer';
import HeroSection from './_components/hero-section';

interface props {
    children: React.ReactNode;
}

const LandingPageLayout = ({ children }: props) => {
  return (
    <div>
        <Header />
        <HeroSection />
        <div className='container mx-auto px-4'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default LandingPageLayout