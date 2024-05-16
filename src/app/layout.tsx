import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/headers/Header";
import {keywordData} from '@/config/keywords/Keywords.json'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Kazi Byte TM",
  description: "KKMDM is a student-run, non-profit, student-led, and student-run organization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
    <head>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* <meta name="keywords" content={keywordData.map(keyword => keyword).join(',')} /> */}
        <title>Kazi Byte</title>
    </head>
  
      <body className={inter.className}>
        <div className="">
          <Header />
       
          {children}

        
   
          <Footer />
        </div>
      </body>

    </html>
  );
}
