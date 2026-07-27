import React from 'react'
import CompanyCard from './CompanyCard'
import Company from './components/Company'
import { Link } from 'react-router-dom'

export default function Home() {
   return(
    <>
    {/* hero section  */}
    <section className='bg-blue-100 py-20'>
       <div className='max-w-7xl mx-auto text-center'>
        <h1 className='text-5xl font-bold text-blue-700 mb-4'>Welcome to Placement Portal</h1>
        <p className='text-4xl text-gray-700 mb-8'>Helping Students Get their Dream Jobs.</p>
        <div className='flex justify-center gap-4'>
          <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'><Link to='/register'>Register Now</Link></button>
          <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>View Companies</button>
        </div>
       </div>
    </section>

    {/* Statitics Section  */}
    <section className='max-w-7xl mx-auto px-6 py-16'>
      <h2 className='text-3xl font-bold text-center mb-10'>Placement Statistics</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-white shadow-lg p-8 rounded-lg text-center'>
          <h3 className='text-4xl font-bold text-blue-600'>500+</h3>
          <p className='mt-2 text-gray-600'>Student placed</p>
        </div>
        <div  className='bg-white shadow-lg p-8 rounded-lg text-center'>
          <h3 className='text-4xl font-bold text-blue-600'>50+</h3>
          <p className='mt-2 text-gray-600'>Companies visited</p>
        </div>
        <div  className='bg-white shadow-lg p-8 rounded-lg text-center'>
          <h3 className='text-4xl font-bold text-blue-600'>25 LPA</h3>
          <p className='mt-2 text-gray-600'>Heightest Package</p>
        </div>
      </div>
    </section>
      
      {/* <Company/> */}
    </>
   )
}
