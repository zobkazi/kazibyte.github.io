import Link from 'next/link'
import React from 'react'

const Results = () => {
  return (
    <div>
      <div className='text-center h-svh '>
      <Link href='http://www.educationboardresults.gov.bd/' target='_blank'>
        <h1 className='text-center text-2xl font-bold hover:underline'>Results</h1>
      </Link>
      </div>
    </div>
  )
}

export default Results