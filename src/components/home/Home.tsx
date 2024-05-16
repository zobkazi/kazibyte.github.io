import React from 'react'
import Image from 'next/image'
import TopNews from '../notice/pa/TopNews'

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
    <div className="container mx-auto py-8">

            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <Image alt="kazibyte-logo.png" width={60} height={60} src="https://github.com/kazibyte/kazibyte/blob/main/public/kazibyte-.png?raw=true" className="w-44 bg-gray-300 rounded-lg mb-4 shrink-0">

                        </Image>
                        <h1 className="text-xl font-bold">KaziByte</h1>
                        <p className="text-gray-700">Head of the Department</p>
                        
                    </div>
                    <hr className="my-6 border-t border-gray-300" />
                   
                          <TopNews />
                    
                </div>
                
                
            </div>
        </div>
        
      </div>
      
      
</div>

  )
}

export default Home