import React from 'react';
import Link from 'next/link';

const FooterData = [
  {
    title: 'About',
    href: '/company/about-us',
  },
  {
    title: 'Contact',
    href: '/information/contact-us',
  },
  {
    title: 'Terms of Service',
    href: '/p&p',
  },
  {
    title: 'Privacy Policy',
    href: '/t&s',
  },
];


const FooterBody = {
  title: 'kazibyte',
  body: 'Software Development Company',
  address: 'Dhaka, Bangladesh',
  email: 'kazibyte@kazibyte',
  phone: '123-456-7890',
}

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <Link href="/" className="hover:underline">{FooterBody.title} </Link>. {FooterBody.body }</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {FooterData.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <p className="hover:underline flex  me-4 md:me-6">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
