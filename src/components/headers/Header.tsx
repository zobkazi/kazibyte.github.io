'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';




const NavbarMenuData = [
 
  {
    title: 'Services',
    href: '/services',
    sublinks: [
      {
        title: 'Full-Stack',
        href: '/services/full-stack',
      },
      {
        title: 'API Development',
        href: '/services/api-integration',
      },
      {
        title: 'Website Design',
        href: '/services/website-design',
      },
      {
        title: 'Case Studies',
        href: '/services/case-studies',
      }
    ]
  },
   {
    title: 'Company',
    href: '/company',
    sublinks: [
      {
        title: 'About-us',
        href: '/company/about-us',
      },
      {
        title: 'Blog',
        href: '/company/blog',
      },
      {
        title: 'Portfolio',
        href: '/company/portfolio',
      },
      {
        title: 'Why Choose Us',
        href: '/company/why-choose-us',
      },
    ]
  },
  {
      title: 'F&Q',
    href: '/f&q',
  },
  {
    title: 'Login',
    href: '/login',
    sublinks: [
      {
        title: 'Login',
        href: '/login',
      },
      {
        title: 'Register',
        href: '/register',
      },
    ]
  }
];

import icons from '@/assets/images/kazibyte-.png';
const bodyData = {
  title: 'Kazibyte',
  body: 'Software Development Company',
  icon: icons,
}



const Navbar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
   const [isScrolled, setIsScrolled] = useState<boolean>(false);

  
  
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty dependency array, so it only runs once on mount


  const handleMenuHover = (index: number | null) => {
    setOpenMenuIndex(index);
  };

  const handleCloseMenu = () => {
    setOpenMenuIndex(null);
  };

  return (

    <nav className={`bg-white  z-50 w-full ${isScrolled ? 'fixed top-0 bg-blue-300 bg-opacity-35' : 'bg-opacity-20 bg-blue-50'}`} >
    <div>
        <div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
      
       <Image width={84} height={84} src={bodyData.icon} alt="logo" />
            </div>
           <Link href="/">
                  <h1 className='text-3xl font-bold'>{ bodyData.title }</h1>
           </Link>
            <div className="space-x-4 hidden md:block ml-80 ">
              <div className="flex items-baseline">

                {NavbarMenuData.map((item, index) => (  
                  <div key={index} className="relative">
                    <Link
                      href={item.href}
                      className="text-black font-serif hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium uppercase"
                      onMouseEnter={() => handleMenuHover(index)}
                      onMouseLeave={handleCloseMenu}
                    >
                      {item.title}
                    </Link>
                    {item.sublinks && openMenuIndex === index && (
                      <div
                        className="absolute z-10 mt-2 w-64 bg-slate-100 origin-top-right rounded-md"
                        onMouseEnter={() => handleMenuHover(index)}
                        onMouseLeave={handleCloseMenu} 
                      >
                        <div className="py-1">
                          {item.sublinks.map((sublink, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sublink.href}
                              className="text-black font-serif block px-4 py-2 text-2xl hover:bg-orange-100 hover:underline"
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
           
            </div>
       
          </div>
         <MobileHeader />
        </div>
      </div>
   
        </div>
    </div>
    </nav>

  );
};

export default Navbar;
