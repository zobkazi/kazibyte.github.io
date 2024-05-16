// src/app/page.tsx
import WhyChooseUs from '@/components/company/why-choose-us/WhyChooseUs'
import FAQ from '@/components/f&q/FAQ'
import Hero from '@/components/home/Hero'
import Home from '@/components/home/Home'
import Pricing from '@/components/pricing/Pricing'
import Testimonials from '@/components/testimonial/Testimonials'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <Home />
      
      <hr />

      <Hero />

      <hr />

      <FAQ />

      <hr />

      <Pricing />

      <hr />

      <Testimonials />

      <WhyChooseUs />


      
    </div>
  )
}

export default HomePage