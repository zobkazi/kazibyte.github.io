// src/app/page.tsx
import WhyChooseUs from '@/components/company/why-choose-us/WhyChooseUs'
import Hero from '@/components/home/Hero'
import Home from '@/components/home/Home'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <Home />
      
      <hr />

      <Hero />

      <WhyChooseUs />


      
    </div>
  )
}

export default HomePage